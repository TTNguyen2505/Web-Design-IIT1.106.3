$(function () {
    const $switch = $('#myonoffswitch');
    const $onImage = $('#image-effect-2 img[src$="on.png"]');
    const $offImage = $('#image-effect-2 img[src$="off.png"]');

    function updateTheme() {
        const isOn = $switch.is(':checked');
        $onImage.toggleClass('fadeEffect', isOn);
        $offImage.toggleClass('fadeEffect', !isOn);
    }

    $switch.on('change', updateTheme);
    updateTheme();
});