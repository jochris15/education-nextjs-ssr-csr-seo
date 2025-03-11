import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className="sticky top-0 z-10 p-3 bg-white border-2 border-black shadow-[0px_2px_0px_rgba(0,0,0,1)] flex justify-between items-center">
                <div className="flex justify-center items-center">
                    <button className="text-2xl bg-blue-300 py-1 px-3 font-bold mx-4 border-2 border-black">N</button>
                    <Link href="/" className="text-xl font-bold px-4 cursor-pointer">
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/products" className="text-xl font-bold px-4 cursor-pointer">
                        <span>Products</span>
                    </Link>
                    <Link
                        href="/products/add" className="text-xl font-bold px-4 cursor-pointer">
                        <span>Add Products</span>
                    </Link>
                </div>
            </nav>
        </>
    )
}