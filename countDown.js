var dias = document.getElementById("dias");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
var menu = document.getElementById("sideMenu");
const audio = document.getElementById('background-music');


audio.volume = 0.04; // Define o volume para 4%


function tempo() {
    let agora = moment()
    let copa = moment('2026-06-11 03:00:00')
    // let formato = moment(copa - agora)
    dias.innerText = copa.diff(agora, 'days') + ' Dias'
    horas.innerText = moment(copa - agora).format('h') + ' Horas'
    minutos.innerText = moment(copa - agora).format('mm') + ' Minutos'
    segundos.innerText = moment(copa - agora).format('ss') + ' Segundos'
}
setInterval(tempo, 1000)


function openSidebar() {
    const icone = document.getElementById('menuIcon');
    if (icone.classList.contains('fa-bars')) {
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-times');
        document.body.style.overflow = "hidden"
        menu.style.opacity = 1
        menu.style.visibility = "visible"  // Substitui pelo ícone de fechar (fa-times)
    } else {
        icone.classList.remove('fa-times');
        icone.classList.add('fa-bars');  // Volta para o ícone de menu (fa-bars)
        document.body.style.overflowY = "scroll"
        menu.style.opacity = 0
        menu.style.visibility = "hidden"
    }



}


