let nombre = " JuAN mURILLO"
let correo = "Juandavidwuna@gmail.com" 
let edad = "18"
let entrada_codigo_promo = "DESC-2026-X"
let Correovalido = true;
let resultado = nombre.trim().toLowerCase().split(" ").map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
let resultado2 = correo.trim().toLowerCase();
let resultado3 = parseInt(edad);


let Nacimiento = 2026 - edad;
let Si = entrada_codigo_promo.split("-")[1];
let string = String(Si);

console.log("Nombre formateado: " + resultado);
console.log("Correo formateado: " + resultado2);
console.log("Tu año aproximado de nacimiento es: " + Nacimiento);
console.log("Edad: " + resultado3);
if (resultado3 >= 18) {
    console.log("True");
}
if (resultado3 >= 18 && Si === "2026") {
    console.log("10.51% de descuento");
} else {
    console.log("0.00% de descuento");
}
if (Si === "2026") {
    console.log("Codigo valido");
}
if (correo.includes("@") && correo.includes(".com")){
    console.log("Correo valido: True");
}
console.log(Si);