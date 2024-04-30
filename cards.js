/**
 * [] Crear tarjeta
 * [] Crear seccioner p/ tarjeta
 * Img
 * Nombre, desc, edad, lista de algo
 * [] Insertar en la tarjeta
 * [] Mostrar dentro de div.contyainer
 */

const CARDS_CONTAINER = document.querySelector("#card-container");

// Objeto User para representar la información de los usuarios
class User {
    constructor(id, username, desc, age, fav_books) {
        this.id = id;
        this.username = username;
        this.desc = desc;
        this.age = age;
        this.fav_books = fav_books;
    }

    // Método para crear la tarjeta de usuario
    createCard() {
        const card = document.createElement("div");
        const name_section = document.createElement("h3");
        const desc_section = document.createElement("p");
        const age_section = document.createElement("p");
        const book_section = document.createElement("div");

        // Crear la lista de libros para el usuario actual
        const bookList = this.fav_books.books.map(book => {
            const item = document.createElement("ul");
            item.textContent = book;
            return item;
        });

        // Inyectar información en las secciones de la tarjeta
        name_section.textContent = this.username;
        desc_section.textContent = this.desc;
        age_section.textContent = `Edad: ${this.age}`;
        book_section.append(...bookList);

        // Agregar secciones a la tarjeta
        card.append(name_section, desc_section, age_section, book_section);
        return card;
    }
}

// Función para renderizar la tarjeta en el contenedor
function renderCard(userCard) {
    CARDS_CONTAINER.appendChild(userCard);
}

// Crear instancias de usuarios y renderizar tarjetas
const usersData = [
    {
        id: 1,
        username: "User Name 1",
        desc: "Me encantan los animales",
        age: 30,
        fav_books: {
            books: [
                "La Cabaña",
                "La persona equivocada",
                "El diario de Ana Frank",
            ]
        }
    },
    {
        id: 2,
        username: "User Name 2",
        desc: "Me gusta la comida Italiana",
        age: 35,
        fav_books: {
            books: [
                "El principito",
                "La ladrona de libros",
                "Historia de México",
            ]
        }
    },
    {
        id: 3,
        username: "User Name 3",
        desc: "Me encanta las peliculas",
        age: 40,
        fav_books: {
            books: [
                "Los ojos de mi princesa",
                "Libros de gatos",
                "Shecid",
            ]
        }
    }
];

// Crear y renderizar tarjetas para cada usuario
usersData.forEach(userData => {
    const user = new User(userData.id, userData.username, userData.desc, userData.age, userData.fav_books);
    const userCard = user.createCard();
    renderCard(userCard);
});

