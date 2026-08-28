# Página web del CAUS

Esta es la página web oficial del Club de Algoritmia de la Universidad de Sevilla. Es un sitio web estático generado mediante el framework [Hugo](https://gohugo.io). Todo el contenido está escrito en Markdown y se puede editar empleando cualquier editor y Git. Además, se tiene una configuración de `Github Actions` que reconstruye automáticamente el sitio una vez se realicen `push` a la rama `main`.

## Instalación

### Clonar el repositorio en local

`git clone --depth 1 git@github.com:algoritmiaUS/caus-web.git`

### Dependencias principales

- hugo (v0.165.0)
- bun (1.4)

#### Sistemas GNU/Linux

Si utilizas Linux/OSX/WSL2 es recomendable usar homebrew.

```Bash
brew install hugo
brew install bun

bun install
```

#### Sistemas Windows

1. [Descargar e instalar Hugo](https://github.com/gohugoio/hugo/releases/tag/v0.165.0)
2. [Descargar e instalar bun](https://bun.com/get)
3. Instalar dependencias

   ```Bash
   bun install
   ```

## Ejecución

### Para desarrollo local

```Bash
bun start
```

### Para generar el sitio HTML

El código se generará en el directorio ./public.

```bash
bun run build
```

## Contribuir

Lee [CONTRIBUTE.md](CONTRIBUTE.md) para convenciones de nombres, etiquetas, imágenes y flujo de PRs. El CI ejecuta `check:naming`, `format:check` y `build`.

## Agradecimientos

- [nusserstudios - TailBliss theme](https://github.com/nusserstudios/tailbliss)
- [Simple Icons](https://simpleicons.org/)

## Licencia

Apache License 2.0 — ver [LICENSE](LICENSE).
