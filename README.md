# My CV / Portfolio (Next.js + Tailwind)

Resumen del proyecto
--------------------

Este repositorio contiene un sitio personal tipo CV/portafolio construido con Next.js, Tailwind CSS y componentes organizados siguiendo principios de Atomic Design (átomos, moléculas, organismos). Incluye secciones como perfil, habilidades, educación y un carrusel de proyectos.

Propósito
---------

Ofrecer una plantilla reutilizable para mostrar un currículum y portafolio en línea. Es fácil de personalizar (colores, contenidos, imágenes) y extender con nuevos componentes o secciones.

Tecnologías principales
----------------------

- Next.js (React)
- Tailwind CSS
- shadcn/ui (componentes utilitarios)
- embla-carousel-react (carrusel)
- TypeScript

Instalación y ejecución
------------------------

Requisitos: Node.js (16+), npm o pnpm.

Instala dependencias:

```bash
npm install
# o pnpm install
```

Desarrollo (servidor local):

```bash
npm run dev
# o pnpm dev
```

Build y producción:

```bash
npm run build
npm start
```

Estructura del proyecto
------------------------

- `app/` — Rutas y layouts de Next.js.
  - `app/page.tsx` — Página principal donde se ensamblan las secciones.
  - `app/globals.css` — Variables de tema y estilos globales.
- `app/components/` — Componentes organizados por capas:
  - `atoms/` — Componentes pequeños y puros (ej. `label`, `dateBadge`, `cardImage`, `profileImage`).
  - `molecules/` — Combinaciones de átomos (ej. `educationRow`, `educationSection`, `cardCarousel`).
  - `organism/` — Secciones completas (ej. `layout`, `lateralLayout`, `footer`).
- `components/ui/` — Wrappers de UI reutilizables (ej. `carousel.tsx` es el wrapper de Embla usado por los carousels).
- `public/` — Imágenes y assets públicos.

Componentes destacables
----------------------

- `Layout` (`app/components/organism/layout/index.tsx`): acepta `bgColor` para controlar el fondo de cada bloque.
- `DateBadge` (`app/components/atoms/dateBadge`): etiqueta para rangos de fecha.
- `EducationRow` / `EducationSection` (`app/components/molecules/*`): sección de educación con filas y separadores.
- `CardImage` (`app/components/atoms/cards/cardImage`): carta con imagen, título, extracto y enlace.
- `CardCarousel` (`app/components/molecules/cardCarousel`): carrusel de `CardImage` usando el wrapper `Carousel`.
- `Footer` (`app/components/organism/footer`): footer simple con copyright.

Cómo personalizar colores y temas
--------------------------------

Las variables de tema están en `app/globals.css` y definen valores como `--color-primary` y `--color-background`. Hay clases utilitarias que las usan:

- `bg-primary` → gris oscuro (por defecto)
- `bg-background` → blanco (por defecto)

Para cambiar el fondo de una sección, pasa la clase a `Layout`:

```tsx
<Layout bgColor="bg-background">...</Layout>
<Layout bgColor="bg-primary">...</Layout>
```

También puedes usar clases Tailwind estándar como `bg-blue-500`.

Carrusel de proyectos
----------------------

El wrapper `components/ui/carousel.tsx` expone:

- `Carousel` — contenedor principal
- `CarouselContent` — contenedor de slides (usa ref de Embla)
- `CarouselItem` — un slide individual
- `CarouselPrevious`, `CarouselNext` — controles

`CardCarousel` coloca `CardImage` dentro de `CarouselItem` y fija el ancho de cada slide para que se muestren varios ítems. Si ves solo una carta grande en el carrusel, revisa:




