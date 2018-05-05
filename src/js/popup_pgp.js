function popup_pgp(url) {
  newwindow = window.open(url, 'name', 'height=600,width=500')
  if (window.focus) {
    newwindow.focus()
  }
  return false
}
