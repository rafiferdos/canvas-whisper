import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])

    // const { _id } = item
    console.log(item)
    console.log(user.email)

    useEffect(() => {
        fetch(`https://canvas-whisper-server.vercel.app/myArtAndCrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItem(data)
            })
    }, [user])


    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://canvas-whisper-server.vercel.app/art_and_crafts/${_id}`, {
                    method: "DELETE"

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    // console.log(item.map((item) => item._id))

    return (
        <div className="flex lg:my-20 md:my-16 my-12 items-center justify-center w-11/12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-4 md:mb-8 lg:mb-16 ">
                {
                    item.map((item) => {
                        return (
                            <>
                                <div key={item._id} className="card lg:w-96 bg-base-300 shadow-xl">
                                    <figure><img src={item?.image_url} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.item_name}</h2>
                                        <p>{item.short_description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/updateItem/${item._id}`} className="btn btn-secondary">Update</Link>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-primary">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>



    );
};

export default MyArtAndCraftList;