# Página web del CAUS

Esta es la página web oficial del Club de Algoritmia de la Universidad de Sevilla. Es un sitio web estático generado mediante el framework [Hugo](https://gohugo.io). Todo el contenido está escrito en Markdown y se puede editar empleando cualquier editor y Git. Además, se tiene una configuración de `Github Actions` que reconstruye automáticamente el sitio una vez se realicen `push` a la rama `main`.

## Instalación

### Clonar el repositorio en local

`git clone --depth 1 git@github.com:algoritmiaUS/caus-web.git`

### Dependencias principales

- hugo (v0.165.0)
- bun (1.3.14)

#### Sistemas GNU/Linux

Si utilizas Linux/OSX/WSL2 es recomendable usar homebrew.

```Bash
brew install hugo
brew install bun

bun install
```

#### Sistemas Windows

1. [Descargar e instalar Hugo](https://github.com/gohugoio/hugo/releases/tag/v0.165.0)
2. [Descargar e instalar Node.js](https://nodejs.org/en/download)
3. Instalar dependencias de bun

   ```Bash
   bun install
   ```

## Ejecución

### Para desarrollo local

```Bash
hugo server --config hugo.yaml
```

### Para generar el sitio HTML

El código se generará en el directorio ./public.

```bash
bun run build
```

## Agradecimientos

- [nusserstudios - TailBliss theme](https://github.com/nusserstudios/tailbliss)
- [Simple Icons](https://simpleicons.org/)
