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

export { postCreateNewUser, postLogin, postRegister, getAllUser, deleteUser };
