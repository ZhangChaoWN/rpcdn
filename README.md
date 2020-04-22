# rpcdn
替换 CDN URL 的 chrome 插件

**解决的问题**
有些网站（例如：stackoverflow）本身是可以正常访问的，但是网站加载了 google 的 javascript CDN 资源，导致网站的访问出现问题。这个插件的功能是拦截浏览器的 HTTP 请求，如果发现不容易访问的 CDN 资源，就自动替换为容易访问（内容相同）的 CDN URL。
