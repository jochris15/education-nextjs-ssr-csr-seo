'use client'
import baseUrl from '@/api/baseUrl'
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function AddClient() {
    const router = useRouter()
    const [form, setForm] = useState<ProductInput>({
        title: "",
        description: "",
        thumbnail: ""
    })

    function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((oldValue) => {
            return {
                ...oldValue,
                [e.target.name]: e.target.value
            }
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // hal ini sebenernya kurang baik, di next 14, ada problem dimana data tidak reaktif karena berhubungan dengan caching, dimana kita harus pake revalidatePath untuk buang data cachednya.
        e.preventDefault()

        const response = await fetch(`${baseUrl}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })

        if (!response.ok) throw new Error('Failed to add products')
        router.push('/products')
    }


    return (
        <>
            <form className="p-5 mt-5 border-2 border-black  shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-white"
                onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-center mb-4">Add New Product</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="font-bold">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full px-3 py-2 border-2 border-black  shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            name="title"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Thumbnail (URL)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Image URL"
                            className="w-full px-3 py-2 border-2 border-black  shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            name="thumbnail"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    <label className="label">
                        <span className="font-bold">Description</span>
                    </label>
                    <textarea
                        placeholder="Enter Description"
                        className="w-full px-3 py-2 border-2 border-black  shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        name="description"
                        onChange={handleInput}
                    />
                </div>
                <div className="mt-5">
                    <button className="w-full mt-5 justify-center py-2 px-4 border-2 border-black  text-sm font-bold bg-blue-300 hover:bg-blue-400 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Add New Product
                    </button>
                </div>
            </form>
        </>
    )
}