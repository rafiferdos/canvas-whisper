const AddCraftItem = () => {
    return (
        <>
            <div className="hero min-h-screen lg:my-8 my-16 w-11/12 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse bg-base-200 rounded-xl lg:p-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Cart Item</h1>
                        <p className="py-6">The added cart item data will be saved on database so you don&apos;t need to worry about losing it.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                        <form className="card-body my-5">
                            <div className="lg:flex lg:gap-10 justify-between">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" placeholder="Image URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Item Name</span>
                                        </label>
                                        <input type="text" placeholder="Item Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Subcategory Name</span>
                                        </label>
                                        <input type="text" placeholder="Subcategory Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <textarea placeholder="Write a short description" className="textarea h-14 textarea-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="Price in tk" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <div className="rating gap-1 ml-3">
                                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Customization</span>
                                        </label>
                                            <div className="space-x-2 flex-row flex ml-3">
                                                <input type="radio" name="radio-1" className="radio radio-success" checked /><div>Yes</div>
                                                <input type="radio" name="radio-1" className="radio radio-error" /><div>No</div>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Processing Time (in minutes)</span>
                                        </label>
                                        <input type="text" placeholder="Enter Time" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Stock Status</span>
                                        </label>
                                        <div className="flex gap-1 text-sm md:text-base">
                                            <div className="space-x-1 flex-row flex ml-2 flex-wrap">
                                                <input type="radio" name="radio-2" className="radio radio-success" /><div>In Stock</div>
                                                <input type="radio" name="radio-2" className="radio radio-error" /><div>Made to Order</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Name" className="input input-bordered" required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCraftItem;