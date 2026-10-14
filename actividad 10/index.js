// Ejercicios JS - Estructuras de control

const edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}


const numero = 7;
if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}


const nota = 8;
if (nota < 4) {
    console.log("Reprobado");
} else if (nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}



for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}