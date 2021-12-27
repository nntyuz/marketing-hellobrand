//Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
})

//Animation Else
const animItems = document.querySelectorAll('.anim-items')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('animation')
      } else {
        if (animItem.classList.contains('.anim-no-hide')) {
          animItem.classList.remove('animation')
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + screenLeft }
  }
  setTimeout(() => {
    animOnScroll()
  }, 300)
}

//Anchors
document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    let href = this.getAttribute('href').substring(1)

    const scrollTarget = document.getElementById(href)

    const topOffset = document.querySelector('.scrollto').offsetHeight
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})

//Menu
$('.burger').on('click', function () {
  $('.menu').fadeIn(250) // или закрываем, открываем
  $('.menu-box').addClass('active')
})
//* Клик по ссылке закрывает меню
$('.menu-close').click(function () {
  $('.menu').fadeOut() // или закрываем, открываем
  $('.menu-box').removeClass('active')
})

//* Клик по ссылке закрывает меню
$('.menu-list-link').click(function () {
  $('.menu').fadeOut() // или закрываем, открываем
  $('.menu-box').removeClass('active')
})
//*

$('.menu').mouseup(function (e) {
  const modal = $('.menu-box')
  if (!modal.is(e.target) && modal.has(e.target).length === 0) {
    modal.parents('.menu').fadeOut(250)
    modal.removeClass('active')
  }
})
