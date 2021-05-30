import db from './db'

window.addEventListener('DOMContentLoaded', function () {

    renderCats(db)
    like()
    scrollTop()
    nav()
    sortCats()
    subscribe()

    function subscribe() {
        const $form = document.querySelector('#subscribeForm')
        const inputsEmail = $form.querySelectorAll('input[type=email]')
        
        $form.addEventListener('submit', (e) => {
            e.preventDefault()

            inputsEmail.forEach((el) => {
                const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
                if (!reg.test(el.value)) {
                    el.parentNode.querySelector('.form__error').classList.add('active')
                } else {
                    el.parentNode.querySelector('.form__error').classList.remove('active')
                }
            })
        })
    }

    function sortCats() {
        const $sort = document.querySelector('.sort')
        let sort = null // 'age', 'price'
        let sortBy = 'DESC' // 'ASC'

        $sort.addEventListener('click', (e) => {
            if (e.target.closest('.sort__btn_age')) {
                const sortRes = db.sort((a, b) => {
                    return Number(a.age) - Number(b.age)
                })
                renderCats(sortRes)
            }
            if (e.target.closest('.sort__btn_price')) {
                const sortRes = db.sort((a, b) => {
                    return Number(a.cost) - Number(b.cost)
                })
                renderCats(sortRes)
            }
        })
    }

    function nav() {
        const $nav = document.querySelector('.nav')
        
        $nav.addEventListener('click', (e) => {
            if ($nav.classList.contains('active')) {
                removeActive()
            } else {
                addActive()
            }
        })

        function resize() {
            if (window.matchMedia('(min-width: 768px)').matches) {
                removeActive()
            }
        }

        function addActive() {
            $nav.classList.add('active')
            document.body.style.overflow = 'hidden'
            window.addEventListener('resize', resize)
        }

        function removeActive() {
            $nav.classList.remove('active')
            document.body.style.overflow = 'auto'
            window.removeEventListener('resize', resize)
        }
    }

    function scrollTop() {
        const $btn = document.querySelector('.scroll-top')

        window.addEventListener('scroll', (e) => {
            if (window.pageYOffset > 250) {
                $btn.classList.add('active')
            } else {
                $btn.classList.remove('active')
            }
        })

        $btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }

    function like() {
        const $cards = document.querySelector('.cards')

        $cards.addEventListener('click', (e) => {
            if (e.target.classList.contains('card__like')) {
                if (e.target.classList.contains('true') || e.target.classList.contains('false')) {
                    e.target.classList.toggle('false')
                }
                e.target.classList.toggle('true')
            }
        })
    }

    function renderCats(data = []) {
        let html = []
        let $cards = document.querySelector('.cards__content')

        function curFilter(sum) {
            return new Intl.NumberFormat('ru-RU').format(sum) //, { style: 'currency', currency: 'RUB', currencyDisplay: 'code' }
        }

        data.forEach((el) => {
            html += `<div class="cards__item card ${el.saled ? 'saled' : ''}">
                        <div class="card__img">
                            <img src="./img/cats/${el.img}" alt="cat 1">
                        </div>
                        ${el.sale ? '<div class="card__sale">' + el.sale + '</div>' : ''}
                        <div class="card__like" data-id="${el.id}"></div>
                        <div class="card__desc">
                            <div class="card__name"><h3 class="h3">${el.name}</h3></div>
                            <div class="card__info">
                                <div class="card__color">
                                    <div class="card__color-val">${el.color}</div>
                                    <div class="card__color-desc">окрас</div>    
                                </div>
                                <div class="card__age">
                                    <div class="card__age-val">${el.age} мес.</div>
                                    <div class="card__age-desc">Возраст</div>
                                </div>
                                <div class="card__paws">
                                    <div class="card__paws-val">${el.paws}</div>
                                    <div class="card__paws-desc">Кол-во лап</div>
                                </div>
                            </div>
                            <div class="card__price">${curFilter(el.cost)} руб.</div>
                        </div>
                        <button class="btn ${el.saled ? 'btn_black' : 'btn_blue'} card__btn">${el.saled ? 'Продан' : 'Купить'}</button>
                    </div>`
        })

        $cards.innerHTML = html
        
    }


    //polyfils

    if ('NodeList' in window && !NodeList.prototype.forEach) {
        console.info('polyfill for IE11');
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    (function(ELEMENT) {
        ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
        ELEMENT.closest = ELEMENT.closest || function closest(selector) {
            if (!this) return null;
            if (this.matches(selector)) return this;
            if (!this.parentElement) {return null}
            else return this.parentElement.closest(selector)
        };
    }(Element.prototype));
});