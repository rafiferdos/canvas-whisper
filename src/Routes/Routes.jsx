import { createBrowserRouter } from "react-router-dom"
import ArtAndCraftDetails from "../components/ArtAndCraftDetails"
import PrivateRoutes from "../components/PrivateRoutes"
import UpdateDetails from "../components/UpdateDetails"
import Root from "../layouts/Root"
import AddCraftItem from "../pages/AddCraftItem"
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MyArtAndCraftList from "../pages/MyArtAndCraftList"
import Register from "../pages/Register"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("https://canvas-whisper-server.vercel.app/art_and_crafts")
            },
            {
                path: '/all_art_and_craft_items',
                element: <AllArtAndCraftItems />,
                loader: () => fetch("https://canvas-whisper-server.vercel.app/art_and_crafts")
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
                loader: ({ params }) => fetch(`https://canvas-whisper-server.vercel.app/art_and_crafts/${params._id}`),
            },
            {
                path: '/updateItem/:id',
                element: <UpdateDetails />,
                loader: ({ params }) => fetch(`https://canvas-whisper-server.vercel.app/art_and_crafts/${params._id}`),
            }

        ]
    }
])

export default router