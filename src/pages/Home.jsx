import Features from "../components/Features";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div className="my-7 md:my-10 lg:my-16 container mx-auto w-11/12 max-w-7xl">
            <Slider />
            <Features />
        </div>
    );
};

export default Home;