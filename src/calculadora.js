//Definir las funciones para la calculadora

//sumar(num1,num2)->num1+num2,Función que sumará 2 numeros
function sumar(num1,num2) {
    return num1+num2;
}

//restar(num1,num2)->num1-num2, funcion que restará 2 numeros
function restar(num1,num2) {
    return num1-num2;
}

//multiplicar(num1,num2)->num1*num2, funcion que multiplicará 2 numeros

function multiplicar(num1,num2) {
    return num1*num2;
}

//dividir(num1,num2)->num1/num2, dividirá 2 numeros
function dividir(num1,num2) 
{
    if(num2==0)
    {
        return "Error: no se puede dividir por 0";

    }

    return num1/num2;
    
}



function menu() {

        //Captura de datos -> menu
    let numero1 = parseFloat(prompt("Ingrese primer numero"));
    let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
    // \n signica que estoy agregando un salto de línea
    let opcion = prompt(
    "Elija su opción:\n" +
    "1. Sumar\n"+
    "2. Restar\n"+
    "3. Multiplicar\n"+
    "4. Dividir\n"+
    "Otra opción. Salir del programa"

    )

    let resultado; //almacenar el resultado de los return de las funciones
//validar opción
switch (opcion) {
    case "1":
        resultado = sumar(numero1,numero2); //resultado guardará el return num1+num2
        console.log("El resultado de la suma es: "+resultado);
        alert("El resultado de la suma es: "+resultado);
        menu();
        break; //romper la ejecución del case
    case "2":
        resultado = restar(numero1,numero2); //resultado guardará el return num1-num2
        console.log(`El resultado de la resta es ${resultado}`); //template literales
        alert(`El resultado de la resta es ${resultado}`);
        menu();
        break; 
    case "3":
        resultado = multiplicar(numero1,numero2);// resultado guardará el return num1*num2
        console.log(`El resultado de la multiplicacion es ${resultado}`); 
        alert(`El resultado de la multiplicacion es ${resultado}`); 
        menu();
        break;
    case "4":
        resultado = dividir(numero1,numero2); //resultado guardará el return num1/num2
        console.log(`El resultado de la division es ${resultado}`);
        alert(`El resultado de la division es ${resultado}`);
        menu();
        break;         
    default:
        console.log(`Saliendo del programa`);
        alert(`Saliendo del programa`);
        break;
}

    
}

menu();