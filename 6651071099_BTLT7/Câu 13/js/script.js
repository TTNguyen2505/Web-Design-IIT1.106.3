$(function () {
    $('.password-show').on('click', function () {
        const $password = $(this).siblings('.input-control');
        const isHidden = $password.attr('type') === 'password';

        $password.attr('type', isHidden ? 'text' : 'password');
        $(this).toggleClass('fa-eye fa-eye-slash');
    });
});
