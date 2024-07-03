export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Desarrollo/infra-Indicadores/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/guide/get-started.html", { loader: () => import(/* webpackChunkName: "guide_get-started.html" */"D:/Desarrollo/infra-Indicadores/docs/.vuepress/.temp/pages/guide/get-started.html.js"), meta: {"title":"Observabilidad"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/Desarrollo/infra-Indicadores/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Infraestructura App Indicadores"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Desarrollo/infra-Indicadores/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
