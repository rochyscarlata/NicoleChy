import {request} from "./index.scss"
import './index.scss';

// const Title = document.getElementById('Title');

// Title.innerText = 'tragos de verano';

// Aqui le decimos que busque peliculas que tengan el nombre Mario

var tragos=document.getElementById("search");
 var buscador =document.getElementById("buscador");
 
 function search() {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${tragos.value}`).then(res => res.json())
  .then(response => {console.log(response.drinks);
      var bebidas =response.drinks 
    console.log(bebidas)} 
     )
 } 



 buscador.addEventListener("click",function (e) {
   search();
  e.preventDefault();
   
 })
