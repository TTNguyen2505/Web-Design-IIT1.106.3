$(function () {
    $(".checkbox-card").each(function () {
        var card = $(this);
        var passportInfo = card.find(".passport-box");

        passportInfo.hide();
        card.find(".checkme").on("change", function () {
            passportInfo.toggle(this.checked);
        });
    });
});