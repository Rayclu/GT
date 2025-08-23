const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function jubilacion(
    p, // <-- persona
    genero = ( p ) => {
        console.log(p);
        if(p.gen){
            const i = ask("Eres hombre o mujer¿?");
            console.log(`i.toLoweCase-> ${p.gen.toLowerCase}`);
            return i.toLowerCase == 'mujer' ? 'f' : 'm'; 
        }
        if(p.gen.toLowerCase == 'mujer'){
            return 'f';
        }
        return 'm';
        
    }
) {    
    console.log(genero(p));
    
    switch(genero(p)){
        case 'f':
            return p.edad >= 60 ? 'Puede jubilarse, felicidades.' : 'No puede jubilarse, señora, siga trabajando'
        case 'm': 
            return p.edad >= 65 ? 'Felicidades don, usted puede jubilarse.' : 'Disculpoe señor, siga trabajando, no cumple con los requisitos';
        default:            
            throw new Error('Parametros insuficientes para evaluar la jubilacion');
    }
}
function ask(question) {
    return new Promise(resolve => readline.question(question, resolve));
}

async function main() {
    const e = await ask('Ingrese su edad: ');
    const a = await ask('Ingrese cuantos años aportó al sistema: ');
    const gen = await ask('Ingrese su genero <hombre/mujer>: ');
    const userTest = {
        edad: Number(e),
        aportes: Number(a),
        gen: String(gen)
    };
    console.log(jubilacion(userTest));
    readline.close();
}

main();