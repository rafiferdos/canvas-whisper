import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems"
import AddCartItem from "../pages/AddCartItem"
import MyArtAndCraftList from "../pages/MyArtAndCraftList"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRoutes from "../components/PrivateRoutes"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/all_art_and_craft_items',
                element: <AllArtAndCraftItems />
            },
            {
                path: '/add_cart_item',
                element: <AddCartItem />
            },
            {
                path: '/my_art_and_craft_list',
                element:
                    <PrivateRoutes>
                        <MyArtAndCraftList />
                    </PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    }
])

export default router