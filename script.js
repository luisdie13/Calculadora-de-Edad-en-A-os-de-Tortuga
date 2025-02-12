document.getElementById("ageForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener la edad de la tortuga ingresada por el usuario
    const turtleAge = parseInt(document.getElementById("turtleAge").value);

    // Calcular la edad en años humanos
    let humanAge;
    if (turtleAge <= 5) {
        humanAge = turtleAge * 10;
    } else {
        humanAge = 5 * 10 + (turtleAge - 5) * 5;
    }

    // Mostrar el resultado
    document.getElementById("humanAge").textContent = humanAge;
    document.getElementById("result").classList.remove("hidden");
});