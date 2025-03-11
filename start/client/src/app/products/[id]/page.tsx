import Link from "next/link"
import baseUrl from '@/api/baseUrl'

export default async function DetailProduct({ params }: { params: { id: number } }) {
    const { id } = params
    const response = await fetch(`${baseUrl}/products/${id}`)
    const product: Product = await response.json()

    return (
        <>
            <div className="flex flex-start bg-white border-2 border-black p-5 shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full mt-10">
                <div>
                    <img
                        src={product.thumbnail}
                        alt="product image"
                        className="border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full bg-blue-300"
                    />
                </div>
                <div className="flex mx-10 flex-col w-1/2 justify-between">
                    <b className="text-4xl mb-5">
                        {product.title}
                    </b>
                    <p className="h-full">
                        {product.description}
                    </p>
                    <div>
                        <Link href="/products" >
                            <button className="border-2 border-black p-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] w-40 bg-blue-300 hover:bg-blue-400  font-bold">Back</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}