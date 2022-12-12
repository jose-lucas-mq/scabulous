var videos = [
    "Blinding_Lights",
    "Call_Out_My_Name",
    "Cant_Feel_My_Face",
    "Creeping",
    "Die_For_You",
    "Earned_It",
    "Lost_In_Fire",
    "Moth_To_A _Flame",
    "Next",
    "Out_of_Time",
    "Save_Your_Tears",
    "Secrets",
    "Starboy",
    "Take_My_Breath",
    "The_Hills",
    "Wicked_Games",
];

window.onload = function () {
    playVideo();
    showDateShow();
    setInterval(showDateShow, 1000);
};

function playVideo(){
    var playerDiv = document.getElementById("player_video");
    var player = document.createElement("source");
    var randomVideoPath = videos[Math.floor(Math.random() * videos.length)];
    player.setAttribute('src', `./resource/img/abel/${randomVideoPath}.mp4`);
    player.setAttribute('type', "video/mp4");

    playerDiv.appendChild(player);
}

function showDateShow(){
    var actual_date = new Date();
    var show_date = new Date("10/10/2023 16:00:00")

    var diff = (show_date.getTime() - actual_date.getTime())

    var diff_days = Math.floor(diff / (1000 * 60 * 60 * 24))
    var diff_hours = Math.floor(diff / 1000 / 60 / 60) % 24
    var diff_minutes = Math.floor(diff / 1000 / 60 ) % 60
    var diff_seconds = Math.floor(diff / 1000 ) % 60
   

    var span_dias = document.getElementById("dias_pro_show");
    var span_horas = document.getElementById("horas_pro_show");
    var span_minutos = document.getElementById("minutos_pro_show");
    var span_segundos = document.getElementById("segundos_pro_show");

    span_dias.innerHTML = `<br> ${diff_days} dias <br>`
    span_horas.innerHTML = `${diff_hours <= 0 ? "" : diff_hours + " horas <br>" }  `
    span_minutos.innerHTML = `${diff_minutes <= 0 ? "" : diff_minutes + " minutos   <br>"}`
    span_segundos.innerHTML = `e ${diff_seconds <= 0 ? "" : diff_seconds + " segundos   <br>"}`
}