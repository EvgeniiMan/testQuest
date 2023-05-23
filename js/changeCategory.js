function changeCategory(type) {
    let navbar = document.querySelector('#navbar');
    let listNavs = navbar.querySelectorAll('li')
    for (let i = 0; i < listNavs.length; i++){
        //alert(listNavs[i].className)
        listNavs[i].classList.remove("active")
    }
    listNavs[type - 1].classList.add("active")
    //for(let ex in listNavs){
    //    alert(ex.que)
    //}
    let content = document.querySelectorAll('.products ')
    for (let i = 0; i < content.length; i++){
        if(!content[i].classList.contains("hidden"))
            content[i].classList.add("hidden")
    }
    content[type-1].classList.remove("hidden");
}