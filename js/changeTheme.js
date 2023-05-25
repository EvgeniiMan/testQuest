let dark = false;
let a = document.body;
let p = document.getElementById("select-theme");

function changeTheme(){
    if(!dark){
        a.className="theme-dark";
        p.innerHTML="☀";
    }else{
        a.className="theme-light";
        p.innerHTML="☽";
    }

    dark=!dark;
}