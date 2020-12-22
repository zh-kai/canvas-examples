<template>
  <canvas ref="ballFollowsMouse" />
</template>

<script>
import Ball from '~/components/ball-follows-mouse/ball'
export default {
  data () {
    return {
      canvasInstance: null,
      ctx: null,
      balls: [],
      mousePosition: {
        x: null,
        y: null
      }
    }
  },
  mounted () {
    this.canvasInstance = this.$refs.ballFollowsMouse
    const stageWidth = window.innerWidth
    const stageHeight = window.innerHeight
    this.canvasInstance.width = stageWidth
    this.canvasInstance.height = stageHeight

    this.ctx = this.canvasInstance.getContext('2d')

    window.addEventListener('mousemove', (e) => {
      this.mousePosition.x = e.clientX
      this.mousePosition.y = e.clientY
    })

    const colors = ['#A55A5E', '#D96D87', '#DFADAC', '#EDE2E0', '#A5A5AF']

    for (let i = 0; i < 400; i++) {
      const color = colors[Math.floor(Math.random() * 5)]
      const ball = new Ball(stageWidth, stageHeight, color)
      this.balls[i] = ball
    }

    this.draw()
  },
  methods: {
    draw () {
      this.ctx.clearRect(0, 0, this.canvasInstance.width, this.canvasInstance.height)

      this.balls.map((ball) => { ball.update(this.ctx) })

      requestAnimationFrame(this.draw.bind(this))
    }
  }
}
</script>

<style>

</style>
