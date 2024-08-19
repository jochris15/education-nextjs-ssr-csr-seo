import { ProductType } from "@/type"
import Link from 'next/link'

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    // fetch data
    const product = await fetch(`http://localhost:3000/products/${params.id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: product.title,
        description: product.description,
        twitter: {
            card: 'summary_large_image',
            title: 'Next.js',
            description: 'The React Framework for the Web',
            images: ['https://nextjs.org/og.png']
        },
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages]
        }
    }
}

export default async function Page({ params }: { params: { id: number } }) {
    const response = await fetch(`http://localhost:3000/products/${params.id}`, { cache: 'no-store' })
    const data: ProductType = await response.json()

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="card glass w-1/2 p-5">
                    <figure>
                        <img
                            src={data.thumbnail}
                            alt="data!" />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title">{data.title}</h1>
                        <p>{data.description}</p>
                        <Link href='/products' className="btn btn-primary mt-10">Back to products</Link>
                    </div>
                </div>
            </div>
        </>
    )
}