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
    if (accordion_title.length) {
        if (window.matchMedia("(width <= 768px)").matches) {
            accordion_title.not(".js-accordion-open").next(".c-accordion__scroll").hide();
            accordion_title.on("click", function () {
                $(this).toggleClass("js-accordion-open");
                $(this).next(".c-accordion__scroll").slideToggle();
            });
        }
    }

    // ページ内リンク　スムーズスクロール
    $('a[href^="#"]').on("click", function () {
        let href = $(this).attr("href");
        let target = $(href === "#" || href === "" ? "html" : href);
        let pos = target.offset().top;
        $("html, body").animate({
            scrollTop: pos,
        });
        gnav.removeClass("js-open");
    });

    // datepicker
    const datepickerElm = $("#datepicker");
    if (datepickerElm.length) {
        datepickerElm
            .datepicker({
                minDate: new Date(),
                dateFormat: "yy/mm/dd (D)",
            })
            .focusin(function (e) {
                $(this).attr("readonly", "true");
            })
            .focusout(function (e) {
                $(this).removeAttr("readonly");
            });
    }
});
console.log("0tes");

// トップページのみ
window.addEventListener("DOMContentLoaded", function () {
    console.log("tes");
    console.log(window.location.pathname);
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
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
            caption.textContent = document.querySelector(".swiper-slide-active").dataset.caption;
        });

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
    }
});
