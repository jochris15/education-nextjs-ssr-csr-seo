'use client'

import { ProductType } from "@/type"
import ProductCard from "@/components/ProductCard"
import { useEffect, useState } from "react"
import Loading from "./loading"

export default function Products() {
    const [products, setProducts] = useState<ProductType[]>([])

    async function fetchProducts() {
        try {
            const response = await fetch('https://dummyjson.com/products', { cache: 'no-store' })

            if (!response.ok) throw new Error(`Response status : ${response.status}`)

            const { products } = await response.json()

            setProducts(products)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log('ini client component');

        fetchProducts()
    }, [])

    return (
        <>
            {products.length == 0 ? <Loading /> :
                (
                    <main className="grid grid-cols-3 gap-10 py-20">
                        {products.map((product) => {
                            return (
                                <ProductCard product={product} key={product.id} />
                            )
                        })}
                    </main>
                )}
        </>
    )
}