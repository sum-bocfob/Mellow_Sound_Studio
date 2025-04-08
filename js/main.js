$(function () {
    // *ハンバーガーメニュー
    const hamburger = $(".l-header__hamburger");
    const gnav = $(".l-header__gnav");
    hamburger.on("click", function () {
        $(this).toggleClass("js-open");
        gnav.toggleClass("js-open");
    });
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
