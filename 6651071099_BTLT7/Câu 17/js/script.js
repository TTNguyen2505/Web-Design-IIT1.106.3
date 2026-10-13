$(function () {
    $('h3').on('click', function () {
        const $content = $(this).next('.box');

        $('.box').not($content).stop(true, true).slideUp();
        $content.stop(true, true).slideDown();
    });
});