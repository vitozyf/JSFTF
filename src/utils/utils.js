const showToast = (title, {icon = 'none', duration = 1500} = {}, mask = false) => {
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration,
    mask: mask
  })
}

export {
  showToast
}
