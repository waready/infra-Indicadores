import comp from "D:/Desarrollo/infra-Indicadores/docs/.vuepress/.temp/pages/guide/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/guide/get-started.html\",\"title\":\"Observabilidad\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"Estructura del proyecto\",\"slug\":\"estructura-del-proyecto\",\"link\":\"#estructura-del-proyecto\",\"children\":[]},{\"level\":3,\"title\":\"Configuration\",\"slug\":\"configuration\",\"link\":\"#configuration\",\"children\":[]},{\"level\":3,\"title\":\"Code generateEmbedToken\",\"slug\":\"code-generateembedtoken\",\"link\":\"#code-generateembedtoken\",\"children\":[]},{\"level\":3,\"title\":\"Ejecutar Proyecto\",\"slug\":\"ejecutar-proyecto\",\"link\":\"#ejecutar-proyecto\",\"children\":[]},{\"level\":2,\"title\":\"App Indicadores\",\"slug\":\"app-indicadores\",\"link\":\"#app-indicadores\",\"children\":[{\"level\":3,\"title\":\"Estructura del proyecto\",\"slug\":\"estructura-del-proyecto-1\",\"link\":\"#estructura-del-proyecto-1\",\"children\":[]},{\"level\":3,\"title\":\"Interacción con BT\",\"slug\":\"interaccion-con-bt\",\"link\":\"#interaccion-con-bt\",\"children\":[]},{\"level\":3,\"title\":\"Configuracion\",\"slug\":\"configuracion\",\"link\":\"#configuracion\",\"children\":[]},{\"level\":3,\"title\":\"Ejecutar Proyecto\",\"slug\":\"ejecutar-proyecto-1\",\"link\":\"#ejecutar-proyecto-1\",\"children\":[]},{\"level\":3,\"title\":\"Compilar\",\"slug\":\"compilar\",\"link\":\"#compilar\",\"children\":[]},{\"level\":3,\"title\":\"Desplegar App\",\"slug\":\"desplegar-app\",\"link\":\"#desplegar-app\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guide/get-started.md\",\"excerpt\":\"\\n<p>Este proyecto utiliza Node.js para obtener detalles de configuración de embebido desde un endpoint específico.</p>\\n<p><strong>Componentes Clave:</strong></p>\\n<ul>\\n<li><strong>Servidor HTTP:</strong> Configurado usando Express.js.</li>\\n<li><strong>Endpoint <code>/getEmbedToken</code>:</strong> Proporciona tokens de acceso y URLs de embebido.</li>\\n</ul>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
