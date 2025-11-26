import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig.js';

export default function mostrarLogin() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Iniciar Sesión</h2>
        <div class="login">
            <div>
                <label>Correo Electronico:</label>
                <input type="email" id="correo" placeholder="Correo electrónico"/>
            </div>
            <div>
                <label>Constraseña:</label>
                <input type="password" id="contrasena" placeholder="Contraseña"/>
            </div>
        </div>
        <button id="btnLogin">Ingresar</button>
`;
    document.getElementById("btnLogin").addEventListener("click", async () => {
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        try {
            await signInWithEmailAndPassword(auth, correo, contrasena);
            window.location.reload();
        } catch (error) {
            alert("Error al iniciar sesión: " + error.message);
        }
    });
}