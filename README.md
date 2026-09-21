# SnnGJ.github.io

Sitio web personal, blog de desarrollo (devlog) y vitrina de proyectos de software de **Senén Guzmán Jiménez (SnnGJ)**, optimizado para servirse de forma directa y ultra rápida a través de **GitHub Pages**.

URL oficial: **`https://SnnGJ.github.io`**

---

## 🚀 Proyectos Destacados Actuales

- **[CotizaMe](projects/cotizame/index.html)** (`v1.0.6`): Aplicación móvil Android para la gestión de cotizaciones, clientes, catálogo y estados de cuenta con arquitectura 100% offline-first y sellos criptográficos QR antifraude.

---

## 📁 Estructura del Repositorio

```text
├── index.html                  # Landing page principal (Hero, Bio, Proyectos, Devlog, Stack, Contacto)
├── 404.html                    # Página de error 404 personalizada y minimalista
├── .nojekyll                   # Evita procesamiento innecesario de Jekyll en GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css           # Sistema de diseño minimalista (Dark/Light mode, Bento grids, tipografía)
│   ├── js/
│   │   └── main.js             # Toggle de tema persistente, menú responsive, utilidades
│   └── images/
│       ├── favicon.svg         # Favicon vectorial minimalista de SnnGJ
│       ├── cotizame-logo.png   # Logotipo oficial de CotizaMe
│       └── cotizame-icon.webp  # Ícono de alta resolución de la app
├── projects/
│   └── cotizame/
│       └── index.html          # Landing de producto de CotizaMe (Features, Seguridad, Especificaciones, Descargas)
└── blog/
    └── cotizame-offline-first.html # Devlog técnico sobre la arquitectura de CotizaMe
```

---

## 🛠️ Cómo Probar Localmente

Puedes servir el sitio en tu máquina local con cualquier servidor web estático sencillo:

### Opción 1: Con Python (incluido por defecto en la mayoría de entornos)
```powershell
python -m http.server 8080
```
Luego abre tu navegador en `http://localhost:8080`.

### Opción 2: Con Node / npx
```powershell
npx serve .
```

---

## 🌐 Cómo Publicar en GitHub Pages (`SnnGJ.github.io`)

Para que el sitio quede visible en `https://SnnGJ.github.io`, sigue estos sencillos pasos:

1. **Crear el repositorio en GitHub**:
   - Ve a [GitHub](https://github.com/new) y crea un nuevo repositorio llamado exactamente: **`SnnGJ.github.io`**.
   - Déjalo público.

2. **Inicializar y subir los archivos desde tu terminal**:
   ```powershell
   cd "D:\IDEAS WEB\snngj-io"
   git init
   git add .
   git commit -m "feat: initial release of developer portfolio and CotizaMe showcase"
   git branch -M main
   git remote add origin https://github.com/SnnGJ/SnnGJ.github.io.git
   git push -u origin main
   ```

3. **Verificar la activación de GitHub Pages**:
   - En GitHub, ve a **Settings** > **Pages** dentro del repositorio `SnnGJ.github.io`.
   - Asegúrate de que la fuente esté configurada en:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` / `/ (root)`
   - En 1 a 2 minutos, tu sitio estará activo y accesible en:
     👉 **`https://SnnGJ.github.io`**

---

## ➕ Cómo Añadir Nuevos Proyectos y Artículos

- **Nuevo Proyecto**: Duplica la carpeta `projects/cotizame/`, nómbrala con el nombre de tu nuevo proyecto (por ejemplo `projects/mi-nuevo-proyecto/index.html`) y añade una tarjeta en la sección `#proyectos` de `index.html`.
- **Nuevo Artículo de Blog**: Crea un archivo `.html` dentro de `blog/` siguiendo la estructura de `cotizame-offline-first.html` y enlaza el artículo en la lista de Devlog en `index.html`.
