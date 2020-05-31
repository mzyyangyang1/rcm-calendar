const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("/Users/zhengyima/Desktop/rm-calendar/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/zhengyima/Desktop/rm-calendar/.docz/src/pages/404.js")))
}

