/**
 * SnnGJ Developer Portfolio - Main Script
 * Handles Dark/Light theme switching, mobile menu, and interactive helpers.
 */

(function () {
  'use strict';

  // --- Theme Management ---
  const THEME_STORAGE_KEY = 'snngj-theme';
  const htmlElement = document.documentElement;

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateThemeToggleIcons(theme);
  }

  function updateThemeToggleIcons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      if (theme === 'light') {
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>`;
        btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
      } else {
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>`;
        btn.setAttribute('aria-label', 'Cambiar a modo claro');
      }
    });
  }

  // Initialize theme on DOM load
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  // Listen to system changes if no explicit storage
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Re-sync theme button icons
    updateThemeToggleIcons(htmlElement.getAttribute('data-theme') || 'dark');

    // Theme toggle button click
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const active = htmlElement.getAttribute('data-theme') || 'dark';
        const next = active === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    });

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // Code copy buttons
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach((pre) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-code-btn';
      copyBtn.textContent = 'Copiar';
      copyBtn.type = 'button';
      copyBtn.addEventListener('click', async () => {
        try {
          const code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
          await navigator.clipboard.writeText(code.trim());
          copyBtn.textContent = '¡Copiado!';
          setTimeout(() => {
            copyBtn.textContent = 'Copiar';
          }, 2000);
        } catch (err) {
          copyBtn.textContent = 'Error';
        }
      });
      wrapper.appendChild(copyBtn);
    });
  });
})();
