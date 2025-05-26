// 1) Quali sono i tipi primitivi principali in TypeScript?
// 1) i tipi principali in TypeScript sono:
//Primitivi: string-boolean-number-null-undefined
//Strutturali:Object-Array-function
//in Ts ce ne sono altri come any-never-unknown-void





// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
let myName:string= "Alessandro"
let myAge:number= 29
let studTs:boolean=true


// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
const greet = (name: string) => {
  return "Ciao " + name;
};
console.log(greet("alessandro"))


// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
const sum =(a:number, b:number):number =>{return a+b}


// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const myIva = (a:number, ):number =>{
    const iva=0.22
    return a+a*iva
}
console.log(myIva(10))


// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const sumLenght = (a:string, b:string)=>{
    return a.length + b.length
}
console.log(sumLenght("alessandro","alice"))


// 7) Cos'è un Type Union e come si scrive?
// E' la possibilità di dare ad un parametro o ad una variabile più type es:
let gino:boolean | string ;
let ambrogio: string| boolean| number;


// 8) Crea una variabile che possa contenere un numero, null o undefined.
let variety:number|null|undefined;


// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type week= "Lunedì"|"Martedì"|"Mercoledì"|"Giovedì"|"Venerdì"|"Sabato"|"Domenica"
let giorno:week ="Martedì"
// let giornopazzo:week = "paperino" questo da errore perchè la let può avere solo i valori che ho dichiarato in week.


// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
const numbers:number[]= [1,2,3]
const numbers2: Array<number>= [1,2,3]


// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri
const myTuple:[string,string,string,number,number]=["ciao","a","tutti",20,25]


// 12) Qual è la differenza tra type e interface?
//l'interface può essere usato con classi e oggetti può essere estesa con extend e ha come keyword interface
//type ha la possibilità di combinare più tipe con Union e può essere esteso con &
//la differenza tra i due è che interface è supportato dalle classi type no.


// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface person{
    firstname:string
    lastname:string
    age:number
}


// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale
interface utente {
    firstname:string
    lastname:string
    age:number
    email:string
    tel?:number
}


// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto
type student={
    name:string
    vote:number
}

let students:student[]=[
    {name:"Alessandro", vote:10},
    {name:"Andrea",vote:8},
    {name:"Camilla", vote:10}
]



// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo{
    model:string
    brand:string
    power:number
}
interface Auto extends Veicolo{
    nporte:number
    anno:number
    km?:number
}


// 17) Crea un oggetto che implementi l'interfaccia Auto.
const myCar:Auto ={
    model:"polo",
    brand:"volkswagen",
    power:70,
    nporte:5,
    anno:2013
}

const yourCar:Auto ={
    model:"panda",
    brand:"fiat",
    power:50,
    nporte:3,
    anno:1998,
    km:200.000
}


// 18) Cosa sono i Generics in TypeScript?
//sono parametri di tipo che rendono il componente,la funzione o la classe riutilizzabile e quindi permette di decidere il type da associare nel momento dell'utilizzo 


// 19) È possibile avere più tipi generici in un'interfaccia?
//si è possibile intervallandoli con una virgola <T,P,...>


// 20) Crea un'interfaccia generica per una risposta API.
interface Api<T>{
    success:boolean
    resp:T
    error:string
}