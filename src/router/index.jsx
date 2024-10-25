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
import Blog from "../pages/blog/Blog";
import BlogCategories from "../pages/blog__categories/BlogCategories";
import BlogDetail from "../pages/blogDetail/BlogDetail";
import WritePage from "../pages/writePage/WritePage";
import ScheduleManagement from "../pages/scheduleManagement/ScheduleManagement";
import MemberManagement from "../pages/MemberManagement/MemberManagement";
import ProtectedRoute from "~/components/Protected/ProtectedRoute";
import ManageTopic from "~/pages/admin/Topic/ManageTopic/ManageTopic";
import ManageBlog from "~/pages/admin/ManageBlog/MangeBlog";
import MyBlog from "~/pages/myBlogPage/MyBlog";
import EditBlogPage from "~/pages/editBlogPage/EditBlogPage";

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
                    path: "/mentorDetail/:id",
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
                {
                    path: "/blog",
                    element: <Blog />,
                },
                {
                    path: "blogCategories/:category",
                    element: <BlogCategories />,
                },
                {
                    path: "blogDetail/:id",
                    element: <BlogDetail />,
                },
                {
                    path: "writePage",
                    element: <WritePage />,
                },
                {
                    path: "myBlogPage/editBlogPage/:id",
                    element: <EditBlogPage />,
                },
                {
                    path: "/scheduleManagement",
                    element: <ScheduleManagement />,
                },
                {
                    path: "/myBlogPage",
                    element: <MyBlog />,
                },
            ],
        },
        {
            path: "/memberManagement",
            element: (
                <ProtectedRoute>
                    <MemberManagement />
                </ProtectedRoute>
            ),
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
                    element: (
                        // <ProtectedRoute>
                        <Admin />
                        // </ProtectedRoute>
                    ),
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
                {
                    path: "manageTopic",
                    element: <ManageTopic />,
                },
                {
                    path: "manageBlogs",
                    element: <ManageBlog />,
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
