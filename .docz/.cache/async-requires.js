// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

