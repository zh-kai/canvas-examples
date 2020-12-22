
export default class Ball {
  constructor (stageWidth, stageHeight, color) {
    this.minRadius = Math.ceil(Math.random() * 4) + 1
    this.radius = this.minRadius
    this.stepRadius = 2
    this.maxRadius = 40

    this.x = Math.random() * (stageWidth - (this.radius * 2)) + this.radius
    this.y = Math.random() * (stageHeight - (this.radius * 2)) + this.radius

    this.stageWidth = stageWidth
    this.stageHeight = stageHeight
    this.color = color

    this.stepX = Math.random() - 0.5
    this.stepY = Math.random() - 0.5

    this.mouseX = undefined
    this.mouseY = undefined

    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.x
      this.mouseY = e.y
    })
  }

  draw (ctx) {
    ctx.beginPath()

    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }

  update (ctx) {
    if (this.x + this.radius > this.stageWidth || this.x - this.radius < 0) {
      this.stepX *= -1
    }

    if (this.y + this.radius > this.stageHeight || this.y - this.radius < 0) {
      this.stepY *= -1
    }

    this.x += this.stepX
    this.y += this.stepY

    if (Math.abs(this.x - this.mouseX) < 50 && Math.abs(this.y - this.mouseY) < 50) {
      this.radius += this.stepRadius
      if (this.radius > this.maxRadius) {
        this.radius = this.maxRadius
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= this.stepRadius
    }

    this.draw(ctx)
  }
}
