// 1. ARREGLOS


const numeros = [];

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt("1.a - Ingresá el número " + (i + 1) + " de 5:"));
    numeros.push(numero);
}

console.log("1.a - Todos los números:", numeros);


const numerosImpares = [];

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt("1.b - Ingresá el número " + (i + 1) + " de 5 (se guardan solo impares):"));
    if (numero % 2 !== 0) {
        numerosImpares.push(numero);
    }
}

console.log("1.b - Solo impares:", numerosImpares);


const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice) => {
    frutas[indice] = fruta.toUpperCase();
});

console.log("1.c - forEach:", frutas);


const frutasD = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutasD.map((fruta) => fruta.toUpperCase());

console.log("1.d - Original:", frutasD);
console.log("1.d - Nuevo con map:", frutasMayusculas);


const frutasE = ["pera", "manzana", "banana", "durazno"];

const frutasConNa = frutasE.filter((fruta) => {
    if (fruta.includes("na")) {
        return true;
    } else {
        return false;
    }
});

console.log("1.e - Frutas con 'na':", frutasConNa);



// 2. OBJETOS



const producto = {
    nombre: "Remera básica",
    precio: 8000,
    stock: 12,
    talles: ["S", "M", "L"]
};

console.log("2.a - Producto:", producto);



const productos = [
    { nombre: "Remera básica", precio: 8000, stock: 12, talles: ["S", "M", "L"] },
    { nombre: "Buzo con capucha", precio: 25000, stock: 3, talles: ["S", "M", "L"] },
    { nombre: "Jean recto", precio: 30000, stock: 15, talles: ["S", "M", "L"] },
    { nombre: "Campera rompeviento", precio: 40000, stock: 2, talles: ["S", "M", "L"] }
];

console.log("2.b - Productos con stock menor a 5:");

productos.forEach((prod) => {
    if (prod.stock < 5) {
        console.log(prod);
    }
});


const productosConDescuento = productos.map((prod) => {
    return {
        ...prod,
        precio: prod.precio * 0.9
    };
});

console.log("2.c - Con 10% de descuento:", productosConDescuento);


const productosConMuchoStock = productos.filter((prod) => prod.stock > 10);

console.log("2.d - Stock mayor a 10:", productosConMuchoStock);