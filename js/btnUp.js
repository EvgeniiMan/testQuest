const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.add('btn-up--show');
    },
    hide() {
        this.el.classList.remove('btn-up--show');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 50 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();