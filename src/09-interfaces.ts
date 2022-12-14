type Sizes = 'S' | 'M' | 'L' | 'XL'

interface Product {
    id: string | number
    title: string
    createdAt: Date
    stock: number
    size: Sizes
}

/* Using type */
// type Product = {
//     id: UserId
//     title: string
//     createdAt: Date
//     stock: number
//     size: Sizes
// }

let products: Product[] = []

const p1: Product = {
    id: 1,
    title: 'product 1',
    createdAt: new Date(),
    stock: 10,
    size: 'M'
}

products.push(p1);
console.log(products);
