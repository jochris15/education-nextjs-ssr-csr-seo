export default async function AddProduct() {
    return (
        <>
            <form className="p-5 mt-5 border-2 border-black  shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-white">
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