const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---docs-examples-mdx": hot(preferDefault(require("/Users/zhengyima/Desktop/dev/rcm-calendar/docs/examples.mdx"))),
  "component---readme-md": hot(preferDefault(require("/Users/zhengyima/Desktop/dev/rcm-calendar/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/zhengyima/Desktop/dev/rcm-calendar/.docz/src/pages/404.js")))
}

