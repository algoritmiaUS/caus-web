
# Página web del CAUS

Esta es la página web oficial del Club de Algoritmia de la Universidad de Sevilla. Es un sitio web estático generado mediante el framework [Hugo](https://gohugo.io). Todo el contenido está escrito en Markdown y se puede editar empleando cualquier editor y Git. Además, se tiene una configuración de `Github Actions` que reconstruye automáticamente el sitio una vez se realicen `push` a la rama `main`.


# Instalación 

**Clonar el repositorio en local**

`git clone git@github.com:algoritmiaUS/caus-web.git`

**Dependencias principales**

  - hugo (v0.128.2)
  - npm (10.9.0)
  - golang-go (1.23.2)


## Sistemas GNU/Linux

Si utilizas Linux/OSX/WSL2 es recomendable usar homebrew.

```Bash
brew install hugo
brew install npm

sudo apt install golang-go

npm install
```


## Sistemas Windows

 1. [Descargar e instalar Hugo](https://github.com/gohugoio/hugo/releases/tag/v0.128.2)
 2. [Descargar e instalar Node.js](https://nodejs.org/en/download)
 3. [Descargar e instalar golang-go](https://go.dev/doc/install)
 4. Instalar dependencias de npm

    ```Bash
    npm install
    ```


# Ejecución

**Para desarrollo local**

```Bash
hugo server --config hugo.yaml
```

**Para generar el sitio HTML**

El código se generará en el directorio ./public.

```Bash
sudo hugo --gc --minify
```


## Agradecimientos

  - [nusserstudios - TailBliss theme](https://github.com/nusserstudios/tailbliss)
  - [Simple Icons](https://simpleicons.org/)