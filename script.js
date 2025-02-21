

// document.getElementById("ingreso").onclick = async (e) => {
//     e.preventDefault();

//     const dni = document.getElementById("dni").value;
//     const phone = document.getElementById("phone").value;
//     const fecha_nacimiento = document.getElementById("born").value;
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMTUsImV4cCI6MTc0MDQ0MjEyNX0.2Qgl-7M_J6Daz2rdl5gUNelq9iXO7UwpzM4mypGTvrc";
    // const respuesta = await fetch(`https://miapi.cloud/v1/dni/${dni}`, {
    //    headers: { Authorization: `Bearer ${token}` },
    // });

//     const {datos} = await respuesta.json();
//     console.log(datos);
//     const usuario = `${datos.nombres} ${datos.ape_paterno} ${datos.ape_materno}`;
//     const domiciliado = ${datos.domiciliado.departamento} - ${datos.domiciliado.provincia} - ${datos.domiciliado.distrito};
//     console.log(usuario);

//     if (dni === "administrador" && phone === "administrador") {
//         console.log("yupi");
//         // window.location = "admin.html";
//     } else {

//         console.log("no yupi");
//         // window.location = "catalogo.html";
//     }
// }

// Evento al hacer clic en el botón de ingreso
document.getElementById("ingreso").onclick = async (e) => {
    e.preventDefault();

    // Capturar valores del formulario
    const dni = document.getElementById("dni").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value.trim();

    // Verificar si es el administrador
    if (dni === "12345678" && phone === "123456789") {
        console.log("Modo administrador activado");
        window.location = "admin.html"; // Redirigir al panel de admin
        return;
    }

    // Validaciones básicas
    if (dni.length !== 8 || phone.length !== 9) {
        alert("Datos inválidos");
        return;
    }
    
    if (age < 60) {
        alert("Eres muy joven para nuestros planes de salud. Regresa en unos años.");
        return;
    }

    // Obtener datos desde la API
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMTcsImV4cCI6MTc0MDU1NzkwNH0.EKp141zQdRRuX46mhziymzG56rJtgdDxkSlrbyzci_g";
    try {
        const respuesta = await fetch(`https://miapi.cloud/v1/dni/${dni}`, {
       headers: { Authorization: `Bearer ${token}` },
    });

        const { datos } = await respuesta.json();
        console.log(datos);

        // Construir el nombre completo y datos domiciliarios
        const usuario = `${datos.nombres} ${datos.ape_paterno} ${datos.ape_materno}`;
        const domiciliado = `${datos.domiciliado.departamento} - ${datos.domiciliado.provincia} - ${datos.domiciliado.distrito}`;
        console.log("Usuario obtenido:", usuario);

        localStorage.setItem ("name", usuario);
        localStorage.setItem ("dni", dni);
        localStorage.setItem ("phone", phone);
        localStorage.setItem ("local", domiciliado);
        localStorage.setItem ("age", age);

        console.log("Redirigiendo al catálogo...");
        window.location = "catalogo.html"; // Redirigir a la página del catálogo


    } catch (error) {
        console.error("Error en la autenticación o consulta API:", error);
    }
};

