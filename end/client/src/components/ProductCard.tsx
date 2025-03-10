import { ProductType } from "@/type";
import Link from "next/link"

export default function ProductCard({ product }: { product: ProductType }) {
    return (
        <>
            <div className="flex flex-col flex-start items-center bg-white border-2 border-black p-5 shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full">
                <div>
                    <Link href={`/products/${product.id}`}>
                        <img
                            src={product.thumbnail}
                            alt="product image"
                            className="border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer bg-blue-300"

                        />
                    </Link>
                </div>
                <div className="flex flex-col h-full w-full">
                    <b className="mt-5">{product.title}</b>
                    <hr className="border-black w-full my-2" />
                    <p>
                        {product.description}
                    </p>
                </div>
            </div>
        </>
    )
}