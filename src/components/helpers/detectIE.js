export default () => {
  if (!process.browser) return true

  const ua = window.navigator.userAgent
  return /MSIE|Trident/.test(ua)
}
