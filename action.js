function initialize () {
  const presentButtonEl = document.createElement('span')
  presentButtonEl.className = 'board-header-btn'
  presentButtonEl.innerHTML = '<span class="board-header-btn-text">Present</span>'
  presentButtonEl.style.paddingLeft = '12px'
  presentButtonEl.onclick = () => {
    // Remove header element
    hideEl('[data-desktop-id="header"]')

    // Remove all sub-header elements except the title
    hideEl('.board-header > *:not(.mod-board-name)')

    // Remove new Column action
    hideEl('.mod-add')

    // Trim down new card composer
    Array.from(document.querySelectorAll('.js-card-composer-container')).forEach((el) => el.style.minHeight = '10px')
    hideEl('.js-open-card-composer > *')
    hideEl('.js-card-templates-button')
  }

  const buttonsEl = document.querySelector('.board-header-plugin-btns')
  buttonsEl.insertBefore(presentButtonEl, buttonsEl.firstChild)

}

function hideEl (name) {
  [...document.querySelectorAll(name)].forEach((el) => el.style.display = 'none')
}

(function () {
  const interval = setInterval(() => {
    if (document.querySelector('.board-header-plugin-btns')) {
      initialize()
      clearInterval(interval)
    }
  }, 100)
})()
