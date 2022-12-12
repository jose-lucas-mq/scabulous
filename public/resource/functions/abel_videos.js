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
    var playerDiv = document.getElementById("player_video");
    var player = document.createElement("source");
    var randomVideoPath = videos[Math.floor(Math.random() * videos.length)];
    player.setAttribute('src', `./resource/img/abel/${randomVideoPath}.mp4`);
    player.setAttribute('type', "video/mp4");

    playerDiv.appendChild(player);

    // count days to the show

    var actual_date = new Date();
    var show_date = new Date("10/10/2023")

    var diff = (show_date.getTime() - actual_date.getTime())/864e5

    var span_dias = document.getElementById("dias_pro_show");

    span_dias.innerText = `${Math.round(diff)}`
};