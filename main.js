document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCalcular");

  btn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const u1 = parseFloat(document.getElementById("unidad1").value);
    const u2 = parseFloat(document.getElementById("unidad2").value);
    const u3 = parseFloat(document.getElementById("unidad3").value);

    if (!nombre) {
      alert("Ingresa tu nombre.");
      return;
    }

    if ([u1, u2, u3].some(n => Number.isNaN(n))) {
      alert("Ingresa las 3 calificaciones con números válidos.");
      return;
    }

    // (opcional) valida rango 0 a 10
    if ([u1, u2, u3].some(n => n < 0 || n > 10)) {
      alert("Las calificaciones deben estar entre 0 y 10.");
      return;
    }

    const promedio = (u1 + u2 + u3) / 3;
    const estatus = promedio >= 6 ? "Aprobado" : "Reprobado";

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("estatus").value = estatus;
  });
});
