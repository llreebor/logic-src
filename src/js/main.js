// Burger
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.mobile__menu')

    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

// Submenu
function toggleMegamenu() {
    const triggers = document.querySelectorAll('.menu__item-link')
    const menus = document.querySelectorAll('.submenu')
    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault()

            if (!e.target.classList.contains('active')) {
                triggers.forEach((trg) => trg.classList.remove('active'))
                menus.forEach((menuItem) => menuItem.classList.remove('active'))
                trigger.classList.add('active')
                menus[i].classList.add('active')
                document.querySelector('.submenus').classList.add('active')
                // document.querySelector('body').classList.add('locked')
            } else {
                menus.forEach((menuItem) => menuItem.classList.remove('active'))
                trigger.classList.remove('active')
                menus[i].classList.remove('active')
                document.querySelector('.submenus').classList.remove('active')
                // document.querySelector('body').classList.remove('locked')
            }
        })
    })

    document.querySelector('.submenus').addEventListener('click', (e) => {
        if (e.target.classList.contains('submenus')) {
            document.querySelector('.submenus').classList.remove('active')
            menus.forEach((menuItem) => menuItem.classList.remove('active'))
            triggers.forEach((trg) => trg.classList.remove('active'))
            document.querySelector('body').classList.remove('locked')
        }
    })
}
toggleMegamenu()

/* SLIDE UP */
let slideUp = (target, duration = 300) => {
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.boxSizing = 'border-box'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.style.border = 'none'

    window.setTimeout(() => {
        target.style.display = 'none'
        target.style.removeProperty('height')
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        target.style.removeProperty('border')
    }, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
    target.style.removeProperty('display')
    let display = window.getComputedStyle(target).display
    if (display === 'none') display = 'block'
    target.style.display = display
    let height = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.offsetHeight
    target.style.boxSizing = 'border-box'
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.border = 'none'

    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    target.style.removeProperty('border')

    window.setTimeout(() => {
        target.style.removeProperty('height')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        target.style.removeProperty('border')
    }, duration)
}
/* TOOGLE */
const slideToggle = (target, duration = 300) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration)
    } else {
        return slideUp(target, duration)
    }
}

// Mobile menu
function mobileMenu() {
    const triggers = document.querySelectorAll('.trigger__item')
    const arrows = document.querySelectorAll('.menu__arrow')
    triggers.forEach((trigger, idx) => {
        trigger.addEventListener('click', () => {
            slideToggle(document.getElementById(`submenu-${idx + 1}`), 300)
            arrows[idx].classList.toggle('active')
        })
    })
}
mobileMenu()

if (document.querySelector('#home')) {
    const swiperCases = new Swiper('.swiper__cases', {
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1.4,
                spaceBetween: 75,
            },
            992: {
                slidesPerView: 1.8,
                spaceBetween: 75,
            },

            1200: {
                slidesPerView: 2.1,
                spaceBetween: 100,
            },
        },
    })
}

// Accordion
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach((child) =>
                        child.classList.remove('accordion__item-active'),
                    )
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
if (document.querySelector('#accordion')) {
    accordion()
}

// Trusted Slider
if (document.querySelector('#trusted__slider')) {
    const swiperTrusted = new Swiper('.trusted__slider', {
        // Responsive breakpoints
        speed: 3000,
        loop: true,

        autoplay: {
            delay: 0,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.8,
            },
            768: {
                slidesPerView: 3.2,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    })
}
