$(function () {
    // ハンバーガーメニュー
    const hamburger = $(".l-header__hamburger");
    const gnav = $(".l-header__gnav");
    hamburger.on("click", function () {
        $(this).toggleClass("js-open");
        gnav.toggleClass("js-open");
    });
});
