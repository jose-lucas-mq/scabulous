window.onload = function () {
    showDateHellEnd();
    setInterval(showDateHellEnd, 1000);
};

function showDateHellEnd(){
    var actual_date = new Date();
    var show_date = new Date("04/12/2023 19:00:00")

    var diff = (actual_date.getTime() - show_date.getTime())

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


const svg = document.querySelector("svg");
const svgStyles = getComputedStyle(svg);
const w = Number(svgStyles.width.split("px")[0]);
const h = Number(svgStyles.height.split("px")[0]);

const randRange = (min, max) => Math.random() * (max - min) + min;

for (i = 0; i < (w + h) / 10; i++) {
	const circle = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"circle"
	);

	const r = randRange(20, 60);

	circle.setAttribute("r", r);
	circle.setAttribute("cx", Math.round(Math.random() * w));
	circle.setAttribute("cy", Math.round(Math.random() * h));

	const fill = "none";
	circle.setAttribute("fill", fill);

	const stroke = `hsl(${randRange(0, 360)}deg 40% 80%)`;
	circle.setAttribute("stroke", stroke);

	const strokeWidth = r / 10;
	circle.setAttribute("stroke-width", strokeWidth);

	circle.setAttribute(
		"style",
		`stroke-dasharray: ${r * 0.5}, ${r * Math.PI * 2 - r * 0.5};
		stroke-dashoffset: ${r * Math.PI * 2};
		--radius: ${r};
		--duration: ${randRange(3, 5)}s;
		--delay: ${randRange(-1, 1)}s; 
		--direction: ${i % 2 === 0 ? "reverse" : "normal"}`
	);

	svg.appendChild(circle);
}
