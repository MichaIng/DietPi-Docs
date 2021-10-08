// Identify whether a tab bar can be scrolled left or right and apply indicator classes
const tabOverflow = () => {
  const checkScroll = e => {
    const target = e.target.closest('.tabbed-labels')
    if (target.scrollLeft) {
      target.classList.add('tabbed-scroll-left')
    } else {
      target.classList.remove('tabbed-scroll-left')
    }
    if (target.scrollLeft < (target.scrollWidth - target.clientWidth)) {
      target.classList.add('tabbed-scroll-right')
    } else {
      target.classList.remove('tabbed-scroll-right')
    }
  }

  const labels = document.querySelectorAll('.tabbed-alternate > .tabbed-labels')
  labels.forEach(el => {
    el.addEventListener('scroll', checkScroll)
    el.dispatchEvent(new Event('scroll'))
  })
}

// Smooth scroll tab into view when changed
const tabScroll = () => {
  const tabs = document.querySelectorAll('.tabbed-alternate > input')
  for (const tab of tabs) {
    tab.addEventListener('change', () => {
      const label = document.querySelector(`label[for=${tab.id}]`)
      label.scrollIntoView({block: 'nearest', inline: 'nearest', behavior: 'smooth'})
    })
  }
}

// Register events
tabOverflow()
tabScroll()