import { useLoaderData } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Features from "../components/Features";
import Slider from "../components/Slider";
import CraftItems from "../components/CraftItems";

const Home = () => {
    const allData = useLoaderData()

    return (
        <div className="my-7 md:my-10 lg:my-16 container mx-auto w-11/12 max-w-7xl">
            <Slider />
            <CraftItems allData={allData} />
            <h1 className='lg:text-5xl md:text-3xl text-xl text-center lg:mt-8 md:my-3 my-2 font-bold' data-aos="fade-up" data-aos-duration="1500"> Our <span className='font-madimi bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Features</span>
            </h1>
            <Features />
            <h1 className='lg:text-5xl md:text-3xl text-xl text-center lg:my-4 md:my-3 my-2 font-bold' data-aos="fade-up" data-aos-duration="1500">Contact <span
                className='font-madimi bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Us</span>
            </h1>
            <ContactUs />

        </div>
    );
};

export default Home;