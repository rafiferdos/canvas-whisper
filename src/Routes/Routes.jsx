import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems"
import AddCraftItem from "../pages/AddCraftItem"
import MyArtAndCraftList from "../pages/MyArtAndCraftList"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRoutes from "../components/PrivateRoutes"
import ArtAndCraftDetails from "../components/ArtAndCraftDetails"
import UpdateDetails from "../components/UpdateDetails"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("http://localhost:3000/art_and_crafts")
            },
            {
                path: '/all_art_and_craft_items',
                element: <AllArtAndCraftItems />,
                loader: () => fetch("http://localhost:3000/art_and_crafts")
            },
            {
                path: '/add_craft_item',
                element: 
                <PrivateRoutes>
                    <AddCraftItem />
                </PrivateRoutes>
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
            },
            {
                path: '/art_and_crafts/details/:id',
                element: <PrivateRoutes><ArtAndCraftDetails /></PrivateRoutes>,
                // find each item by its id
                loader: ({ params }) => fetch(`http://localhost:3000/art_and_crafts/${params._id}`),
            },
            {
                path: '/updateItem/:id',
                element: <UpdateDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/art_and_crafts/${params._id}`),
            }

        ]
    }
])

export default router