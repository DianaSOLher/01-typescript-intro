export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


// const {tax, products} = taxCalculationOptions;

// const { tax, products } = options;

//Mas de tres argumentos se recomienda tranformarlo en un objeto

// function taxCalculation({ products, tax }: TaxCalculationOptions): [number, number]{
export function taxCalculation(options: TaxCalculationOptions): [number, number]{
    
    const {tax, products} = options
    let total = 0;
    products.forEach( ({price}) => {
        // total = total + product.price;
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    //Propiedad coon el mismo nombre
    //tax
    tax: tax,
})


console.log('Total', total);
console.log('Tax', taxTotal);
