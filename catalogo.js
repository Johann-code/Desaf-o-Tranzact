function usuario() {
    document.getElementById("displayName").innerHTML = localStorage.getItem("name");
}
usuario();

document.addEventListener("DOMContentLoaded", function() {
    loadCatalog();
});

const plans = [
    { name: "Plan Básico", price: "$20/mes", description: "Cobertura médica básica." },
    { name: "Plan Avanzado", price: "$50/mes", description: "Cobertura completa y más beneficios." },
    { name: "Plan Premium", price: "$80/mes", description: "Atención VIP y servicios exclusivos." }
];

function loadCatalog() {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";
    plans.forEach(plan => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${plan.name}</h3><p>${plan.price}</p><p>${plan.description}</p><button class="quiero_dormir" onclick="openModal('${plan.name}', '${plan.price}')">Comprar</button>`;
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