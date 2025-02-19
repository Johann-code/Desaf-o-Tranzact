function usuario() {
    document.getElementById("displayName").innerHTML = localStorage.getItem("name");
}
usuario();

document.addEventListener("DOMContentLoaded", function () {
    loadCatalog();
});

const plans = [
    {
        category: "Joven adulto mayor",
        options: [
            {
                name: "Plan Vital",
                price: "$15/mes",
                description: [
                    "Cobertura para servicios preventivos como chequeos médicos y vacunas." ,
                    "Acceso a programas de ejercicio y actividad física.",
                    "Descuento para servicios de salud mental y bienestar",
                ]
            },
            {
                name: "Plan Activo",
                price: "$35/mes",
                description: [
                    "Todo incluido en el plan Vital.",
                    "Cobertura para servicios de rehabilitación y terapia física.",
                    "Acceso a programas de manejo del estrés y la ansiedad.",
                ]
            },
            { 
                name: "Plan Premium", 
                price: "$60/mes", 
                description: [
                    "Todo lo incluido en los Planes Vital y Activo.",
                    "Cobertura para servicios de medicina alternativa y complementaria.",
                    "Acceso a programas de viaje y aventura para adultos mayores.",
                ]
            }
        ]
    },
    {
        category: "Adulto mayor establecido",
        options: [
            { 
                name: "Plan Seguro", 
                price: "$20/mes", 
                description: [
                    "Cobertura para servicios de atención médica primaria y especializada.",
                    "Acceso a programas de manejo de enfermedades crónicas.",
                    "Descuentos en servicios de salud en el hogar.",
                ] 
            },
            { 
                name: "Plan Protegido", 
                price: "$50/mes", 
                description: [
                    "Todo lo incluido en el Plan Seguro.",
                    "Cobertura para servicios de terapia ocupacional y de habla.",
                    "Acceso a programas de apoyo para cuidadores.",
                ]
            },
            { 
                name: "Plan Excelente", 
                price: "$80/mes", 
                description: [
                    "Todo lo incluido en los Planes Seguro y Protegido.",
                    "Cobertura para servicios de medicina paliativa y cuidados al final de la vida.",
                    "Acceso a programas de viaje y aventura para adultos mayores con necesidades especiales.",
                ]
            }
        ]
    },
    {
        category: "Adulto mayor avanzado",
        options: [
            { 
                name: "Plan Cuidado", 
                price: "$30/mes", 
                description: [
                    "Cobertura para servicios de atención médica en el hogar.",
                    "Acceso a programas de manejo de enfermedades crónicas y complejas.",
                    "Descuentos en servicios de salud en el hogar.",
                ] 
            },
            { 
                name: "Plan Apoyo", 
                price: "$60/mes", 
                description: [
                    "Todo lo incluido en el Plan Cuidado.",
                    "Cobertura para servicios de terapia física, ocupacional y de habla.",
                    "Acceso a programas de apoyo para cuidadores y familiares.",
                ]
            },
            { 
                name: "Plan Integrado", 
                price: "$100/mes", 
                description: [
                    "Todo lo incluido en los Planes Cuidado y Apoyo.",
                    "Cobertura para servicios de medicina paliativa y cuidados al final de la vida.",
                    "Acceso a programas de viaje y aventura para adultos mayores con necesidades especiales y complejas.",
                ]
            }
        ]
    }
];


function loadCatalog() {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";
    plans.forEach(plan => {
        const card = document.createElement("div");
        //card.className = "card";
        card.innerHTML = `
        <h2>${plan.category}</h2>
        <section class="card">
            <h3>${plan.options[0].name}</h3>
            <p>${plan.options[0].price}</p>
            <ul>
                <li>${plan.options[0].description[0]}</li>
                <li>${plan.options[0].description[1]}</li>
                <li>${plan.options[0].description[2]}</li>
            </ul>
            <button class="quiero_dormir" onclick="openModal('${plan.options[0].name}', '${plan.options[0].price}')">Comprar</button>
        </section>
        <section class="card">
            <h3>${plan.options[1].name}</h3>
            <p>${plan.options[1].price}</p>
            <ul>
                <li>${plan.options[1].description[0]}</li>
                <li>${plan.options[1].description[1]}</li>
                <li>${plan.options[1].description[2]}</li>
            </ul>
            <button class="quiero_dormir" onclick="openModal('${plan.options[1].name}', '${plan.options[1].price}')">Comprar</button>
        </section>
        <section class="card">
            <h3>${plan.options[2].name}</h3>
            <p>${plan.options[2].price}</p>
            <ul>
                <li>${plan.options[2].description[0]}</li>
                <li>${plan.options[2].description[1]}</li>
                <li>${plan.options[2].description[2]}</li>
            </ul>
            <button class="quiero_dormir" onclick="openModal('${plan.options[2].name}', '${plan.options[2].price}')">Comprar</button>
        </section>`;
        catalog.appendChild(card);
    });
}

function openModal(name, price) {
    // alert("quiero_dormir")
    document.getElementById("purchaseModal").classList.add("modal--show");
    document.getElementById("selectedPlan").innerHTML = `Plan seleccionado: ${name} - ${price}`;

}

function closeModal() {
    document.getElementById("purchaseModal").classList.remove("modal--show");
}

function confirmPurchase() {
    alert("Compra realizada con éxito");
    closeModal();
}