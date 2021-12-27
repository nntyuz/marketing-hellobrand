lax.init()

// Add a driver that we use to control our animations
lax.addDriver('scrollY', function () {
  return window.scrollY
})

let homeHeight = Math.round($('.hero').outerHeight()) + 1

function home_bg(selector, start, end, _homeHeight = homeHeight) {
  lax.addElements(selector, {
    scrollY: {
      translateY: [
        [0, _homeHeight],
        [start, end],
      ],
    },
  })
}

home_bg('.home bg col img-1', 0, 310)
home_bg('.home bg col img-2', 0, -370)
home_bg('.home bg col img-3', 0, 340)
home_bg('.home bg col img-4', 0, -320)
home_bg('.home bg col img-5', 0, 320)

window.addEventListener('rezise', function () {
  homeHeight = Math.round($('.home').outerHeight()) + 1
  home_bg('.home bg col img-1', 0, 310, homeHeight)
  home_bg('.home bg col img-2', 0, -370, homeHeight)
  home_bg('.home bg col img-3', 0, 340, homeHeight)
  home_bg('.home bg col img-4', 0, -320, homeHeight)
  home_bg('.home bg col img-5', 0, 320, homeHeight)
})
