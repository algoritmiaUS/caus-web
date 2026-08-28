# Guía de contribución

Gracias por querer contribuir a la web del CAUS. Este documento recoge **cómo contribuir** y **qué convenciones seguir**. Antes de empezar, lee el [README](README.md) para instalación y ejecución local.

## Índice

- [Flujo de trabajo](#flujo-de-trabajo)
- [Crear contenido](#crear-contenido)
- [Convenciones de nombres](#convenciones-de-nombres)
- [Etiquetas](#etiquetas)
- [Colores y CSS](#colores-y-css)
- [Formato y comprobaciones](#formato-y-comprobaciones)

## Flujo de trabajo

1. **Crea una rama** desde `main` con nombre descriptivo (`feat/charlas-marzo`, `fix/typo-about`).
2. **Haz tus cambios** siguiendo las convenciones de este documento.
3. **Comprueba localmente** antes de hacer push:
   ```bash
   bun run check:naming  # kebab-case, imágenes y carpetas news (scripts/check-naming.ts)
   bun run format        # formatea el código
   bun convert           # si añadiste png/jpg → convierte a webp
   bun run build         # debe compilar sin errores
   ```
4. **Abre una Pull Request** contra `main`. Describe qué cambia y añade capturas si es visual.
5. El **CI** ([`ci.yaml`](.github/workflows/ci.yaml)) verificará automáticamente:
   - `bun run check:naming` — nombres en kebab-case, ASCII, sufijo `-N` y solo `.webp`/`.svg`.
   - `prettier --check` sin errores.
   - `hugo --gc --minify` compila correctamente.
6. Tras revisión y CI en verde, se hace merge y el deploy a Pages es automático.

> Haz commits pequeños y con mensajes claros (`feat: añade charlas marzo`, `fix: corrige ruta de imagen`).

## Crear contenido

### Nueva noticia (`content/news`)

Las noticias son **page bundles** (carpeta con `index.md` + imágenes).

```bash
hugo new content/news/2026-03-charlas-marzo/index.md
# crea content/news/2026-03-charlas-marzo/index.md
```

Edita el front-matter:

```yaml
---
title: 'Charlas de Marzo 2026'
date: 2026-03-10
categories: eventos
tags: ['eventos', 'charlas']
featured_image: images/featured/charlas.webp
---
```

- Añade el cuerpo en Markdown.
- Coloca las imágenes del artículo **dentro del bundle** y con sufijo `-N` si hay serie.
- Referencia la portada vía `featured_image` (ver convenciones de `assets/images` más abajo).

### Datos de rankings (`data/`)

```yaml
# data/complicaus-5.yaml
# referenciado en el contenido como:
# {{< rankings "complicaus-5" >}}
```

Sin extensión y con guión en el shortcode.

## Convenciones de nombres

Principio general: **todo en minúsculas, kebab-case con `-`**. Evita `_`, mayúsculas, tildes, `ñ` y caracteres no ASCII. Hugo es case-sensitive en Linux, por lo que la referencia en front-matter/config/layouts debe coincidir exactamente con el nombre en disco.

| Regla             | Correcto                               | Incorrecto                           |
| ----------------- | -------------------------------------- | ------------------------------------ |
| Separador         | `ada-byron`                            | `Ada-Byron`, `ada_byron`             |
| Numeración        | `complicaus-5`, `participantes-1.webp` | `complicaus5`, `participantes1.webp` |
| Variante + número | `adabyron-andalucia-admins-3`          | `adabyron-andalucia-3-admins`        |
| Dobles guiones    | `logo-caus.webp`                       | `logo--caus.webp`                    |

### `content/news` — directorios

Formato: `yyyy-mm-{slug}` en minúsculas.

| Tipo               | Patrón                                                         | Ejemplo                               |
| ------------------ | -------------------------------------------------------------- | ------------------------------------- |
| AdaByron Andalucía | `adabyron-andalucia-$N`                                        | `2024-05-adabyron-andalucia-1`        |
| AdaByron Nacional  | `adabyron-nacional-$N`                                         | `2024-06-adabyron-nacional-2`         |
| ComplicAUS         | `anuncio-complicaus-$N` / `complicaus-$N`                      | `2025-03-complicaus-5`                |
| Elecciones         | `elecciones-caus-$YY-$YY` / `resultados-elecciones-caus-$YYYY` | `2024-10-elecciones-caus-24-25`       |
| Charlas            | `charlas-$mes`, `serie-matematicas`                            | `2025-02-charlas-febrero`             |
| Puntuales          | —                                                              | `creacion-web`, `advent-of-code-2024` |

Imágenes dentro del bundle: `participantes-1.webp`, `ganadores-a.webp`.

### `data/`

`adabyron-andalucia-$N.yaml`, `adabyron-nacional-$N.yaml`, `complicaus-$N.yaml`.

```md
{{< rankings "complicaus-3" >}}
{{< achievements/adabyron-teams "adabyron-andalucia-2" >}}
```

### `assets/images/`

| Carpeta     | Patrón                                                                                       | Referencia                                                            |
| ----------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `featured/` | `adabyron-andalucia-$N.webp`, `cartel-complicaus-$N.webp`, `charlas.webp`, `bienvenida.webp` | `featured_image: images/featured/<nombre>`                            |
| `home/`     | `complicaus-5.webp`, `roco.webp`                                                             | `config/_default/hugo.yaml` → `params.p1`/`p2` como `images/home/...` |
| `icons/`    | `calendar.svg`, `github.svg`                                                                 | kebab-case, `.svg`                                                    |

### `static/images/`

| Carpeta                                    | Patrón                                                                 | Ejemplo                           |
| ------------------------------------------ | ---------------------------------------------------------------------- | --------------------------------- |
| `about/`                                   | `charla-$N.webp`, `comida-caus-$N.webp`, `caus-sesiones-$N.webp`       | `charla-1.webp`                   |
| `global/`                                  | `logo-caus.webp`, `author-caus.webp`, `logo-etsii-color.webp`          | —                                 |
| `members/` `admins/` `elecciones-$YY-$YY/` | `nombre-apellidos.webp`                                                | `fernando-giraldez.webp`          |
| `winners-complicaus-$N/`                   | `first.webp`, `second.webp`, `third.webp` (`secondary.webp` si aplica) | `winners-complicaus-5/first.webp` |

### Imágenes — reglas generales

- **Formato final obligatorio:** `.webp` (y `.svg` para iconos). No se permiten `png`/`jpg`/`jpeg`/`gif` en el repositorio — el CI fallará.
- **Conversión:** ejecuta `bun convert` (`scripts/convert.ts` → redimensiona a máx. 1500px, `webp` q80) antes de commitear y borra los originales. No commitees imágenes sin convertir.
- Usa nombres descriptivos y numera series con sufijo `-N`.

## Etiquetas

Usa **solo** las etiquetas de esta lista (siempre en minúsculas). La categoría general `eventos` requiere además una etiqueta específica.

| Etiqueta            | Uso                                                                           |
| ------------------- | ----------------------------------------------------------------------------- |
| `eventos`           | Categoría base para cualquier actividad del club                              |
| `charlas`           | Charlas y talleres mensuales                                                  |
| `serie-matematicas` | Entradas de la serie de matemáticas (acompaña a `charlas`)                    |
| `complicaus`        | Competiciones internas ComplicAUS                                             |
| `adabyron`          | Concurso AdaByron (Andalucía y nacional)                                      |
| `competiciones`     | Etiqueta común para cualquier competición (junto a `complicaus` o `adabyron`) |
| `elecciones`        | Convocatorias y resultados de elecciones                                      |
| `noticias`          | Anuncios generales que no son eventos                                         |

Ejemplo en front-matter:

```yaml
categories: eventos
tags: ['eventos', 'charlas']
# serie-matematicas:
# tags: ['eventos', 'charlas', 'serie-matematicas']
# competición:
# tags: ['eventos', 'competiciones', 'adabyron']
```

## Colores y CSS

- **Paleta centralizada** en `assets/css/colors.css` dentro de `@theme` de Tailwind v4. Para cambiar un color, edita la variable `--color-*` y reconstruye. Las clases de Tailwind (`text-primary-600`, `bg-gray-900`, etc.) se resuelven automáticamente desde esas variables — no modifiques layouts para cambiar colores.
- Genera rampas con https://www.tailwindshades.com si necesitas nuevos tonos (`primary-50` … `primary-900`, `secondary`, `neutral`, etc.).
- Tailwind purga el CSS no usado: solo los tonos referenciados en alguna clase se incluyen en el bundle final.
- **`theme_color` del navegador** (`<meta name="theme-color">`) no puede leer variables CSS. Se configura en `config/_default/hugo.yaml` > `params.theme_color` y debe mantenerse sincronizado con `--color-white` de `colors.css`.
- **CSS global compartido** (ej. modal de `rankings` y `team-rankings`) vive en `assets/css/main.css`. Usa siempre `var(--color-*)` en lugar de valores en duro (`#hex`, `rgb(...)`) para que la paleta siga centralizada.
- **Layouts:** solo Tailwind y valores por defecto de Hugo. Un layout = una sola responsabilidad. Evita estilos inline.

## Formato y comprobaciones

Ejecuta estos comandos antes de abrir PR:

```bash
bun run check:naming  # valida nombres e imágenes (ver detalle abajo)
bun run format        # formatea con Prettier (+ prettier-plugin-go-template)
bun run format:check  # lo mismo que comprueba el CI
bun run build         # genera ./public y detecta errores de Hugo
```

El CI falla si alguno de estos checks no pasa. Si el build falla localmente, revisa que las referencias a imágenes/datos coincidan exactamente con los nombres en disco.

### `check:naming` (`scripts/check-naming.ts`)

Valida todo el repositorio (`git ls-files`) sin excepciones:

- **ASCII** — sin `ñ`, tildes ni caracteres no ASCII.
- **Minúsculas** — sin mayúsculas.
- **kebab-case** — directorios y ficheros en `content/`, `data/`, `assets/`, `static/` y `config/` deben coincidir con `^[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+)*$` (se permiten `_index.md`, `_default`, etc. de Hugo).
- **Sufijo numérico** — usa `-N` antes de la extensión (`imagen-2.webp`), no `imagen2.webp`. Sin excepciones — por ejemplo `advent-of-code-2024.webp`, no `adventofcode2024.webp`.
- **Formato de imágenes** — solo `.webp` y `.svg` permitidos (en `assets/images/`, `static/images/` y `content/news/`). Cualquier `png`/`jpg`/`jpeg`/`gif` falla; conviértelas con `bun convert`.
- **Carpetas `content/news/`** — deben ser `yyyy-mm-slug` (`2024-12-advent-of-code-2024`).

Configuración centralizada en `CONFIG` al inicio de `scripts/check-naming.ts`. Para añadir una regla estricta usa `customRules`; no añadas excepciones por fichero — renombra el fichero a kebab-case.

### Checklist rápido antes de hacer push

- [ ] `bun run check:naming` sin errores (kebab-case, sin tildes ni mayúsculas, `-N` con guion)
- [ ] Imágenes en `.webp`/`.svg` (ejecutado `bun convert` si aplica)
- [ ] `tags`/`categories` de la lista permitida
- [ ] `bun run format` ejecutado
- [ ] `bun run build` compila sin errores
