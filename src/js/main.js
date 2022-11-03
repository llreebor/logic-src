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

if (document.querySelector('#home-page')) {
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

// Demo page
if (document.querySelector('#demo-page')) {
    const getTemplate = (data = [], placeholder, selectedId) => {
        let text = placeholder ?? 'placeholder не указан'

        const items = data.map((item) => {
            let cls = ''
            if (item.id === selectedId) {
                text = item.value
                cls = 'selected'
            }
            return `
                <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
            `
        })
        return `
            <input type="hidden" class="hidden__input">
            <div class="select__backdrop" data-type="backdrop"></div>
            <div class="select__input" data-type="input">
                <div data-type="value">${text}</div>
                <img src="./img/down-arrow-select.svg" alt="arrow" data-type="arrow" class="select__arrow">
            </div>
            <div class="select__dropdown">
                <ul class="select__list">
                    ${items.join('')}
                </ul>
            </div>
        `
    }
    class Select {
        constructor(selector, options) {
            this.$el = document.querySelector(selector)
            this.options = options
            this.selectedId = options.selectedId

            this.render()
            this.setup()
        }

        render() {
            const { placeholder, data } = this.options
            this.$el.classList.add('select')
            this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
        }
        setup() {
            this.clickHandler = this.clickHandler.bind(this)
            this.$el.addEventListener('click', this.clickHandler)
            this.$arrow = this.$el.querySelector('[data-type="arrow"]')
            this.$value = this.$el.querySelector('[data-type="value"]')
        }

        clickHandler(event) {
            const { type } = event.target.dataset
            if (type === 'input') {
                this.toggle()
            } else if (type === 'item') {
                const id = event.target.dataset.id
                this.select(id)
            } else if (type === 'backdrop') {
                this.close()
            }
        }

        get isOpen() {
            return this.$el.classList.contains('open')
        }

        get current() {
            return this.options.data.find((item) => item.id === this.selectedId)
        }

        select(id) {
            this.selectedId = id
            this.$value.textContent = this.current.value

            this.$el
                .querySelectorAll(`[data-type="item"]`)
                .forEach((el) => el.classList.remove('selected'))
            this.$el
                .querySelector(`[data-id="${id}"]`)
                .classList.add('selected')

            this.options.onSelect ? this.options.onSelect(this.current) : null
            this.close()
        }

        toggle() {
            this.isOpen ? this.close() : this.open()
        }

        open() {
            this.$el.classList.add('open')
            this.$arrow.classList.add('open')
        }

        close() {
            this.$el.classList.remove('open')
            this.$arrow.classList.remove('open')
        }

        destroy() {
            this.$el.removeEventListener('click', this.clickHandler)
            this.$el.innerHTML = ''
        }
    }

    // Init select (Form Item Select)
    const select = new Select('#select', {
        placeholder: 'Select',
        data: [
            { id: '1', value: 'Item 1' },
            { id: '2', value: 'Item 2' },
            { id: '3', value: 'Item 3' },
            { id: '4', value: 'Item 4' },
            { id: '5', value: 'Item 5' },
        ],
        onSelect(item) {
            const input = document.querySelector('.hidden__input')
            input.value = item.value
        },
    })
    // Init select (Form Item Phone Select)
    const selectPhone = new Select('#select-phone', {
        selectedId: '1',
        data: [
            { id: '1', value: 'US' },
            { id: '2', value: 'FR' },
            { id: '3', value: 'HI' },
        ],
        onSelect(item) {
            const input = document.querySelector('.hidden__input')
            input.value = item.value
        },
    })
}
