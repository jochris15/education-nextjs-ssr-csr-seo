import { redirect } from "next/navigation";

export const addProduct = async (formData: FormData) => {
    'use server'
    try {
        const data = {
            thumbnail: formData.get('thumbnail'),
            title: formData.get('title'),
            description: formData.get('description')
        }

        if (!data.title || !data.thumbnail || !data.description) throw new Error('required full data')

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