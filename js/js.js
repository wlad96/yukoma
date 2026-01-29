const header = document.querySelector(".header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});

function scrollToElement(id) {
    var element = document.getElementById(id);
    if (element) {
        var offsetTop = element.offsetTop - 250;
        var duration = 500; // Продолжительность анимации в миллисекундах (1 секунда)

        // Функция анимированного скролла
        var scrollTo = function (element, to, duration) {
            if (duration <= 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;

            setTimeout(function () {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 10);
            }, 10);
        };

        // Анимированный скролл до элемента
        scrollTo(document.documentElement, offsetTop, duration);
    }
}

window.onload = () => {
    document.querySelector(".path").style.animation = "swipe-dot 2s 0.5s infinite";
    document.querySelector(".hand-icon").style.animation = "swipe-hand 2s infinite";
}

AOS.init({
    once: true,
    duration: 1200,
});