import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig.js';

export default function mostrarRegistro() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Registro</h2>
        <div class="register">
            <div>
                <label>Nombre:</label>
                <input type="text" id="nombre" placeholder="Pepito Perez">
            </div>
            <div>
                <label>Correo Electronico:</label>
                <input type="email" id="correo" placeholder="pepito13@ejemplo.com">
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" id="contrasena" placeholder="Password123*">
            </div>
            <div>
                <label>Fecha de Nacimiento:</label>
                <input type="text" id="fecha" placeholder="31 / 12 / 1999">
            </div>
            <div>
                <label>Telefono:</label>
                <input type="tel" id="telefono" placeholder="300 100 0101">
            </div>
        </div>
        <button id="btnRegistro">Registrarse</button>`;

    document.getElementById("btnRegistro").addEventListener("click", async () => {
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;

        const contrasena = document.getElementById("contrasena").value;
        const fecha = document.getElementById("fecha").value;
        const telefono = document.getElementById("telefono").value;
        let ganados = 0;
        let perdidos = 0;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth,
                correo, contrasena);
            const user = userCredential.user;
            await setDoc(doc(db, 'usuarios', user.uid), {
                uid: user.uid,
                nombre,
                correo,
                fecha,
                telefono,
                ganados,
                perdidos
            });
            alert('Usuario registrado correctamente');
            mostrarLogin();
        } catch (error) {
            alert('Error al registrarse: ' + error.message);
        }
    });
}