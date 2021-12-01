const tabOverflow = () => {
  // Identify whether tab bar can be scrolled left or right and apply button classes
  const checkScroll = e => {
    const target = e.target;
    if (target.scrollLeft) {
      target.classList.add('tabbed-scroll-left');
    } else {
      target.classList.remove('tabbed-scroll-left');
    }
    if (target.scrollLeft < (target.scrollWidth - target.clientWidth - 3)) {
      target.classList.add('tabbed-scroll-right');
    } else {
      target.classList.remove('tabbed-scroll-right');
    }
  }

  // Check again when tab bar is resized
  const onResize = new ResizeObserver(entries => {
    entries.forEach(entry => {
      checkScroll({target: entry.target, type: 'resize'});
    })
  })

  // Change the tab to either the previous or next input - depending on which indicator was clicked.
  // Make sure the current, selected input is scrolled into view.
  const tabChange = e => {
    const target = e.target;
    if (target.classList.contains('tabbed-scroll-right') && e.offsetX >= target.offsetWidth - 15) {
      const selected = target.closest('.tabbed-alternate').querySelector('input:checked');
      const sib = selected.nextSibling;
      if (sib && sib.tagName === 'INPUT') {
        sib.click();
      } else {
	selected.click();
      }
    } else if (target.classList.contains('tabbed-scroll-left') && e.offsetX <= 15) {
      const selected = target.closest('.tabbed-alternate').querySelector('input:checked');
      const sib = selected.previousSibling
      if (sib && sib.tagName === 'INPUT') {
        sib.click();
      } else {
	selected.click();
      }
    }
  }

  const labels = document.querySelectorAll('.tabbed-alternate > .tabbed-labels');
  labels.forEach(el => {
    checkScroll({target: el, type: 'resize'});
    onResize.observe(el);
    el.addEventListener('resize', checkScroll);
    el.addEventListener('scroll', checkScroll);
    el.addEventListener('click', tabChange);
  })
}

// Smooth scroll tab into view when changed
const tabScroll = () => {
  const tabs = document.querySelectorAll('.tabbed-alternate > input');
  for (const tab of tabs) {
    tab.addEventListener('change', () => {
      const label = document.querySelector(`label[for=${tab.id}]`);
      label.scrollIntoView({block: 'nearest', inline: 'nearest', behavior: 'smooth'});
    })
  }
}

// Register events
tabOverflow();
tabScroll();