// Actividad 11 - Ejercicios JS

// ===== 1. Funciones de declaración =====

// 1.a Sin retorno de valor
function saludar(){
    console.log('¡Hola, bienvenido!')
}

saludar()

// 1.b Sin retorno de valor
function saludarPersona(nombre){
    console.log(`¡Hola ${nombre}, bienvenido!`)
}

saludarPersona('Andrés')

// 1.c Retorno de valor
function esMayorDeEdad(edad){
    if (edad >= 18){
        return true
    } else {
        return false
    }
}

const mayor = esMayorDeEdad(20)
console.log(mayor)

// ===== 2. Funciones de flecha =====

// 2.a Mismo programa que 1.c con función flecha
const esMayorDeEdadFlecha = (edad)=>{
    if (edad >= 18){
        return true
    } else {
        return false
    }
}

const mayorFlecha = esMayorDeEdadFlecha(15)
console.log(mayorFlecha)

// 2.b Comparar dos números
const compararNumeros = (num1, num2)=>{
    if (num1 < num2){
        console.log(`El número ${num1} es menor que ${num2}`)
    } else if (num1 === num2){
        console.log(`El número ${num1} es igual que ${num2}`)
    } else {
        console.log(`El número ${num1} es mayor que ${num2}`)
    }
}

for (let i = 0; i <= 10; i++){
    compararNumeros(i, 5)
}

// ===== 3. Funciones callback =====

function suma(a, b){
    const resultado = a + b
    console.log(`El resultado de la suma es ${resultado}`)
}

function resta(a, b){
    const resultado = a - b
    console.log(`El resultado de la resta es ${resultado}`)
}

// 3.a
const operacion = (num1, num2, callback)=>{
    callback(num1, num2)
}

operacion(10, 4, suma)
operacion(10, 4, resta)

// 3.b Mejorado: verifica que sean números
const operacionVerificada = (num1, num2, callback)=>{
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('Debe ingresar solo números.')
    } else {
        callback(num1, num2)
    }
}

operacionVerificada(10, 4, suma)
operacionVerificada('hola', 4, resta)