$(function () {
    const $form = $('form');
    const $name = $('#name');
    const $email = $('#email');
    const $birthdate = $('#datepicker');
    const $rows = $('table tbody');

    $('.add-row').on('click', function () {
        const name = $name.val().trim();
        const email = $email.val().trim();
        $name.val(name);
        $email.val(email);

        const fields = [$name[0], $email[0], $birthdate[0]];
        const invalidField = fields.find(function (field) {
            return !field.value.trim() || !field.checkValidity();
        });

        if (invalidField) {
            invalidField.reportValidity();
            return;
        }

        const $row = $('<tr>');
        const $select = $('<input>', {
            type: 'checkbox',
            class: 'record-select',
            'aria-label': 'Select row for ' + name
        });

        $row.append(
            $('<td>').append($select),
            $('<td>').text(name),
            $('<td>').text(email),
            $('<td>').text($birthdate.val())
        );
        $rows.append($row);
        $form[0].reset();
    });

    $('.delete-row').on('click', function () {
        $rows.find('.record-select:checked').closest('tr').remove();
    });
});