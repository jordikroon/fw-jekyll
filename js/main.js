$(function() {
    if (location.search === '?success') {
        $('.contact-form .success').show();
    }

    function validateForm($form) {
        var isValid = true;
        $form.find("[name]").each(function() {
            if ($(this).val().length === 0) {
                isValid = false;
            }
        });

        return isValid;
    }

    $(".contact-form form").submit(function() {
        var $error = $('.contact-form .error');
        if (!validateForm($(this))) {
            $error.show();
            return false;
        }

        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?success';
        window.history.pushState({path:newurl},'',newurl);
        $error.hide();
    });
});
