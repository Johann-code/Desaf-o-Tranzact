function Obtener_Resultado() {
    var nom_comp = localStorage.getItem("name");
    var edad = localStorage.getItem("age");
    var direccion = localStorage.getItem("local");
    var telefono = localStorage.getItem("phone");
    var dni = localStorage.getItem("dni")

    const tabla = document.getElementById("tabla");
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