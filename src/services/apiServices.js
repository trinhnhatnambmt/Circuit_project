import axios from "../utils/axiosCustomize";

const postCreateNewUser = async (values) => {
    // const response = await axios.post(
    //     "https://662b5a5cde35f91de157f14d.mockapi.io/pets",
    //     values
    // );
    // return response;
};

const getAllUser = () => {
    return axios.get("admin/accounts");
};

const postLogin = (email, password) => {
    return axios.post(`auth/login`, {
        email,
        password,
    });
};

const postRegister = (email, password, name, role) => {
    return axios.post(`auth/register`, { email, password, role, name });
};

const deleteUser = async (id) => {
    return await axios.delete(`admin/account/delete/${id}`);
};

const getUserProfile = async (accessToken) => {
    const response = await axios.get("account/profile", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response;
};

const resetPassword = async (token, newPassword, confirmPassword) => {
    const response = await axios.post(
        `auth/reset-password?token=${token}`,
        {
            new_password: newPassword,
            repeat_password: confirmPassword,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response;
};

export {
    postCreateNewUser,
    postLogin,
    postRegister,
    getAllUser,
    deleteUser,
    getUserProfile,
    resetPassword,
};
