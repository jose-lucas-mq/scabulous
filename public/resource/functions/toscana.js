window.onload = function () {
    showDateHellEnd();
    setInterval(showDateHellEnd, 1000);
};

function showDateHellEnd(){
    var actual_date = new Date();
    var show_date = new Date("04/12/2023 19:00:00")

    var diff = (show_date.getTime() - actual_date.getTime())

    var diff_days = Math.floor(diff / (1000 * 60 * 60 * 24))
    var diff_hours = Math.floor(diff / 1000 / 60 / 60) % 24
    var diff_minutes = Math.floor(diff / 1000 / 60 ) % 60
    var diff_seconds = Math.floor(diff / 1000 ) % 60
   

    var span_dias = document.getElementById("dias_pro_inferno_acabar");
    var span_horas = document.getElementById("horas_pro_inferno_acabar");
    var span_minutos = document.getElementById("minutos_pro_inferno_acabar");
    var span_segundos = document.getElementById("segundos_pro_inferno_acabar");

    span_dias.innerHTML = `<br> ${diff_days} dias <br>`
    span_horas.innerHTML = `${diff_hours <= 0 ? "" : diff_hours + " horas <br>" }  `
    span_minutos.innerHTML = `${diff_minutes <= 0 ? "" : diff_minutes + " minutos   <br>"}`
    span_segundos.innerHTML = `${diff_seconds <= 0 ? "" :"e " + diff_seconds + " segundos   <br>"}`
}