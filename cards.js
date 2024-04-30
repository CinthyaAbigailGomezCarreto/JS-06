* [] Crear seccioner p/ tarjeta
 * Img
 * Nombre, desc, edad, lista de algo
 * [] Insertar en la tarjeta
 * [] Mostrar dentro de div.contyainer
 */

const CARDS_CONTAINER = document.querySelector("#card-container");
const USER = {
    id: 1,
    username: "User Name",
    desc: "sobre mi",
    age: 26,
    fav_books: { // esta es una colección, es una array 
        books: [
            "Ensayo sobre la ceguera",
            "Guerra y Paz",
            "Los Miserables",
        ]
    }
}

// Crear tarjeta
const card = document.createElement("div");
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement("div");

// lista------------------------------------------------------------

// map: es una iteracion por cada elemento, que SI regresa algo
const bookList = USER.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});


//Crear tarjeta
// Inyectamos info
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...bookList);

card.append(name_section, desc_section, age_section, book_section);

// Inyectar tarjeta en el container
CARDS_CONTAINER.appendChild(card);
