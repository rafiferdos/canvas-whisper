import { Link, NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";


const Navbar = () => {

    const user = 'rafi'
    const logout = () => {

    }

    const links =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-purple-700 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-400"}><a>Home</a></NavLink>
            <NavLink to='/statistics' className={({ isActive }) => isActive ? "text-purple-700 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-400"}><a>Statistics</a></NavLink>
            <NavLink to='/update_profile' className={({ isActive }) => isActive ? "text-purple-700 lg:border-b-purple-500 lg:border-b-2" : "hover:text-purple-400"}><a>Update Profile</a></NavLink>
        </>
    return (
        <>
            Navbar
        </>
    )
}

export default Navbar