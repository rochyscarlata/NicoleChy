import { request } from "./index.scss";
import './index.scss';
import "bootswatch/dist/cyborg/bootstrap.min.css";

// const Title = document.getElementById('Title');

// Title.innerText = 'tragos de verano';

// Aqui le decimos que busque peliculas que tengan el nombre Mario

var tragos = document.getElementById("search");
var buscador = document.getElementById("buscador");
var contenido = document.querySelector('#contenido')

function search() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${tragos.value}`).then(res => res.json())
        .then(response => {
            // console.log(response.drinks);
            var bebidas = response.drinks;
            // console.table(bebidas);
            tabla(bebidas)
        });
}

function tabla(bebidas) {
    console.table(bebidas);
    contenido.innerHTML = '';
    for (let valor of bebidas) {
        contenido.innerHTML += ` <tr>
        <th scope="row">${valor.strDrink}</th>
        <td>${valor.strCategory}</td>
        <td>${valor.strAlcoholic}</td>
        <td>${valor.strGlass}</td>
    </tr>`

    }
}


buscador.addEventListener("click", function(e) {
    search();
    e.preventDefault();

});