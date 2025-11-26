export default function mostrarHome() {
    const app = document.getElementById("app");

    // categorías + palabras
    const data = {
    personajes: [
        "Pirata", "Doctor", "Chef", "Astronauta", "Mago", "Detective",
        "Streamer", "Profesor", "Ninja", "Rey", "Alien", "Vaquero",
        "Samurai", "Robot", "Soldado", "Vampiro", "Héroe", "Villano"
    ],

    objetos: [
        "Teléfono", "Llave", "Silla", "Espada", "Laptop", "Cámara",
        "Botella", "Mochila", "Martillo", "Reloj", "Gafas", "Control",
        "Mouse", "Audífonos", "Bicicleta", "Paraguas", "Drone", "Pelota"
    ],

    lugares: [
        "Playa", "Castillo", "Hospital", "Hotel", "Bosque", "Museo",
        "Oficina", "Restaurante", "Aeropuerto", "Biblioteca",
        "Montaña", "Desierto", "Estadio", "Parque", "Isla", "Escuela"
    ],

    comidas: [
        "Pizza", "Hamburguesa", "Sushi", "Pasta", "Tacos", "Helado",
        "Ensalada", "Arepa", "Ramen", "Pollo frito", "Panqueques",
        "Hotdog", "Chocolate", "Empanada", "Cereal"
    ],

    animales: [
        "Perro", "Gato", "Tiburón", "León", "Panda", "Águila",
        "Caballo", "Lobo", "Tortuga", "Delfín", "Elefante",
        "Murciélago", "Zorro", "Serpiente", "Conejo"
    ],

    deportes: [
        "Fútbol", "Baloncesto", "Tenis", "Natación", "Boxeo",
        "Ciclismo", "Golf", "Béisbol", "Skate", "Voleibol",
        "Esgrima", "Surf", "Atletismo"
    ],

    colores: [
        "Rojo", "Azul", "Verde", "Amarillo", "Negro",
        "Blanco", "Morado", "Rosa", "Naranja", "Café",
        "Gris", "Turquesa"
    ],

    vehículos: [
        "Carro", "Moto", "Avión", "Barco", "Helicóptero",
        "Tren", "Patineta", "Camión", "Submarino", "Bus"
    ],

    tecnologías: [
        "PC", "Smartphone", "Tablet", "Smartwatch", "Consola",
        "Drone", "Impresora", "Router", "VR", "Cámara"
    ]
};

    app.innerHTML = `
        <h2>Impostor Game</h2>

        <div class="game-box">
            <label>Selecciona una categoría:</label>
            <select id="categoria">
                <option value="">-- Escoge una --</option>
                <option value="personajes">Personajes</option>
                <option value="objetos">Objetos</option>
                <option value="lugares">Lugares</option>
                <option value="comidas">Comidas</option>
                <option value="animales">Animales</option>
                <option value="deportes">Deportes</option>
                <option value="colores">Colores</option>
                <option value="vehículos">Vehiculos</option>
                <option value="tecnologías">Tecnologias</option>
            </select>

            <button id="btnGenerar">Generar palabra</button>

            <div id="resultado" class="resultado"></div>
        </div>
    `;

    document.getElementById("btnGenerar").addEventListener("click", () => {
        const categoria = document.getElementById("categoria").value;
        const resultado = document.getElementById("resultado");

        if (!categoria) {
            resultado.innerHTML = "<p>Selecciona una categoría primero 👀</p>";
            return;
        }

        const lista = data[categoria];
        const random = lista[Math.floor(Math.random() * lista.length)];

        resultado.innerHTML = `
            <p class="word">${random}</p>
        `;
    });
}