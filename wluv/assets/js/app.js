let historic_imgs = [
    "nosso_primeiro_role",
    "o_dia_em_que_me_apaixonei",
    "quando_soube_que_era_voce",
    "apostei_tudo",
    "primeiro_dia_de_namoro",
    "dia_mais_fofo",
    "seu_niver",
    "namoro_oficial",
    "rio_de_janeiro",
    "so_sei_dancar_com_voce",
    "acidente",
    "morando_juntos"
]

let historic_titles = [
    "Nosso primeiro rolê",
    "O dia em que me apaixonei",
    "Quando soube que era você",
    "Apostei tudo",
    "Primeiro dia de namoro",
    "Dia mais fofo",
    "Seu niver",
    "Namoro oficial",
    "Rio de Janeiro",
    "Só sei dancar com você",
    "Acidente",
    "Morando juntos"
]

let historic_dates = [
    "16 de junho de 2022",
    "29 de junho de 2022",
    "08 de setembro de 2022",
    "14 de março de 2023",
    "29 de abril de 2023",
    "07 de julho de 2023",
    "31 de outubro de 2023",
    "03 de agosto de 2024",
    "outubro de 2024",
    "sei lá, eu só amo ela",
    "25 de março de 2025",
    "30 de março de 2025"
]

window.onload = function loadHistoric() {
    let historic = document.getElementById("historic");
    for (let i = 0; i < historic_imgs.length; i++) {

        historic.innerHTML += `
            <div class="card" onclick="window.location.href='./../../modals/${historic_imgs[i]}.html'">
                <img src="./assets/img/${historic_imgs[i]}.jpg" alt="">
                <p class="title">
                    ${historic_titles[i]}
                </p>
                <p class="date">
                ${historic_dates[i]}
                </p>
            </div>
        `;
    }   
}