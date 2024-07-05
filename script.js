let menubtn = document.querySelector('#menu-bar')
let mynav = document.querySelector('.navbar')


menubtn.onclick = () => {
    menubtn.clssList.toggle('fa-times');
    mynav.clssList.toggle('active')

}