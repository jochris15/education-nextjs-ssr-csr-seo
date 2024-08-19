import { Params } from "@/type"
import { addProduct } from "@/action"


export default function AddProduct({ searchParams }: Params) {
    const message = searchParams.message

    return (
        <>
            <form className="h-screen mt-10 w-3/4" action={addProduct}>
                {message && <p className="text-2xl text-red-600">{message}</p>}
                <div className="grid grid-cols-2 gap-4 mt-4" >
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Thumbnail</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter url thumbnail"
                            name="thumbnail"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter title"
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
                            placeholder="Enter description"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full btn btn-primary mt-10">Add</button>
                    </div>
                </div>
            </form>
        </>
    )
}