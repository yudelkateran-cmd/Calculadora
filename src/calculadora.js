// --- 1. VARIABLES GLOBALES Y ARREGLOS ---
let historial = []; // Aquí guardaremos los objetos de cada operación

// --- 2. FUNCIONES (Lógica) ---
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
    if (b === 0) return "Error"; // Validación básica
    return a / b;
}

// --- 3. PROGRAMA PRINCIPAL ---
function iniciarCalculadora() {
    let continuar = true;

    // Bucle While para que el programa no se cierre hasta que tú quieras
    while (continuar) {
        
        // A) MENU PRINCIPAL
        let opcion = prompt(
            "   CALCULADORA \n" +
            "1. Sumar\n" +
            "2. Restar\n" +
            "3. Multiplicar\n" +
            "4. Dividir\n" +
            "5. Ver Historial\n" +
            "6. Salir\n\n" +
            "Elige una opción:"
        );

        // B) VALIDAR SI EL USUARIO QUIERE SALIR
        if (opcion === "6" || opcion === null) {
            continuar = false;
            alert("Adiós!");
            break;
        }

        // C) SI ELIGE VER HISTORIAL (No pide números)
        if (opcion === "5") {
            mostrarHistorial();
            continue; // Vuelve al inicio del while
        }

        // D) SI ELIGE UNA OPERACIÓN MATEMÁTICA (1, 2, 3 o 4)
        if (["1", "2", "3", "4"].includes(opcion)) {
            
            // --- AQUÍ ES DONDE EL USUARIO LLENA LAS VARIABLES ---
            let entrada1 = prompt("Ingresa el primer número:");
            let entrada2 = prompt("Ingresa el segundo número:");

            // Validamos que no estén vacíos y sean números
            if (entrada1 === "" || entrada2 === "" || isNaN(entrada1) || isNaN(entrada2)) {
                alert("Error: Debes ingresar números válidos.");
                continue; // Reinicia el ciclo si hubo error
            }

            // Convertimos el texto del prompt a Número real
            let num1 = parseFloat(entrada1);
            let num2 = parseFloat(entrada2);
            let resultado = 0;
            let nombreOperacion = "";

            // E) PROCESAR LA OPERACIÓN (Switch)
            switch (opcion) {
                case "1":
                    resultado = sumar(num1, num2);
                    nombreOperacion = "Suma";
                    break;
                case "2":
                    resultado = restar(num1, num2);
                    nombreOperacion = "Resta";
                    break;
                case "3":
                    resultado = multiplicar(num1, num2);
                    nombreOperacion = "Multiplicación";
                    break;
                case "4":
                    resultado = dividir(num1, num2);
                    nombreOperacion = "División";
                    break;
            }

            // Mostrar resultado
            if (resultado === "Error") {
                alert("No se puede dividir por cero.");
            } else {
                alert(`El resultado de la ${nombreOperacion} es: ${resultado}`);
                
                // --- GUARDAR EN OBJETO Y ARRAY (Requerimiento pag 2) ---
                let nuevoRegistro = {
                    tipo: nombreOperacion,
                    val1: num1,
                    val2: num2,
                    total: resultado
                };
                historial.push(nuevoRegistro); // Guardamos en el arreglo
            }

        } else {
            alert("Opción no válida, intenta de nuevo.");
        }
    }
}

// Función auxiliar para recorrer el arreglo
function mostrarHistorial() {
    console.clear();
    console.log("--- TU HISTORIAL ---");
    
    if (historial.length === 0) {
        alert("Aún no has hecho operaciones.");
    } else {
        // Recorremos el arreglo con un FOR
        let mensajeHistorial = "";
        for (let i = 0; i < historial.length; i++) {
            // Accedemos al objeto dentro del arreglo
            let item = historial[i]; 
            console.log(`${i+1}. ${item.tipo}: ${item.total}`);
            mensajeHistorial += `${i+1}. ${item.tipo}: ${item.total}\n`;
        }
        alert("Mira la consola para detalles o:\n" + mensajeHistorial);
    }
}

// Ejecutar
iniciarCalculadora();