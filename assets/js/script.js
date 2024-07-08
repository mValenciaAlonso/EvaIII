document.getElementById('formularioCalorias').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const peso = parseFloat(document.getElementById('peso').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    const actividad = parseFloat(document.querySelector('input[name="actividad"]:checked').value);

    // Validar peso
    if (isNaN(peso) || peso < 1 || peso > 120) {
        document.getElementById('alertaPeso').classList.remove('d-none');
        return;
    } else {
        document.getElementById('alertaPeso').classList.add('d-none');
    }

    // Validar tiempo
    if (isNaN(tiempo) || tiempo < 5 || tiempo > 150) {
        document.getElementById('alertaTiempo').classList.remove('d-none');
        return;
    } else {
        document.getElementById('alertaTiempo').classList.add('d-none');
    }

    // Calcular calorías quemadas
    const calorias = actividad * 3.5 * peso * (tiempo / 200);

    // Mostrar resultado
    document.getElementById('alertaResultado').textContent = `Calorías quemadas: ${calorias.toFixed(2)}`;
    document.getElementById('alertaResultado').classList.remove('d-none');
});
