export const validateName = target => target.length > 0

export const validateEmail = target =>
  target
    ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        target,
      )
    : false
export const validateMsg = target => target.length > 0 && target.length <= 400
