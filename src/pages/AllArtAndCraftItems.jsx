import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const AllArtAndCraftItems = () => {

    const allData = useLoaderData()
    // console.log(allData.map((item) => item._id))

    // const {user} = useContext(AuthContext)
    // useEffect(()=> {
    //     fetch()
    // },[user])

    return (
        <div className="flex lg:my-20 md:my-16 my-12 items-center justify-center w-11/12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-4 md:mb-8 lg:mb-16 ">
                {
                    allData.map((item) => {
                        return (
                            <>
                                <div key={item._id} className="card lg:w-96 bg-base-300 shadow-xl">
                                    <figure><img src={item?.image_url} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.item_name}</h2>
                                        <p>{item.short_description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/art_and_crafts/details/${item._id}`} className="btn btn-primary">View Details</Link>
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

export default AllArtAndCraftItems;