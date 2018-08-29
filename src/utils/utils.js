const showToast = (title, {
  icon = 'none',
  duration = 1500
} = {}, mask = false) => {
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration,
    mask: mask
  })
}

const showLoading = (title) => {
  return wx.showLoading({
    title: title
  })
}

const hideLoading = () => {
  // return setTimeout(() => {
  wx.hideLoading()
  // }, 200)
}

export {
  showToast,
  showLoading,
  hideLoading
}
