# Contribuye al proyecto

Este documento recoge las reglas y pautas para contribuir a la página web del CAUS. Antes de tocar código, asegúrate de haber leído el [README](README.md), donde se explican la instalación y la ejecución del proyecto.

## Convenciones de nombres

### Regla general

- Todo en minúsculas, kebab-case con `-`. Nada de `_`, CamelCase ni mayúsculas (`Ada-Byron` → `ada-byron`, `Logo_ND` → `logo-nd`).
- Una sola palabra separada por un único `-`, sin espacios ni dobles guiones.
- Numeración siempre como sufijo decimal `-N` al final (`-1`, `-2`… sin ceros a la izquierda). Si hay variante, el número va al final: `ada-byron-andalucia-admins-3` (no `ada-byron-andalucia-3-admins`), `comida-caus-1`.
- Sin tildes, `ñ` ni caracteres no ASCII en nombres de fichero.
- Las referencias en front-matter, `config/_default/hugo.yaml` y layouts deben coincidir exactamente con el nombre en disco (Hugo es case-sensitive en Linux).

### `content/news`

- Directorios (page bundles): `yyyy-mm-{slug}` todo en minúsculas. `slug` según tipo:
  - `adabyron-andalucia-$N` / `adabyron-nacional-$N` (ej. `2024-05-adabyron-andalucia-1`)
  - `anuncio-complicaus-$N` / `complicaus-$N`
  - `elecciones-caus-$YY-$YY` / `resultados-elecciones-caus-$YYYY`
  - `charlas-$mes` (`charlas-febrero`, `charlas-octubre`...) y `serie-matematicas`
  - Casos puntuales: `creacion-web`, `advent-of-code-2024`
- Imágenes dentro del bundle: mismo kebab-case. Si hay serie, usar sufijo `-N`: `participantes-1.webp`, `ganadores-a.webp` (no `participantes1`, `ganadores-A`, `premio_secundario1`).

### `data/`

- `adabyron-andalucia-$N.yaml`, `adabyron-nacional-$N.yaml`, `complicaus-$N.yaml` (ej. `data/complicaus-3.yaml`).
- En shortcodes referenciar sin extensión y con guión: `{{< rankings "complicaus-3" >}}`, `{{< achievements/adabyron-teams "adabyron-andalucia-2" >}}`.

### `assets/images/`

- `featured/`: `ada-byron-andalucia-$N.webp`, `ada-byron-nacional-$N.webp`, `ada-byron-andalucia-admins-$N.webp`, `cartel-complicaus-$N.webp`, `complicaus-foto-grupal-$N.webp`, `charlas.webp`, `bienvenida.webp`, `adventofcode2024.webp`. Se usa vía `featured_image: images/featured/<nombre>` en el front-matter.
- `home/`: `complicaus-5.webp`, `roco.webp` (referenciado en `config/_default/hugo.yaml` `params.p1`/`p2` como `images/home/...`).
- `icons/`: `*.svg` en kebab-case (`calendar.svg`, `github.svg`).

### `static/images/`

- `about/`: `charla-$N.webp`, `comida-caus-$N.webp`, `competiciones-$N.webp`, `caus-sesiones-$N.webp`, `rocodromo.webp`.
- `global/`: `logo-caus.webp`, `author-caus.webp`, `logo-etsii-color.webp`, `logo-nd.webp`, `logo-us.webp`.
- `members/`, `admins/`, `elecciones-$YY-$YY/`: `nombre-apellidos.webp` en kebab minúsculas sin tildes (`fernando-giraldez.webp`, `lucia-diez.webp`).
- `winners-complicaus-$N/`: directorio con `-N` y dentro `first.webp`, `second.webp`, `third.webp` (`secondary.webp` donde exista).

### Imágenes en general

- Formato final `.webp`. Convertir cualquier `png`/`jpg`/`jpeg` con `bun convert` (`scripts/convert.ts` → 1500px, `webp` q80) antes de commitear; borra el original.
- No commitear imágenes sin pasar por `bun convert`.

## Etiquetas

Para mantener las etiquetas (`tags`) del contenido consistentes, usa únicamente las de esta
lista (en minúsculas). La categoría general `eventos` va siempre acompañada de una etiqueta
más específica:

| Etiqueta            | Uso                                                                           |
| ------------------- | ----------------------------------------------------------------------------- |
| `eventos`           | Cualquier actividad del club (categoría y etiqueta base)                      |
| `charlas`           | Charlas y talleres mensuales                                                  |
| `serie-matematicas` | Entradas de la serie de matemáticas (junto a `charlas`)                       |
| `complicaus`        | Competiciones internas de ComplicAUS                                          |
| `adabyron`          | Concurso AdaByron (Andalucía y nacional)                                      |
| `competiciones`     | Etiqueta común para cualquier competición (junto a `complicaus` o `adabyron`) |
| `elecciones`        | Convocatorias y resultados de elecciones                                      |
| `noticias`          | Anuncios generales que no son eventos                                         |

Ejemplo:

```yaml
categories: eventos
tags: ['eventos', 'charlas']
```

## Cambiar los colores del sitio

Todos los colores están centralizados en un único fichero: `assets/css/colors.css`, dentro de la regla `@theme` de Tailwind v4.

- Para cambiar un color, edita la variable `--color-*` correspondiente y reconstruye el sitio. Los estilos de Tailwind (`text-primary-600`, `bg-gray-900`, ...) se resuelven automáticamente a través de esas variables, así que no hay que modificar nada más.
- Los colores se organizan en rampas (`primary-50` … `primary-900`, `secondary`, `neutral`, ...). Para generar rampas personalizadas se puede usar <https://www.tailwindshades.com>.
- Tailwind solo incluye en el CSS final los tonos que realmente se usan en alguna clase; el resto de variables se añaden automáticamente en cuanto se usen, aunque ya estén definidas en `colors.css`.
- El color de la interfaz del navegador (`<meta name="theme-color">`) no puede leer variables CSS: se configura con el parámetro `theme_color` en `config/_default/hugo.yaml` y debe mantenerse sincronizado con `--color-white` de `assets/css/colors.css`.

## CSS compartido

El CSS global (fuera de utilidades), como el modal compartido por las shortcodes `rankings` y `team-rankings`, vive en `assets/css/main.css`. Las reglas deben usar `var(--color-*)` en lugar de colores en duro (`#hex`, `rgb(...)`), para que la paleta siga centralizada en `colors.css`.

## Formato y comprobaciones

- Formatear el código con Prettier: `bun run format`
- Compilar el sitio: `bun run build` (genera el directorio `./public`)
