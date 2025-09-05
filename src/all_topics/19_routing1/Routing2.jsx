import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Careers from "../../pages/Careers"
import NotFound from "../../pages/NotFound"
import Layout from "../../pages/Layout"

let myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/careers",
                element: <Careers />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

const Routing2 = () => {
    return (
        <RouterProvider router={myRoutes}></RouterProvider>
    )
}

export default Routing2