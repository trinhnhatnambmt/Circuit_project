import { useState } from "react";
import MyFavourite from "../../components/myFavourite/myFavourite";
import PersonalInfo from "../../components/personalInfo/PersonalInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import "./index.scss";
import MyAppointment from "../../components/myAppointment/MyAppointment";
function Profile() {
    const [activeComponent, setActiveComponent] = useState("PersonalInfo");

    const renderComponent = () => {
        if (activeComponent === "PersonalInfo") {
            return <PersonalInfo />;
        }
        if (activeComponent === "MyFavourite") {
            return <MyFavourite />;
        }
        if (activeComponent === "MyAppointment") {
            return <MyAppointment />;
        }

        return null;
    };

    return (
        <div className="profile">
            <div className="container">
                <div className="profile-container">
                    <div className="row">
                        <div className="col-3 profile-left">
                            <Sidebar setActiveComponent={setActiveComponent} />
                        </div>
                        <div className="col-9 profile-right">
                            {renderComponent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
