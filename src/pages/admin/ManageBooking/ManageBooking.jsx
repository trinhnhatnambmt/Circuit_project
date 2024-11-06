import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ManageBooking() {
    const [bookings, setBookings] = useState([]);
    const accessToken = useSelector((state) => state.user.account.access_token);

    const fetchDataBookings = async () => {
        const res = await axios.get("http://167.71.220.5:8080/admin/bookings", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log("res", res);
    };

    useEffect(() => {
        fetchDataBookings();
    }, []);
    return <div>ManageBooking</div>;
}

export default ManageBooking;
