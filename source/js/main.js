(function() {
    // Add event listener for open form button
    var openFormButton = document.querySelector('.arrow-down');

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            form.open();
        })
    }

}());