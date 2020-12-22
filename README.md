# Canvas Examples

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Canvas API

```js
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
canvasInstance.getContext('2d')

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
context.beginPath()

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
context.clearRect(x, y, width, height)

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
context.arc(x, y, radius, startAngle, endAngle [, anticlockwise])

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
context.fillStyle = '#xxx | rgba(x, x, x, x)'

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill
context.fill()
```

# Errors

## 上次绘制未清除

确保在绘制前调用 `context.clearRect(x, y, width, height)` 清除之前的绘制。

## clearRect() 无效

检查在绘制图像前是否执行 `context.beginPath()`。
