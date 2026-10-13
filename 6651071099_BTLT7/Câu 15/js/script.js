$(function () {
    $('.tab-wrapper').each(function () {
        const $wrapper = $(this);
        const $links = $wrapper.find('.tab a');
        const $items = $wrapper.find('.tab-item');

        $links.on('click', function (event) {
            event.preventDefault();

            const $target = $wrapper.find($(this).attr('href'));
            if (!$target.length) {
                return;
            }

            $links.closest('li').removeClass('active');
            $(this).closest('li').addClass('active');
            $items.hide();
            $target.show();
        });

        $links.first().trigger('click');
    });
});