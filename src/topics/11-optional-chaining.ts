export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Viridiana',
}

const passenger2: Passenger = {
    name: 'Mireya',
    children: ['Misael','Antonio'],
}


const returnChildrenNumber = (passenger: Passenger): number => {
    
    const howManyChildren = passenger.children?.length || 0;
    // Nunca recibiras un valor nulo !.
    // const howManyChildren = passenger.children!.length ; 
    console.log(passenger.name,howManyChildren);
}

returnChildrenNumber(passenger2);