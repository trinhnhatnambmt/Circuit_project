import React from "react";
import AdminNavbar from "../admin/Navbar/AdminNavbar";
import AdminMenu from "../admin/Menu/AdminMenu";
import { Outlet } from "react-router-dom";
import AdminFooter from "../admin/Footer/AdminFooter";
import "./AdminLayout.scss";
function AdminLayout() {
    return (
        <div className="main">
            <AdminNavbar />
            <div className="mainContainer" style={{ display: "flex" }}>
                <div className="menuContainer">
                    <AdminMenu />
                </div>

                <div className="contentContainer">
                    <Outlet />
                </div>
            </div>
            <AdminFooter />
        </div>
    );
}

export default AdminLayout;
