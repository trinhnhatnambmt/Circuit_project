import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register/Register";
import Admin from "../pages/admin/admin";
import AdminLayout from "../components/Layout/AdminLayout";
import Login from "../pages/auth/Login/Login";
import ForgotPassword from "../pages/auth/ForgotPassword/ForgotPassword";
import CreateNewPassWord from "../pages/auth/ForgotPassword/CreateNewPassWord";
import About_us from "../pages/about_us/About_us";
import Mentor from "../pages/mentorPage/Mentor";
import PricingPage from "../pages/pricingPage/PricingPage";

function Routers() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/aboutUs",
                    element: <About_us />,
                },
                {
                    path: "/mentor",
                    element: <Mentor />,
                },
                {
                    path: "/pricing",
                    element: <PricingPage />,
                },
            ],
        },
        {
            path: "/signUp",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/forgotPassword",
            element: <ForgotPassword />,
        },
        {
            path: "/createNewPassword",
            element: <CreateNewPassWord />,
        },

        {
            path: "/admin",
            element: <AdminLayout />,
            children: [
                {
                    path: "/admin",
                    element: <Admin />,
                },
            ],
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Routers;
