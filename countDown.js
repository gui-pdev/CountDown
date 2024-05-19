var dias = document.getElementById("dias");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");

function tempo(){
    let agora = moment()
    let copa =  moment('2026-06-11 03:00:00')
    // let formato = moment(copa - agora)
    dias.innerText = copa.diff(agora, 'days') + ' Dias'
    horas.innerText = moment(copa - agora).format('h') + ' Horas'
    minutos.innerText = moment(copa - agora).format('mm') + ' Minutos'
    segundos.innerText = moment(copa - agora).format('ss') + ' Segundos'
}

setInterval(tempo, 1000)


