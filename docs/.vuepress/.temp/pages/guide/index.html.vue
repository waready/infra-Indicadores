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
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> embedToken <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">'/embedTokenGenerationService.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cors'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"body-parser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">// Prepare server for Bootstrap, jQuery and PowerBI files</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/js'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./node_modules/bootstrap/dist/js/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Redirect bootstrap JS</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/js'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./node_modules/jquery/dist/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Redirect JS jQuery</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/js'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./node_modules/powerbi-client/dist/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Redirect JS PowerBI</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/css'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./node_modules/bootstrap/dist/css/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Redirect CSS bootstrap</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/public'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./public/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Use custom JS and CSS files</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> port <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">5300</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">'/../views/index.html'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/getEmbedToken'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Get the details like Embed URL, Access token and Expiry</span></span>
<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> embedToken<span class="token punctuation">.</span><span class="token function">generateEmbedToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// result.status specified the statusCode that will be sent along with the result object</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Listening on port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="estructura-del-proyecto" tabindex="-1"><a class="header-anchor" href="#estructura-del-proyecto"><span>Estructura del proyecto</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">observabilidad/</span>
<span class="line">├── .gitignore</span>
<span class="line">├── package-lock.json</span>
<span class="line">├── package.json</span>
<span class="line">├── config</span>
<span class="line highlighted">│   └── config.json</span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3>
<p>configurar con nuestras credenciales para generar <code v-pre>/getEmbedToken</code> el archivo  <code v-pre>config.json</code></p>
<div class="custom-container tip"><p class="custom-container-title">ejemplo</p>
<p>code</p>
</div>
<h3 id="code-generateembedtoken" tabindex="-1"><a class="header-anchor" href="#code-generateembedtoken"><span>Code generateEmbedToken</span></a></h3>
<p>Para anilizar la función generateEmbedToken ingresamos a la carpeta <code v-pre>scr/embedTokenGenerationService.js</code> nos devolvera los siguientes datos que son necesario para relizar el embed de los reporte de <code v-pre>powerby</code></p>
<ul>
<li><strong>accessToken</strong></li>
<li><strong>embedUrl</strong></li>
<li><strong>id</strong></li>
<li><strong>expiry</strong></li>
<li><strong>status</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateEmbedToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Check for any non-existing credential or invalid credential from config.json file</span></span>
<span class="line">    configCheckResult <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">validateConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>configCheckResult<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"error"</span><span class="token operator">:</span> configCheckResult</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> tokenResponse <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> errorResponse <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Call the function to get the response from the authentication request</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        tokenResponse <span class="token operator">=</span> <span class="token keyword">await</span> auth<span class="token punctuation">.</span><span class="token function">getAuthenticationToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'error_description'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            errorResponse <span class="token operator">=</span> err<span class="token punctuation">.</span>error_description<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// Invalid PowerBI Username provided</span></span>
<span class="line">            errorResponse <span class="token operator">=</span> err<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"error"</span><span class="token operator">:</span> errorResponse</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Extract AccessToken from the response</span></span>
<span class="line">    <span class="token keyword">let</span> token <span class="token operator">=</span> tokenResponse<span class="token punctuation">.</span>accessToken<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line"></span>
<span class="line">    <span class="token comment">// embedData will be used for resolution of the Promise</span></span>
<span class="line">    <span class="token keyword">let</span> embedData <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//Call the function to get the Report Embed details</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        embedData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getReportEmbedDetails</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> config<span class="token punctuation">.</span>workspaceId<span class="token punctuation">,</span> config<span class="token punctuation">.</span>reportId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Call the function to get the Embed Token</span></span>
<span class="line">        <span class="token keyword">let</span> embedToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getReportEmbedToken</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> embedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token string-property property">"accessToken"</span><span class="token operator">:</span> embedToken<span class="token punctuation">.</span>token<span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token string-property property">"embedUrl"</span><span class="token operator">:</span> embedData<span class="token punctuation">.</span>embedUrl<span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token string-property property">"id"</span><span class="token operator">:</span> embedData<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token string-property property">"expiry"</span><span class="token operator">:</span> embedToken<span class="token punctuation">.</span>expiration<span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token string-property property">"status"</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"status"</span><span class="token operator">:</span> err<span class="token punctuation">.</span>status<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token string">'Error while retrieving report embed details\r\n'</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>statusText <span class="token operator">+</span> <span class="token string">'\r\nRequestId: \n'</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'requestid'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ejecutar-proyecto" tabindex="-1"><a class="header-anchor" href="#ejecutar-proyecto"><span>Ejecutar Proyecto</span></a></h3>
<p>Para ejecutarlo necesitamos previamente configurar del proyecto en los archivos  <code v-pre>config.json</code>  con nuestras credenciales y ejecutar los siguiente comandos desde consola.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"> <span class="token function">npm</span> <span class="token function">install</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"> <span class="token function">npm</span> start </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Este levantara el Proyecto Observabilidad para verificar si esta corriendo entramos a la siguiente dirección <code v-pre>IP</code> servidor , <code v-pre>:5300</code> puerto.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">  http://<span class="token operator">&lt;</span>IP<span class="token operator">></span>:5300/getEmbedToken</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>img</p>
<h2 id="app-indicadores" tabindex="-1"><a class="header-anchor" href="#app-indicadores"><span>App Indicadores</span></a></h2>
<p>El App de Indicadores es una aplicación frontend desarrollada con <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>, diseñada para mostrar y gestionar indicadores clave de rendimiento (KPIs). Esta aplicación proporciona una interfaz intuitiva y dinámica para visualizar datos importantes de forma clara y accesible.</p>
<p>Componentes Clave:</p>
<ul>
<li><strong>Componentes Vue</strong>: Componentes modulares para diferentes partes de la interfaz de usuario.</li>
<li><strong>Obtención de Datos</strong>: Usando Axios para comunicarse con el backend.</li>
</ul>
<p>Ejemplo de un Componente Vue:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'item-list'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div>&lt;item v-for="item in items" :key="item.id" :item="item">&lt;/item>&lt;/div>'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://&lt;IP>:&lt;PUERTO>/api/items'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>items<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="estructura-del-proyecto-1" tabindex="-1"><a class="header-anchor" href="#estructura-del-proyecto-1"><span>Estructura del proyecto</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">agrupadores-vue/</span>
<span class="line">├── .browserslistrc</span>
<span class="line highlighted">├── .env</span>
<span class="line">├── .envcopy</span>
<span class="line">├── .eslintrc.js</span>
<span class="line">├── .gitignore</span>
<span class="line">├── .prettierrc.json</span>
<span class="line">├── README.md</span>
<span class="line">├── babel.config.js</span>
<span class="line">├── jsconfig.json</span>
<span class="line">├── json.json</span>
<span class="line">├── node_modules.7z</span>
<span class="line">├── npm</span>
<span class="line">├── package-lock.json</span>
<span class="line">├── package.json</span>
<span class="line">├── public/</span>
<span class="line">│   ├── css/</span>
<span class="line">│   ├── js/</span>
<span class="line highlighted">|   ├── config.js</span>
<span class="line">│   ├── favicon.ico</span>
<span class="line">│   └── index.html</span>
<span class="line">├── src/</span>
<span class="line">│   ├── App.vue</span>
<span class="line">│   ├── assets/</span>
<span class="line">│   │   └── logo.png</span>
<span class="line">│   ├── auth-module/</span>
<span class="line">│   ├── components/</span>
<span class="line">│   ├── main.js</span>
<span class="line">│   ├── pages/</span>
<span class="line">│   ├── router/</span>
<span class="line">│   ├── store/</span>
<span class="line">│   ├── utils/</span>
<span class="line">│   └── views/</span>
<span class="line">└── vue.config.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interaccion-con-bt" tabindex="-1"><a class="header-anchor" href="#interaccion-con-bt"><span>Interacción con BT</span></a></h3>
<p>En la capeta <code v-pre>src/utils</code> se encuentra el archivo <code v-pre>AuthService.js</code> en donde se encuentra la integracion de optener los servicios que se encuentran en Pioneros</p>
<p>AuthService.js:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/utils/http.js"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> secureStorage <span class="token keyword">from</span> <span class="token string">"./secureStorage.js"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">"../router"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"@/store"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> prefijo <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_API_PREFIJO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> version <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_API_VERSION</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> btServicesEnv <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BTEXPOSER</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> btObservabilidad <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_URL_OBSERVABILIDAD</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> btServicesEnabled <span class="token operator">=</span> btServicesEnv <span class="token operator">===</span> <span class="token string">"true"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//.... login </span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">GetIndicadores</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ObtenerIndicadores</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">agrupadorId</span><span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">GetAgrupadores</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerAgrupadores"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getSucursalesCajas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerSucursalesCajas"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getCotizaciones</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerMonedasIndices"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getCuadreMonedaSaldos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerCierreSaldosPorMoneda"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getCondicionesGenerales</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerCondicionesGenerales"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getRubroBolsas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerRubrosBolsas"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getTansaccionEstado</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerTransaccionesEstados"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getEjecucionPorServicio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerServiciosMasEjecutados"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getMetodosMasEjecutados</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerMetodosMasEjecutados"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">servicio</span><span class="token operator">:</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getSesionesPorUsuario</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token string">"ObtenerSesionesPorUsuario"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pioneros:
img</p>
<p>como se usa en componente Power by</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">GetObservabilidad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token comment">//{btObservabilidad} = {process.env.VUE_APP_URL_OBSERVABILIDAD}`);</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>btObservabilidad<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuracion" tabindex="-1"><a class="header-anchor" href="#configuracion"><span>Configuracion</span></a></h3>
<p>tenemos que configurar el archivo .env en caso de desarrollo</p>
<div class="language-.env line-numbers-mode" data-highlighter="prismjs" data-ext=".env" data-title=".env"><pre v-pre class="language-.env"><code><span class="line">VUE_APP_BTEXPOSER=false</span>
<span class="line">VUE_APP_API_URL=http://10.25.4.10:6021/bthibrido/servlet/</span>
<span class="line">VUE_APP_API_PREFIJO=ardwsbt</span>
<span class="line">VUE_APP_API_VERSION=v1</span>
<span class="line">VUE_APP_URL_OBSERVABILIDAD=http://10.25.4.10:5300/getEmbedToken</span>
<span class="line">VUE_APP_GMAPS_APIKEY=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg</span>
<span class="line">VUE_APP_CLIENT_SECRET=BGALs5B6K2cfLciroALX3okJO11783pNkU6v11me</span>
<span class="line">VUE_APP_LOGO_PATH=assets/logoB.png</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tenemos que configurar los archivos .env y  public/config.js en caso de producción:</p>
<div class="language-.env line-numbers-mode" data-highlighter="prismjs" data-ext=".env" data-title=".env"><pre v-pre class="language-.env"><code><span class="line">VUE_APP_BTEXPOSER=GetBTexposer</span>
<span class="line">VUE_APP_API_URL=GetUrlPro</span>
<span class="line">VUE_APP_API_PREFIJO=GetSufijo</span>
<span class="line">VUE_APP_API_VERSION=GetVrSer</span>
<span class="line">VUE_APP_URL_OBSERVABILIDAD=GetPowerUrlEmbed</span>
<span class="line">VUE_APP_GMAPS_APIKEY=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg</span>
<span class="line">VUE_APP_CLIENT_SECRET=BGALs5B6K2cfLciroALX3okJO11783pNkU6v11me</span>
<span class="line">VUE_APP_LOGO_PATH=assets/logoB.png</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">window<span class="token punctuation">.</span>GetBTexposer<span class="token operator">=</span> <span class="token string">"false"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// url ambiente - ejemplo:</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>GetUrlPro<span class="token operator">=</span> <span class="token string">"http://10.25.4.10:6021/bthibrido/servlet/"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//sufijo del ambiente - ejemplo</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>GetSufijo<span class="token operator">=</span> <span class="token string">"ardwsbt"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//Version auth </span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>GetVrSer<span class="token operator">=</span> <span class="token string">"v1"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//Power bi url embed</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>GetPowerUrlEmbed <span class="token operator">=</span> <span class="token string">"http://10.25.4.10:5300/getEmbedToken"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ejecutar-proyecto-1" tabindex="-1"><a class="header-anchor" href="#ejecutar-proyecto-1"><span>Ejecutar Proyecto</span></a></h3>
<p>Para ejecutarlo necesitamos previamente configurar del proyecto en los archivos  <code v-pre>config.json</code>  con nuestras credenciales y ejecutar los siguiente comandos desde consola.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"> <span class="token function">npm</span> <span class="token function">install</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"> <span class="token function">npm</span> run serve</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="compilar" tabindex="-1"><a class="header-anchor" href="#compilar"><span>Compilar</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"> <span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>config</p>
<h3 id="desplegar-app" tabindex="-1"><a class="header-anchor" href="#desplegar-app"><span>Desplegar App</span></a></h3>
<p>cambiar js</p>
<p>copiar archivos con nombre I caperta</p>
<p>probar</p>
</div></template>


