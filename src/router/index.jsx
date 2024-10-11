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
import Profile from "../pages/profile/Profile";
import MentorDetail from "../pages/mentorDetail/MentorDetail";
import ManageUsers from "../pages/admin/ManageUsers/ManageUsers";
import ManageMentor from "../pages/admin/ManageMentor/ManageMentor";
import ManageStudent from "../pages/admin/ManageStudent/ManageStudent";

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
                    path: "/mentorDetail",
                    element: <MentorDetail />,
                },
                {
                    path: "/pricing",
                    element: <PricingPage />,
                },
                {
                    path: "/profile",
                    element: <Profile />,
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
                    path: "",
                    element: <Admin />,
                },
                {
                    path: "manageUsers",
                    element: <ManageUsers />,
                },
                {
                    path: "manageMentors",
                    element: <ManageMentor />,
                },
                {
                    path: "manageStudents",
                    element: <ManageStudent />,
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
