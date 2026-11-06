let nombre = " JuAN mURILLO"
let correo = "Juandavidwuna@gmail.com" 
let edad = "18"
let entrada_codigo_promo = "DESC-2026-X"
let Correovalido = true;
let resultado = nombre.trim().toLowerCase().split(" ").map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
let resultado2 = correo.trim().toLowerCase();
let resultado3 = parseInt(edad);
let mayoredad = resultado3 >= 18;
let Nacimiento = 2026 - resultado3;
let Si = entrada_codigo_promo.split("-")[1];
let string = String(Si);
let correoValido = correo.includes("@") && correo.endsWith(".com");
let codigoValido = entrada_codigo_promo.startsWith("DESC-") && entrada_codigo_promo.endsWith("-X");
console.log("Nombre formateado: " + resultado);
console.log("Correo formateado: " + resultado2);
console.log("Correo valido: " + correoValido);
console.log("Codigo valido: " + codigoValido);
console.log("Edad: " + resultado3);
console.log("Es mayor de edad: " + mayoredad);
console.log("Tu año aproximado de nacimiento es: " + Nacimiento);
if (resultado3 >= 18 && Si === "2026") {
    console.log("10.5 puntos");
} else {
    console.log("0.0 puntos");
}
console.log(string);