import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtAndCraftDetails = () => {

    const { id } = useParams();

    const [eachProduct, setEachProduct] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3000/singleItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setEachProduct(data)
                console.log(eachProduct)
            })
    }, [id])

    const { image_url, item_name, short_description, price, subcategory_name, processing_time, email, name } = eachProduct



    return (
        <div className="lg:min-h-[calc(100vh-200px)] lg:py-0 my-8 md:my-12 flex items-center justify-center">
            <div className="card lg:card-side bg-base-100 shadow-2xl lg:max-w-6xl lg:px-10 md:px-5 px-2 py-5 md:py-16 ">
                <figure><img className="rounded-2xl" src={image_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2
                        className="card-title text-4xl flex-wrap">
                        {item_name}
                        
                        <div className="badge border-none bg-purple-100 text-purple-700">{subcategory_name}</div>

                    </h2>
                    <p>{short_description}</p>
                    <p className='font-bold'>Processing Time: <span className='text-purple-600'>{processing_time} acres</span></p>
                    <p className='font-bold my-2'>Price: <span className='text-purple-600'>{price}</span></p>
                    <div className="space-x-2 font-bold flex flex-wrap gap-2">
                        <p>Owner: <span className='text-purple-600'>{name}</span></p>
                        <p>Email: <span className='text-purple-600'>{email}</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ArtAndCraftDetails;