// DOOM API
// OBTENER EL POR ID

const div1 = document.getElementById("div-1");
console.log(div1); // No es coleccion porque solo tiene un elemento

const divCollection = document.getElementsByTagName("div"); // lo busco por el nombre de la etiqueta div
console.log(divCollection); // este sí es un arreglo porque tiene 2 elementos

const p = document.getElementById("p1");
const usernameInputs = document.getElementsByName("username");
const usernameInput = usernameInputs[0];
console.log(p, usernameInput);

// tiene texto, nombre y valor
usernameInput.addEventListener ("input", (event) => {
    console.log(event.target.value);
    p.innerText = event.target.value;
});





