interface Product {
    id: number,
    thumbnail: string,
    title: string,
    description: string
}

type ProductInput = Omit<Product, 'id'>