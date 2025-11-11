# CV GitHub Pages

Un CV publicado en GitHub Pages y
hecho con [lume](https://lume.land), [UnoCSS](https://unocss.dev) y [DaisyUI](https://daisyui.com)

## Estructura del proyecto

- `_config.ts`: Configuración de Lume
- `_includes`: Layouts para las páginas
  - `base.vto`: Layout base (con navbar y estilos)
  - `home.vto`: Layout página principal
- `_data.yml`: Datos para navbar
- `index.yml`: Página principal
- `portafolio.page.ts`: Página portafolio
- `assets`: Archivos estáticos

## Aclaraciones

- En realidad todo es HTML y CSS bajo la manga, el TypeScript
  (JavaScript "tuneado") en realidad solo genera dicho HTML y CSS,
  no es incluido en el sitio final

- El código HTML base se encuentra en los archivos `.vto` dentro
  de la carpeta `_includes`
