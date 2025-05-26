// 1) Quali sono i tipi primitivi principali in TypeScript?
// 1) i tipi principali in TypeScript sono:
//Primitivi: string-boolean-number-null-undefined
//Strutturali:Object-Array-function
//in Ts ce ne sono altri come any-never-unknown-void
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Alessandro";
var myAge = 29;
var studTs = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("alessandro"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) { return a + b; };
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var myIva = function (a) {
    var iva = 0.22;
    return a + a * iva;
};
console.log(myIva(10));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var sumLenght = function (a, b) {
    return a.length + b.length;
};
console.log(sumLenght("alessandro", "alice"));
// 7) Cos'è un Type Union e come si scrive?
// E' la possibilità di dare ad un parametro o ad una variabile più type es:
var gino;
var ambrogio;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var variety;
var giorno = "Martedì";
// let giornopazzo:week = "paperino" questo da errore perchè la let può avere solo i valori che ho dichiarato in week.
// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri
var myTuple = ["ciao", "a", "tutti", 20, 25];
var students = [
    { name: "Alessandro", vote: 10 },
    { name: "Andrea", vote: 8 },
    { name: "Camilla", vote: 10 }
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myCar = {
    model: "polo",
    brand: "volkswagen",
    power: 70,
    nporte: 5,
    anno: 2013
};
var yourCar = {
    model: "panda",
    brand: "fiat",
    power: 50,
    nporte: 3,
    anno: 1998,
    km: 200.000
};
