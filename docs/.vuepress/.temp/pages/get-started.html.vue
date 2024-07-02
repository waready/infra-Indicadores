<template><div><h1 id="infraestructura-app-indicadores" tabindex="-1"><a class="header-anchor" href="#infraestructura-app-indicadores"><span>Infraestructura App Indicadores</span></a></h1>
<p>Este proyecto utiliza <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js</a> <a href="https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi" target="_blank" rel="noopener noreferrer">versión 18.18.0</a> para ser desplegado tanto en las necesidades del backend y frontend. El backend está construido con <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a>, un framework web minimalista y flexible para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles.</p>
<p>El frontend está desarrollado con <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>, un framework progresivo para construir interfaces de usuario. Vue.js se utiliza junto con varias bibliotecas y herramientas de la ecosistema de Vue, proporcionando una experiencia de desarrollo eficiente y agradable.</p>
<h2 id="tecnologias-utilizadas" tabindex="-1"><a class="header-anchor" href="#tecnologias-utilizadas"><span>Tecnologías Utilizadas</span></a></h2>
<ul>
<li><strong>Node.js</strong>: Entorno de ejecución para JavaScript en el servidor.</li>
<li><strong>Express</strong>: Framework web para Node.js.</li>
<li><strong>Vue.js</strong>: Framework progresivo para la construcción de interfaces de usuario.</li>
<li><strong>JavaScript</strong>: Lenguaje de programación principal utilizado tanto en el backend como en el frontend.</li>
</ul>
<h2 id="requisitos" tabindex="-1"><a class="header-anchor" href="#requisitos"><span>Requisitos</span></a></h2>
<p>Asegúrate de tener instalados los siguientes requisitos antes de comenzar con el desarrollo:</p>
<ul>
<li><a href="https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi" target="_blank" rel="noopener noreferrer">Node.js 18.18.0</a></li>
<li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM</a> (incluido con la instalación de Node.js)</li>
</ul>
<h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion"><span>Instalación</span></a></h2>
<ol>
<li>
<p><strong>Clona el repositorio Observabilidad (powerby)</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"> <span class="token function">git</span> clone https://github.com/waready/observabilidad.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Clona el repositorio App Indicadores</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"> <span class="token function">git</span> clone https://github.com/waready/agrupadores-vue.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="observabilidad" tabindex="-1"><a class="header-anchor" href="#observabilidad"><span>Observabilidad</span></a></h2>
<p>Este proyecto utiliza Node.js para obtener detalles de configuración de embebido desde un endpoint específico.</p>
<p><strong>Componentes Clave:</strong></p>
<ul>
<li><strong>Servidor HTTP:</strong> Configurado usando Express.js.</li>
<li><strong>Endpoint <code v-pre>/getEmbedToken</code>:</strong> Proporciona tokens de acceso y URLs de embebido.</li>
</ul>
<p><strong>Ejemplo de Implementación del Endpoint:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/getEmbedToken'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">accessToken</span><span class="token operator">:</span> <span class="token string">'exampleAccessToken'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">embedUrl</span><span class="token operator">:</span> <span class="token string">'http://example.com/embed'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'exampleId'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5300</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Servidor corriendo en el puerto 5300'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="estructura-del-proyecto" tabindex="-1"><a class="header-anchor" href="#estructura-del-proyecto"><span>Estructura del proyecto</span></a></h2>
<p>Every markdown file <a href="https://vuejs.press/guide/page.html#content" target="_blank" rel="noopener noreferrer">will be rendered to HTML, then converted to a Vue SFC</a>.</p>
<p>VuePress support basic markdown syntax and <a href="https://vuejs.press/guide/markdown.html#syntax-extensions" target="_blank" rel="noopener noreferrer">some extensions</a>, you can also <a href="https://vuejs.press/guide/markdown.html#using-vue-in-markdown" target="_blank" rel="noopener noreferrer">use Vue features</a> in it.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">observabilidad/</span>
<span class="line">├── .gitignore</span>
<span class="line">├── package-lock.json</span>
<span class="line">├── package.json</span>
<span class="line">├── public/</span>
<span class="line">│   ├── css/</span>
<span class="line">│   │   └── index.css</span>
<span class="line">│   └── js/</span>
<span class="line">│   │   └── index.js</span>
<span class="line">├── src/</span>
<span class="line">│   ├── authentication.js</span>
<span class="line">│   ├── embedTokenGenerationService.js</span>
<span class="line">│   ├── server.js</span>
<span class="line">│   ├── main.js</span>
<span class="line">│   └── utils.js</span>
<span class="line">└── views/</span>
<span class="line">    └── index.html</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>VuePress use a <code v-pre>.vuepress/config.js</code>(or .ts) file as <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">site configuration</a>, you can use it to config your site.</p>
<p>For <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">client side configuration</a>, you can create <code v-pre>.vuepress/client.js</code>(or .ts).</p>
<p>Meanwhile, you can also add configuration per page with <a href="https://vuejs.press/guide/page.html#frontmatter" target="_blank" rel="noopener noreferrer">frontmatter</a>.</p>
<h2 id="layouts-and-customization" tabindex="-1"><a class="header-anchor" href="#layouts-and-customization"><span>Layouts and customization</span></a></h2>
<p>Here are common configuration controlling layout of <code v-pre>@vuepress/theme-default</code>:</p>
<ul>
<li><a href="https://vuejs.press/reference/default-theme/config.html#navbar" target="_blank" rel="noopener noreferrer">navbar</a></li>
<li><a href="https://vuejs.press/reference/default-theme/config.html#sidebar" target="_blank" rel="noopener noreferrer">sidebar</a></li>
</ul>
<p>Check <a href="https://vuejs.press/reference/default-theme/" target="_blank" rel="noopener noreferrer">default theme docs</a> for full reference.</p>
<p>You can <a href="https://vuejs.press/reference/default-theme/styles.html#style-file" target="_blank" rel="noopener noreferrer">add extra style</a> with <code v-pre>.vuepress/styles/index.scss</code> file.</p>
</div></template>


