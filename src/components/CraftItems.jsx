import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CraftItems = ({ allData }) => {

    return (
        <div className="my-10 md:my-20">
            <h1 className="md:text-5xl text-3xl font-bold text-center">Craft Items</h1>
            <div className="flex lg:my-20 md:my-16 my-12 items-center justify-center w-11/12 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-4 md:mb-8 lg:mb-16 ">
                    {
                        // eslint-disable-next-line react/prop-types
                        allData.slice(0, 6).map((item) => {
                            return (
                                <>
                                    <div key={item._id} className="card lg:w-96 bg-base-300 shadow-xl">
                                        <figure><img className="object-cover" src={item?.image_url} alt="Shoes" referrerPolicy="no-referrer" onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' }} /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.item_name}</h2>
                                            <h2 className="opacity-70">Price: ${item.price}</h2>
                                            <p>{item.short_description}</p>
                                            <h2 className="opacity-70">By: {item.email}</h2>
                                            <div className="card-actions justify-end">
                                                <Link to={`/art_and_crafts/details/${item._id}`} className="btn btn-primary rounded-3xl">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CraftItems;