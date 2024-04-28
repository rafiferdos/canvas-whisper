import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="bg-base-300 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-nowrap lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold">Let&apos;s keep in <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi'>touch!</span></h4>
                            <h5 className="text-xs md:text-lg mt-0 mb-2 text-blueGray-600 opacity-60">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6 flex">
                                <button
                                    className="bg-base-100 text-blue-500 shadow-lg font-normal p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                    <FaFacebook /></button>
                                <button
                                    className="bg-base-100 shadow-lg font-normal p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                    <BsTwitterX /></button>
                                <button
                                    className="bg-base-100 text-pink-400 shadow-lg font-normal p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                    <FaInstagram /></button>
                                <button
                                    className="bg-base-100 text-blueGray-800 shadow-lg font-normal p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                    <FaGithub />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex items-top mb-6 ">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 font-madimi text-purple-400">Useful Links</span>
                                    <ul className="list-unstyled *:opacity-60">
                                        <li>
                                            <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                               href="#">About
                                                Us</a>
                                        </li>
                                        <li>
                                            <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                               href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                               href="#">Github</a>
                                        </li>
                                        <li>
                                            <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                               href="#">Free
                                                Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-sm font-semibold mb-2 font-madimi text-purple-400">Other Resources</span>
                                    <ul className="list-unstyled *:opacity-60">
                                        <li>
                                            <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                               href="#">MIT
                                                License</a>
                                        </li>
                                        <li>
                                            <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                               href="#">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                               href="#">Privacy
                                                Policy</a>
                                        </li>
                                        <li>
                                            <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                               href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300"/>
                    <div className="flex  items-center md:justify-between justify-center">
                        <div className="w-full md:w-8/12 px-4 mx-auto text-center">
                            <div className="text-sm font-semibold py-1">
                                Copyright © <span id="get-current-year">2024 | </span><a
                                href="#"
                                className="text-blueGray-500 hover:text-gray-800" target="_blank"> Canvas Whisper by <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi'>Rafi Ferdos</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;