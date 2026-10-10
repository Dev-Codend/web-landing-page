# First Landing

Landing de un Diplomado en Marketing Virtual migrada a React y Vite con JavaScript. Conserva el contenido, los recursos y las medidas del diseño original.

## Ejecutar

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
```

Abre la dirección que imprime Vite. `index.html` es el punto de entrada de React; la aplicación se ejecuta mediante Vite.

```bash
npm run build     # Genera dist/ para hosting estático
npm run preview   # Sirve la compilación localmente
npm test          # Pruebas de navegador
```

Las pruebas usan Google Chrome instalado. Si prefieres Chromium de Playwright, instala el navegador con `npx playwright install chromium` y elimina `channel: 'chrome'` de `playwright.config.js`.

## Organización

```text
src/
├── assets/       # Imágenes e iconos originales
├── components/   # Carousel, Modal, FormField y EnrollmentForm
├── hooks/        # Carruseles, inscripción, media queries y bloqueo de scroll
├── layouts/      # Cabeceras y panel de inscripción
├── pages/
│   └── Landing/  # Página, secciones y contenido compartido
├── styles/       # ITCSS, variables, normalización, elementos, objetos y utilidades
├── App.jsx
└── main.jsx
```

Cada componente tiene su JSX y SCSS en la misma carpeta. `Landing` conecta el estado y los hooks con los componentes de presentación. No se crean `context`, `services` ni `utils` mientras no haya estado global, APIs o utilidades que los necesiten.

## Estilos

`src/styles/index.scss` establece las capas ITCSS mediante `@layer`: settings → generic → elements → objects → components → utilities. Vite compila los archivos `.scss` con Sass. La capa tools se añadirá si se necesitan mixins o funciones compartidas.

Las carpetas llevan un prefijo numérico que refleja ese orden:

```text
src/styles/
├── 00-settings/
├── 01-generic/
├── 02-elements/
├── 03-objects/
├── 04-components/
├── 05-utilities/
└── index.scss
```

Los componentes usan BEM (`study-plan__card`, `carousel__arrow--next`); los objetos compartidos tienen prefijo `o-` y las utilidades `u-`. Las variables de color y tipografía están en `src/styles/00-settings/tokens.scss`. `04-components/index.scss` reúne los módulos con `@use` de los estilos locales, que permanecen junto a sus componentes. El punto de entrada usa `sass:meta` y `meta.load-css` dentro de cada `@layer` para mantener el orden de las capas.

## Funcionalidad

- Los dos carruseles se controlan con React, tienen navegación circular, botones, flechas del teclado y transiciones de 300 ms.
- El formulario permanece fijo en escritorio y se abre con «Comienza aquí» en móvil.
- Los modales usan `<dialog>` para gestionar el foco y Escape. El modal de términos admite cierre por botón y fondo.
- El formulario valida campos y aceptación de términos. Al enviar muestra SweetAlert2 y limpia los campos al confirmar.
- El envío es una simulación local: no consulta una API, no envía información y no la persiste.

El contenido compartido está en `src/pages/Landing/content.js`. Los títulos, las fechas y los precios están en sus secciones respectivas. El texto de términos sigue siendo el texto de ejemplo original.

## Verificación

Las pruebas cubren carga de recursos, carruseles, modales, validación, éxito sin peticiones de red y conservación de datos al cambiar de tamaño. Se ejecutan en escritorio, laptop, tablet y móvil.

Referencias: [React](https://react.dev/reference/react), [Vite](https://vite.dev/guide/) y [SweetAlert2](https://sweetalert2.github.io/) y [Sass](https://sass-lang.com/documentation/).
