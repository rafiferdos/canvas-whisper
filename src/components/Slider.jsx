import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Parallax, Navigation, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax'

const Slider = () => {
    return (
        <Swiper
            className='rounded-2xl *:font-extrabold'
            effect='coverflow'
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation, Parallax]}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            parallax={true}
            speed={1500}
        >
            <SwiperSlide>
                <img className='parallax-bg' data-swiper-parallax="-23%" src="https://i.ibb.co/Lgn5SrD/pexels-daiangan-102127.jpg" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <p data-swiper-parallax="-800" data-swiper-parallax-duration="2500" className="text-white md:text-3xl lg:text-6xl w-3/5 text-center">Browse diverse DIY tutorials for every skill level</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='parallax-bg' data-swiper-parallax="-23%" src="https://i.ibb.co/SsZNKN2/pexels-eduardo-romero-817034-1707640-1.jpg" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <p data-swiper-parallax="-800" data-swiper-parallax-duration="2500" className="text-white md:text-3xl lg:text-6xl w-3/5 text-center">Discover exclusive artist collaborations and limited-edition collections</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='parallax-bg' data-swiper-parallax="-23%" src="https://i.ibb.co/r7DRyZ3/pexels-steve-1495321.jpg" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <p data-swiper-parallax="-800" data-swiper-parallax-duration="2500" className="text-white md:text-3xl lg:text-6xl w-3/5 text-center">Explore eco-friendly crafting supplies and sustainable materials</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='parallax-bg' data-swiper-parallax="-23%" src="https://i.ibb.co/s1gQ076/pexels-steve-1266808-1.jpg" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <p data-swiper-parallax="-800" data-swiper-parallax-duration="2500" className="text-white md:text-3xl lg:text-6xl w-3/5 text-center">Join our vibrant community for inspiration, tips, and creative challenges</p>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;