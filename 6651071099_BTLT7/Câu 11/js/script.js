$(function () {
    $("#fileupload").on("change", function () {
        const file = this.files[0];

        if (!file) {
            $("#filename").text("No file selected");
            return;
        }

        const lastDot = file.name.lastIndexOf(".");
        const extension = lastDot > 0 && lastDot < file.name.length - 1
            ? file.name.substring(lastDot + 1)
            : "None";

        $("#filename").text("File name: " + file.name + " | Extension: " + extension);
    });
});