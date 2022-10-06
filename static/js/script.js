const dropdown = function () {
    const dropdowns = document.querySelectorAll(".dropdown")

    dropdowns.forEach(function (dropdown) {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu")
        const dropdownInput = dropdown.querySelector(".dropdown-input")

        const dropdownHiddenValue = dropdown.querySelector(".dropdown__input-hidden")
        const dropdownVisibleValue = dropdown.querySelector(".dropdown-input__text")

        if (dropdownMenu && dropdownInput) {
            const items = dropdown.querySelectorAll(".dropdown-menu__item")

            for (var i = 0; i < items.length; i++) {
                items[i].addEventListener("click", function (e) {
                    e.stopPropagation();

                    const target = e.currentTarget;
                    const value = target.innerText;
                    const activeClass = "dropdown-menu__item-active"

                    if (target.classList.contains(activeClass)) return false

                    items.forEach(function (i) {
                        i.classList.remove(activeClass)
                    })

                    target.classList.add(activeClass)
                    dropdownVisibleValue.innerText = value
                    dropdownHiddenValue.value = value
                })
            }

            dropdownInput.addEventListener("click", function (e) {
                e.stopPropagation()
                dropdown.classList.toggle("dropdown-active")
            })

            document.addEventListener("click", function (e) {
                const target = e.target;

                if (!target.classList.contains("dropdown-input") && !target.classList.contains("dropdown-menu__item")) {
                    dropdown.classList.remove("dropdown-active")
                }
            })
        }
    })
};

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

(function() {
    const success = getParameterByName('success');

    if(success === "True") {
        //document.querySelector("body").classList.add("success-modal")
        alert("Message was sent");
    }
})();

(function () {
    const accardions = document.querySelectorAll('.acardion_item')

    for (item of accardions) {
        item.addEventListener('click', function (e) {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for (e of accardions) {
                    e.classList.remove('active');
                }
                this.classList.add('active');
            }
        })
    }

    new Swiper('.swiper', {
        navigation: {
            nextEl: '#review-next-button',
            prevEl: '#review-prev-button',
        },
        speed: 700,
    });

    const questionacardion = document.querySelectorAll('.question_item')

    for (item of questionacardion) {
        item.addEventListener('click', function (e) {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for (e of questionacardion) {
                    e.classList.remove('active');
                }
                this.classList.add('active');
            }
        })
    }

    dropdown()
})();

(function () {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
    ;
})();

(function () {
    const hamb = document.querySelector(".hamb_botton");
    const popup = document.querySelector(".popup");
    const body = document.body;


// При клике на иконку hamb вызываем ф-ию hambHandler
    hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
    function hambHandler(e) {
        e.preventDefault();
        // Переключаем стили элементов при клике
        popup.classList.toggle("open");
        hamb.classList.toggle("active");
        body.classList.toggle("noscroll");
    }

    const close = document.querySelectorAll(".text_popup a");

    for (i of close) {
        i.addEventListener("click", function (e){
              if (e.target.closest('.text_popup a')) {
        popup.classList.remove("open");
        hamb.classList.remove("active");
        body.classList.remove("noscroll");
    }
        });


}
  const close_social = document.querySelectorAll(".header_contact a");

    for (p of close_social) {
        p.addEventListener("click", function (e) {
            if (e.target.closest('.header_contact a')) {
                popup.classList.remove("open");
                hamb.classList.remove("active");
                body.classList.remove("noscroll");
            }
        });
    }
})();