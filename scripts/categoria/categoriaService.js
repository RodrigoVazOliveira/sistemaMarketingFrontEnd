let respostaCategoria;

function obterDadosDeCategoria() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            respostaCategoria = this.responseText;
        }
    }
    xhttp.open('GET', 'http://localhost/categorias/', true);
    xhttp.send();
}