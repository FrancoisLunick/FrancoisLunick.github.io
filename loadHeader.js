document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            console.log('Header loaded');
        })
        .then(() => {
            // Re-initialize the toggle functionality after the header is loaded
            const toggleBtn = document.querySelector('.toggle_btn');
            const toggleBtnIcon = document.querySelector('.toggle_btn i');
            const dropDownMenu = document.querySelector('.dropdown_menu');

            if(toggleBtn) {
                console.log('Toggle button found');
                toggleBtn.addEventListener('click', function () {
                    console.log('Toggle button clicked');
                    dropDownMenu.classList.toggle('open');
                    const isOpen = dropDownMenu.classList.contains('open');
                    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
                });
            } else {
                console.log('Toggle button not found');
            }
        })
        .catch(error => {
            console.log('Error loading header:', error);
        });
});
