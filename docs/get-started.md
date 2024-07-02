# Infraestructura App Indicadores

Este proyecto utiliza [Node.js](https://nodejs.org/en) [versión 18.18.0](https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi) para ser desplegado tanto en las necesidades del backend y frontend. El backend está construido con [Express](https://expressjs.com/), un framework web minimalista y flexible para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles. 

El frontend está desarrollado con [Vue.js](https://vuejs.org/), un framework progresivo para construir interfaces de usuario. Vue.js se utiliza junto con varias bibliotecas y herramientas de la ecosistema de Vue, proporcionando una experiencia de desarrollo eficiente y agradable.


## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **Vue.js**: Framework progresivo para la construcción de interfaces de usuario.
- **JavaScript**: Lenguaje de programación principal utilizado tanto en el backend como en el frontend.


## Requisitos

Asegúrate de tener instalados los siguientes requisitos antes de comenzar con el desarrollo:

- [Node.js 18.18.0](https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi)
- [NPM](https://www.npmjs.com/) (incluido con la instalación de Node.js)


## Instalación

1. **Clona el repositorio Observabilidad (powerby)**:
   
   ```sh
    git clone https://github.com/waready/observabilidad.git
   ```

2. **Clona el repositorio App Indicadores**:
   
   ```sh
    git clone https://github.com/waready/agrupadores-vue.git
   ```

## Observabilidad

Este proyecto utiliza Node.js para obtener detalles de configuración de embebido desde un endpoint específico.

**Componentes Clave:**
- **Servidor HTTP:** Configurado usando Express.js.
- **Endpoint `/getEmbedToken`:** Proporciona tokens de acceso y URLs de embebido.

**Ejemplo de Implementación del Endpoint:**

```javascript
const express = require('express');
const app = express();

app.get('/getEmbedToken', (req, res) => {
  const data = {
    accessToken: 'exampleAccessToken',
    embedUrl: 'http://example.com/embed',
    id: 'exampleId'
  };
  res.json(data);
});

app.listen(5300, () => {
  console.log('Servidor corriendo en el puerto 5300');
});
```


## Estructura del proyecto

Every markdown file [will be rendered to HTML, then converted to a Vue SFC][content].

VuePress support basic markdown syntax and [some extensions][synatex-extensions], you can also [use Vue features][vue-feature] in it.

```
observabilidad/
├── .gitignore
├── package-lock.json
├── package.json
├── public/
│   ├── css/
│   │   └── index.css
│   └── js/
│   │   └── index.js
├── src/
│   ├── authentication.js
│   ├── embedTokenGenerationService.js
│   ├── server.js
│   ├── main.js
│   └── utils.js
└── views/
    └── index.html
```

## Configuration

VuePress use a `.vuepress/config.js`(or .ts) file as [site configuration][config], you can use it to config your site.

For [client side configuration][client-config], you can create `.vuepress/client.js`(or .ts).

Meanwhile, you can also add configuration per page with [frontmatter][].

## Layouts and customization

Here are common configuration controlling layout of `@vuepress/theme-default`:

- [navbar][]
- [sidebar][]

Check [default theme docs][default-theme] for full reference.

You can [add extra style][style] with `.vuepress/styles/index.scss` file.

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
