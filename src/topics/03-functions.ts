function addNumbers(a:number, b:number){

    return a + b;
}

const addNumbersArrow = (a: number, b:number):string =>{
    return `${a+b}`;
}

//ELEMENTOS OBLIGATORIOS, OPCIONALES,  OPCIONALES DEFINIDOS
function multiply(firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber * base;
}


//const result = addNumbers(5,9);
//const result2 = addNumbersArrow(5,9);
//const multiplyResult:number = multiply(5);
//console.log({result, result2, multiplyResult})

interface Character{
    name: string;
    hp: number;
    //Definir metodo (funcion) => retorna
    showHp: () => void; 
}

const healCharacter = (character: Character, amount:number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHp();

export {}