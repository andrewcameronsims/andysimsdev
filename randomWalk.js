const can = document.querySelector('#can');
const ctx = can.getContext('2d');

const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

class Vector2D {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vector) {
    this.x += vector.x
    this.y += vector.y
  }
}

const randomVector2D = (maxHeight, maxWidth) => {
  return new Vector2D(
    randomInRange(0, maxWidth),
    randomInRange(0, maxHeight)
  )
}

class Walker {
  constructor(location, renderContext) {
    this.location = location
    this.ctx = renderContext
    this.color = this.randomColour()
  }

  chooseDirection() {
    const number = Math.random()
    switch (true) {
      case (number < 0.25):
        return new Vector2D(1, 1)
      case (number < 0.5):
        return new Vector2D(1, -1)
      case (number < 0.75):
        return new Vector2D(-1, 1)
      case (number < 1):
        return new Vector2D(-1, -1)
    }
  }

  step() {
    const direction = this.chooseDirection()
    this.location.plus(direction)
  }

  randomColour() {
    const colourCode = randomInRange(0, 16777215)
    const hexCode = colourCode.toString(16).padStart(6, '0')
    return '#' + hexCode
  }

  render() {
    const { x, y } = this.location
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(x, y, 1, 1)
  }
}

const initializeRandomWalkers = (numWalkers) => {
  const walkers = []
  for (let i = 0; i < numWalkers; i++) {
    const startLocation = randomVector2D(window.innerHeight, window.innerWidth)
    walkers.push(
      new Walker(startLocation, ctx)
    )
  }
  return walkers
}

const renderLoop = (walkerArray) => {
  walkerArray.forEach((walker) => {
    walker.render()
    walker.step()
  })
}

const walkers = initializeRandomWalkers(1000)

can.height = window.innerHeight
can.width = window.innerWidth
setInterval(() => renderLoop(walkers), 20)
