import ProductCard from "@/components/ProductCard";
import baseUrl from '@/api/baseUrl'

export default async function Products() {
    const response = await fetch(`${baseUrl}/products`)
    const products: Product = await response.json()

    return (
        <>
            <div className="mt-8">
                {/* Main Product */}
                <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                    <main className="my-8 grid grid-cols-4 gap-5">
                        {products?.map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })}
                    </main>
                </div>
            </div>
        </>
    )
}