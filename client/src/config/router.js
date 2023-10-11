import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Shop from "../pages/Shop";
import ErrorPage from "../pages/ErrorPage";
import Review from "../pages/Review";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "/shop",
                element: <Shop />
            }, {
                path: "*",
                element: <ErrorPage />
            },
            {
                path: "/review",
                element: <Review />
            }
        ]
    }, {
        path: "/signin",
        element: <SignIn />
    }, {
        path: "/signup",
        element: <SignUp />
    }, {
        path: "*",
        element: <ErrorPage />
    }
]);

export default router;