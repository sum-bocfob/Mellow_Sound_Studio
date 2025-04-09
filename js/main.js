// scrollBoost
if (window.matchMedia("(width > 768px)").matches) {
    document.querySelectorAll(".c-accordion__scroll").forEach((item) => {
        new ScrollBooster({
            viewport: item,
            scrollMode: "transform",
            direction: "horizontal",
        });
    });
}

// Splitting
const targets = document.querySelectorAll(".split-target");
targets.forEach((target) => {
    Splitting({ target: target });
});

$(function () {
    // *ハンバーガーメニュー
    const hamburger = $(".l-header__hamburger");
    const gnav = $(".l-header__gnav");
    hamburger.on("click", function () {
        $(this).toggleClass("js-open");
        gnav.toggleClass("js-open");
    });

    // *アコーディオン
    const accordion_title = $(".c-accordion__title");
    if (window.matchMedia("(width <= 768px)").matches) {
        accordion_title.not(".js-accordion-open").next(".c-accordion__scroll").hide();
        accordion_title.on("click", function () {
            $(this).toggleClass("js-accordion-open");
            $(this).next(".c-accordion__scroll").slideToggle();
        });
    }
});

// *Swiper
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// swiper キャプション変更
const caption = document.querySelector(".c-swiper__caption");
swiper.on("slideChangeTransitionEnd", function () {
    console.log("tes");
    caption.textContent = document.querySelector(".swiper-slide-active").dataset.caption;
});
