import { ProductType } from "@/type"
import ProductCard from "@/components/ProductCard"

export default async function Products() {
    const response = await fetch('http://localhost:3000/products', { cache: 'no-store' })
    const products: ProductType[] = await response.json()

    return (
        <>
            <main className="grid grid-cols-3 gap-10 py-20">
                {products.map((product) => {
                    return (
                        <ProductCard product={product} key={product.id} />
                    )
                })}
            </main>
        </>
    )
}