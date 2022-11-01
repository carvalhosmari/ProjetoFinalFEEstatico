let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").textContent = "Enviado";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbzsBw7cbM5VM4I8v00LBJYk2s6FoMaaRTQtbzmE3LDNXJXIcu0HHN8egbV1ZGrKR5yu/exec', {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => {
            // document.querySelector("#confirmacao").innerHTML = data;
            document.querySelector("#sub").value = "Solicitado"
        });
})