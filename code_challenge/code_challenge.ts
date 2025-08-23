/**
 * Aclaro, como los ejerciocios mostrado dentro del archivo.pdf
 * en su mayoria se basan en algoritmos/lógica creo que es conveniente usar 
 * el lenguaje de programacion TypeScript por encima de JavaScript
 * pues son lenguajes muy similares más el primero  el más legible
 * aunque menos apto para programar en conjunto conm html.
 * 
 * Y siendo que no se menciona ni se pide utilizar html es mejor
 * priorizar la legibilidad, por eso este archivo no cuenta con la terminacion 
 * '.js'; si luego para corregir quieren verlo estrictamente en un
 * archivo.js deben usar el sighuiente comando:
 * 
 * tsc code_challenge.ts; node code_challenge.js;
 * 
 * Desde ya, me disculpo si tengo errores.
 * 
 * Hora de inicio --> 21:31
 * Hora de final --> 23:00
 * 
 * Tiempo final: 90 minutos (aprox)
 * 
 * (podría haber hecho incluso más rapido, tengo sueño :( )

*/

/**Test evaluador - Ejercicio 1
Creá una función que evalúe el rendimiento de un alumno en un
examen.
0 - 2 -> Muy mal
2 - 5 -> Mal
5 - 6 -> Tan cerca pero tan lejos
6 - 8 -> Bien!
8 - 10 -> Muy bien!!
 */
function averages(nota: number){
    if (0 <= nota && nota <= 2) {
        return 'muy mal'
    }
    if (2.1 <= nota && nota <= 5) {
        return 'mal';
    }if (5.1 <= nota && nota <= 6) {
        return 'casi....';
    }if (6.1 <= nota && nota <= 8) {
        return 'bien!';
    }if (8.1 <= nota && nota <= 10) {
        return 'Muy bien!';
    }
}
const mainAv = ()=>{
    const arr: Array<ReturnType<typeof averages>> = [];
    for (let index = 0; index < 10; index++){
        const nota = Math.floor(Math.random() * 10);
        const avg = averages(nota);
        arr.push(avg);
        
    }
    
    console.log(averages(10));

    
};
mainAv();



/** Ejercicio 2 - THE BIGGEST
ONE
Creá una función que reciba como parámetros dos números y una
palabra.
Si hay un número más grande que otro retorna el más alto. En
caso de que sean iguales retorna la inicial y la última letra del
tercer parámetro.
biggestOne(16,2,"Haz") // 16
biggestOne(3,3,"Haz") // Hz
// */

function theBiggest([n1, n2]: number[], palabra:string){
    if (!(n1 !== n2)) {
        return palabra[0] + palabra[palabra.length - 1];
    }
    return Math.max(n1, n2);
}
const mainBiggest = () => {
    console.log(theBiggest([16,2],"Haz")); // 16
    console.log(theBiggest([3,3],"Haz")); // Hz
}
console.log(mainBiggest())
/**
 * Ejercicio 3 - FROOTLOOP
Dado un arreglo de objetos con frutas y verduras:
let frutasYVerduras =
[{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahori
a"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}]
Creá una función que filtre por las frutas y retorne el siguiente valor:
{frutas:['banana', 'manzana', 'frutilla', 'kiwi', 'sandia', 'melon', 'mango']}
 */
let frutasYVerduras = [
    {fruta:"banana"},
    {verdura:"apio"},
    {fruta:"manzana"},
    {fruta:"frutilla"},
    {verdura:"zanahoria"},
    {fruta:"kiwi"},
    {fruta:"sandia"},
    {fruta:"melon"},
    {verdura:"repollo"},
    {fruta:"mango"}
]
var rFormatArr = frutasYVerduras.filter(item => item.fruta !== undefined);
console.log(rFormatArr);


/**
 * Ejercicio 4 - SODA DISPENSER
Creá una función dispenserGaseosas que tome dos arreglos como parámetros. A
partir de estos, se pide crear un objeto gaseosasEnStock.
Mediante este objeto consultaremos si la gaseosa que quiere el cliente está en
stock.
let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];
 */
let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];
function dispenserGaseosas(unidades:number[], gaseosas:string[]) {
    const obj: { [key: string]: number } = {};
    gaseosas.forEach((element, idx) => {
        obj[element] = unidades[idx];
    });
    return obj;
};
console.log(dispenserGaseosas(unidades, gaseosas));


/**
 * Ejercicio 5 - AÑO DE NACIMIENTO
Escribí una función que recibe un arreglo de objetos como parámetro y
que tiene la propiedad nombre y edad.
Esta función debe devolver el mismo arreglo de objetos con una
propiedad adicional que indica el año en el que nació.
Test: [{nombre: "Juan", edad:19},{nombre:"Mario", edad: 22}]
 */
const arr = [{nombre: "Juan", edad:19},{nombre:"Mario", edad: 22}];
function rFormArr2(obj: {nombre:string, edad: number}[]) {
    console.log("puede fallar según si ya cumpliste años o no");
    const year = new Date().getFullYear();
    const rFobj: {[key:string]: string | number}[] = [];

    obj.forEach((element) => {
        rFobj.push({
            nombre: element.nombre,
            edad: element.edad,
            AnoNacimiento: year - element.edad
        });
    });
    return rFobj;
}
console.log(rFormArr2(arr));