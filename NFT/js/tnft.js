let menus = document.querySelectorAll('.menu');
menus.forEach(menu => {
    menu.addEventListener('click', function () {
        menus.forEach(btn => btn.classList.remove('menu-active'));
        this.classList.add('menu-active');
    });
});