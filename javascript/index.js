const buttonDice = document.getElementById("buttonDice");
const titleConsejo = document.getElementById("titleConsejo");
const textConsejo = document.getElementById("consejoText");


buttonDice.addEventListener("click", obtenerConsejo);

function obtenerConsejo() {
    console.log("Acabas de hacer click");

    fetch("https://api.adviceslip.com/advice").then(function (response) {
        console.log(response.status)
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error("No se obtuvo una respuesta valida")
        }

    }).then(function (data) {
        console.log(data);

        titleConsejo.innerText = `Advice # ${data.slip?.id ?? ""}`;
        textConsejo.innerText = `"${data.slip?.advice ?? ""}"`;

    }).catch(function (error) {
        console.log(error)
    })
}

window.addEventListener("DOMContentLoaded", obtenerConsejo);