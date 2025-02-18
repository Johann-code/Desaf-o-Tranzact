// // IMPORTAR FIREBASE Y FIRESTORE
// import './firebase.js';
import { db, } from './firebase.js';
// import { updateProfile, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, orderBy, collection, getDocs, addDoc, query, doc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

var nom_comp = localStorage.getItem("name");
var edad = localStorage.getItem("age");
var direccion = localStorage.getItem("local");
var telefono = localStorage.getItem("phone");
var dni = localStorage.getItem("dni")

const tabla = document.getElementById("tabla");


function Obtener_Resultado() {
    tabla.innerHTML = "";

    const fila = document.createElement("tr");
    fila.className = "fila";
    const td_nom = document.createElement("td");
    td_nom.innerHTML = nom_comp;
    const td_edad = document.createElement("td");
    td_edad.innerHTML = edad;
    const td_dni = document.createElement("td");
    td_dni.innerHTML = dni;
    const td_tel = document.createElement("td");
    td_tel.innerHTML = telefono;
    const td_dir = document.createElement("td");
    td_dir.innerHTML = direccion;
    // fila.innerHTML = `<td>${nom_comp}</td><td>${edad}</td><td>${dni}</td><td>${telefono}</td><td>${direccion}</td>`;
    // tabla.appendChild(fila);
    fila.appendChild(td_nom);
    fila.appendChild(td_dni);
    fila.appendChild(td_edad);
    fila.appendChild(td_tel);
    fila.appendChild(td_dir);
    tabla.appendChild(fila)
}
Obtener_Resultado();

function cargarClientes() {
    try {
        tabla.innerHTML = "";
        const clientesQuery = query(collection(db, "clientes"), orderBy("timestamp", "desc"));
        const consulta = await getDocs(clientesQuery);

        consulta.forEach((doc) => {
            const cliente = doc.data();
            const nuevoCliente = document.createElement("tr");
            //nuevoCliente.classList.add("cliente");

            // Convertir Timestamp a una fecha legible
            // const fechaPublicacion = cliente.timestamp.toDate();
            // const horaPublicacion = fechaPublicacion.toLocaleTimeString();
            // const fechaFormateada = fechaPublicacion.toLocaleDateString();

            // Contenido de la publicación
            let contenido = `
              <!-- Estructura de TR -->
              <tr>
                        <td>${cliente.name}</td>
                        <td>${cliente.dni}</td>
                        <td>${cliente.age}</td>
                        <td>${cliente.phone}</td>
                        <td>${cliente.local}</td>
                        <td>${cliente.plan}</td>
                    </tr>
            `;

            nuevoCliente.innerHTML = contenido; // Asignar contenido al div
            tabla.appendChild(nuevoCliente); // Agregar la publicación al contenedor

            //Cargar los comentarios de esta publicación
            cargarComentarios(doc.id);
        });
    } catch (error) {
        console.log("Error al cargar publicaciones:", error);

    }
}

cargarClientes()