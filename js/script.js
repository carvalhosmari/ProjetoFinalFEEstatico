let form = document.querySelector("form");
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let data = new FormData(form);
                fetch('https://script.google.com/macros/s/AKfycbwi0qnvglMm49nMNrfXLGm67jDduhiFWCe2WC_FJqrPJ_rPXXuQ9kQCtDuBQQOhKNEZ/exec', {
                    method: "POST",
                    body: data
                })
                    .then(res => res.text())
                    .then(data => { 
                        document.querySelector("#msg").innerHTML = "Sucesso em seu envio"
                        document.querySelector("#sub").value = "Enviado";
                    });
            });