function changeCategory(el, type) {

    let navbar = document.querySelector('#header-navbar');
    let listNavs = navbar.querySelectorAll('.menu__el')

    for (let i = 0; i < listNavs.length; i++){
        listNavs[i].classList.remove("menu__el--active")
    }
    el.classList.add("menu__el--active");

    let category = document.querySelector(`[data-category = "${type}" ]`);
    let elements = document.querySelectorAll(`[data-category]`);

    for (let i = 0; i < elements.length; i++){
        elements[i].classList.add("hidden");
    }

    category.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}