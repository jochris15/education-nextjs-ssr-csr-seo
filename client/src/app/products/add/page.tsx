import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

type Params = {
    params: {},
    searchParams: { message?: string }
}


export default function AddProduct({ searchParams }: Params) {
    const message = searchParams.message

    let redirectPath: string = ''

    const addProduct = async (formData: FormData) => {
        'use server'
        try {
            const data = {
                name: formData.get('name'),
                description: formData.get('description'),
                price: Number(formData.get('price')),
                stock: Number(formData.get('stock'))
            }

            if (!data.name) throw new Error('required full data')

            // hit endpoint post
            const response = await fetch('http://localhost:3000/products', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })

        } catch (error) {
            redirect(`/products/add?message=${(error as Error).message}`)
        }

        redirect("/products")
    }

    return (
        <>
            <form className="h-screen mt-10 w-3/4" action={addProduct}>
                {message && <p className="text-2xl text-red-600">{message}</p>}
                <div className="grid grid-cols-2 gap-4 mt-4" >
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter Description"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter Price"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Stock</span>
                        </label>
                        <input
                            type="number"
                            name="stock"
                            placeholder="Enter Stock"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full btn btn-primary mt-10">Add</button>
                </div>
            </form>
        </>
    )
}