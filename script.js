document.addEventListener('DOMContentLoaded', function () {
  const switchElement = document.querySelector('.theme-switch')

  switchElement.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  })

  switchElement.checked = false
})
