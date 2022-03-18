export default () => {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame

  const isNative =
    window.getComputedStyle(document.documentElement)['scroll-behavior'] ===
    'smooth'

  return ({ target, duration = 1000, offset = 0, cb = false }) => {
    const elementPosition = target.offsetTop
    const total = document.body.scrollHeight
    const targetPosition =
      elementPosition > total ? total : elementPosition - offset

    if (isNative) {
      window.scrollTo(0, targetPosition)
      if (cb) cb()
      return
    }

    const startPosition = window.pageYOffset
    const clock = Date.now()
    let elapsed

    const easeInOutCubic = time =>
      time < 0.5
        ? 4 * time * time * time
        : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1
    const calculatePosition = () =>
      elapsed > duration
        ? targetPosition
        : startPosition +
          (targetPosition - startPosition) * easeInOutCubic(elapsed / duration)
    const step = () => {
      elapsed = Date.now() - clock
      const stepPosition = calculatePosition()
      window.scroll(0, stepPosition)
      if (elapsed > duration) {
        if (cb) cb()
      } else {
        requestAnimationFrame(step)
      }
    }
    step()
  }
}
