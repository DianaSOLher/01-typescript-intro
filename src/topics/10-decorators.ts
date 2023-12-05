// @Un decorador es una funcion que se puede adjuntar a las clases/propiedades/metodos de las clases



function classDecorator<T extends { new (...args:any[]):{}}>(
    constructor: T    
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}




@classDecorator
export class SuperClass{
    //@classDecorator
    public myProperty: string = 'Abc123';

    //@classDecorator
    print(){
        console.log('Hola viri')
    }
}


//Imprime la definición de la clase
console.log(SuperClass);

const myClass = new SuperClass();

//Imprime la instancia creada de la Clase
console.log(myClass);