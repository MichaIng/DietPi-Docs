// Identify whether a tab bar can be scrolled left or right and apply indicator classes 
const tabOverflow = () => {
  const checkScroll = e => {
    const target = e.target.closest('.tabbed-labels')
    target.classList.remove('tabbed-scroll-left', 'tabbed-scroll-right')
    if (e.type === "mouseover") {
      const scrollWidth = target.scrollWidth - target.clientWidth
      let hscroll = target.scrollLeft
      if (!hscroll) {
        target.scrollLeft = 1
        hscroll = target.scrollLeft
        target.scrollLeft = 0
        if (hscroll) {
          target.classList.add('tabbed-scroll-right')
        }
      } else if (hscroll !== scrollWidth){
        target.classList.add('tabbed-scroll-left', 'tabbed-scroll-right')
      } else if (hscroll) {
        target.classList.add('tabbed-scroll-left')
      }
    }
  }

  const labels = document.querySelectorAll('.tabbed-alternate > .tabbed-labels')
  labels.forEach(el => {
    el.addEventListener('mouseover', checkScroll)
    el.addEventListener('mouseout', checkScroll)
  })
}

// Smooth scroll tab into view when changed
const tabScroll = () => {
  const tabs = document.querySelectorAll(".tabbed-alternate > input")
  for (const tab of tabs) {
    tab.addEventListener("change", () => {
      const label = document.querySelector(`label[for=${tab.id}]`)
      label.scrollIntoView({block: "nearest", inline: "nearest", behavior: "smooth"})
    })
  }
}

// Should run after document loaded, but for illustration purposes:
tabOverflow()
tabScroll()