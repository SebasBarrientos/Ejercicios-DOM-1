console.log(document.title);

const gen1 =  document.getElementById("gen-1")
console.log(gen1);
gen1.innerText = "Generasión 1 Pokimon"

// const fondo = document.querySelector(".infocard-list")
// fondo.style.background= 'red'

// 3. Imprime por consola la URL de la página.
console.log(document.URL);
// 4. Imprime por consola el dominio de la página.
console.log(document.domain);
// 5. Imprime todos los nodos de imagen.
// const img = document.querySelectorAll("img")
// console.log(img);




// acceder en img a src
// const img2 = document.querySelectorAll("img")
// console.log(img2);
// for (let i = 0; i < img2.length; i++) {
//     img2[i].src=  "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    
// }
// Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

const fondo_cuadrado = document.querySelectorAll(".infocard-lg-data.text-muted")
const tipo = fondo_cuadrado[5].lastChild.lastChild.classList.value;
// itype flying esta es la clase que me dira si son voladores mirando la clase de a de 
console.log(tipo);
for (let i = 0; i < fondo_cuadrado.length; i++) {
    if (fondo_cuadrado[i].lastChild.lastChild.classList.value === "itype flying") {
        fondo_cuadrado[i].style.background = "blue"
    };
    
}