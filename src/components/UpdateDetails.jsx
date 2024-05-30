import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const UpdateDetails = () => {
    const item = useLoaderData();
    const { id } = useParams()
    const { user, theme } = useContext(AuthContext)

    const swalBGColor = theme === 'dark' ? '#333' : '#fff';

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const rating = watch('rating-3');
    const customization = watch('radio-1');
    const stockStatus = watch('radio-2');

    console.log(item._id)

    const onSubmit = (data) => {
        const userEmail = user.email
        console.log(userEmail)
        // add userEmail inside data object
        const newData = { ...data, userEmail: userEmail }
        console.log(newData);

        // send data to server
        fetch(`https://canvas-whisper-server.vercel.app/art_and_crafts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(response => response.json())
            .then(newData => {
                console.log('Success:', newData);
                console.log(newData.insertedId)
                if (newData?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Item updated successfully",
                        icon: "success",
                        confirmButtonText: "Lets Rock!",
                        background: swalBGColor
                    });
                }
            })
            // reset all input fields
            .then(() => {
                document.getElementById('form').reset();
            })
    }




    return (
        <>
            <div className="hero min-h-screen lg:my-8 my-16 w-11/12 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse bg-base-200 rounded-xl lg:p-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Cart Item</h1>
                        <p className="py-6">The added cart item data will be saved on database so you don&apos;t need to worry about losing it.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                        <form id="form" onSubmit={handleSubmit(onSubmit)} className="card-body my-5">
                            <div className="lg:flex lg:gap-10 justify-between">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" placeholder="Image URL" className="input input-bordered" {...register("image_url", { required: true })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Item Name</span>
                                        </label>
                                        <input type="text" placeholder="Item Name" className="input input-bordered" {...register("item_name", { required: true })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Subcategory Name</span>
                                        </label>
                                        <input type="text" placeholder="Subcategory Name" className="input input-bordered" {...register("subcategory_name", { required: true })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <textarea placeholder="Write a short description" className="textarea h-14 textarea-bordered" {...register("short_description", { required: true })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="Price in tk" className="input input-bordered" {...register("price", { required: true })} />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <div className="rating gap-1 ml-3">
                                            <input type="radio" name="rating-3" value='1' className="mask mask-heart bg-red-400" {...register("rating-3")} />
                                            <input type="radio" name="rating-3" value='2' className="mask mask-heart bg-orange-400" {...register("rating-3")} />
                                            <input type="radio" name="rating-3" value='3' className="mask mask-heart bg-yellow-400" {...register("rating-3")} />
                                            <input type="radio" name="rating-3" value='4' className="mask mask-heart bg-lime-400" {...register("rating-3")} />
                                            <input type="radio" name="rating-3" value='5' className="mask mask-heart bg-green-400" {...register("rating-3")} />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Customization</span>
                                        </label>
                                        <div className="space-x-2 flex-row flex ml-3">
                                            <input type="radio" value='yes' name="radio-1" className="radio radio-success" {...register("radio-1")} /><div>Yes</div>
                                            <input type="radio" value='no' name="radio-1" className="radio radio-error" {...register("radio-1")} /><div>No</div>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Processing Time (in minutes)</span>
                                        </label>
                                        <input type="text" placeholder="Enter Time" className="input input-bordered" {...register("processing_time", { required: true })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Stock Status</span>
                                        </label>
                                        <div className="flex gap-1 text-sm md:text-base">
                                            <div className="space-x-1 flex-row flex ml-2 flex-wrap">
                                                <input type="radio" value='in stock' name="radio-2" className="radio radio-success" {...register("radio-2")} /><div>In Stock</div>
                                                <input type="radio" value='made to order' name="radio-2" className="radio radio-error" {...register("radio-2")} /><div>Made to Order</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter Email" className="input input-bordered" {...register("email", { required: true })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Name" className="input input-bordered" {...register("name", { required: true })} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateDetails;