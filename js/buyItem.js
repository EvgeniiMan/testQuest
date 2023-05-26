function showModalWin() {

    let darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    let modalWin = document.getElementById('popup_window');
    modalWin.style.display = 'flex';

    darkLayer.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer);
        modalWin.style.display = 'none';
        return false;
    };
}

function onlyNumberKey(evt) {
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return false;
    return true;
}

function formSubmit(evt) {
    evt.preventDefault();
    closeWindow();
    setTimeout(() => { alert("Покупка совершена!") }, 100);
    return false;
}

function closeWindow() {
    let darkLayer = document.getElementById("shadow");
    darkLayer.parentNode.removeChild(darkLayer);
    document.getElementById("popup_window").style.display = 'none';

}