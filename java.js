const toggle = document.getElementById("toggle-tema");
const body = document.body;
const form = document.querySelector("form");

// Cambia entre modo claro y oscuro
toggle.addEventListener("change", () => {
  body.classList.toggle("dark", toggle.checked);
});

// Al enviar el formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Tu información ha sido enviada correctamente.");
  form.reset();
});
