import axios from "../utils/axiosCustomize";

const postCreateNewUser = async (email, password, name, role) => {
    const response = await axios.post("admin/account/add-new-account", {
        email,
        password,
        name,
        role,
    });
    return response;
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

const getAllSpecialization = () => {
    const response = axios.get(`account/specialization/get-all`);
    return response;
};

const getDataUserWithId = (id) => {
    return axios.get(`account/profile/${id}`);
};

const getAllTopic = () => {
    return axios.get("topic/view");
};

const getAdminBlogs = () => {
    return axios.get("admin/blogs");
};

const getAdminTopics = () => {
    return axios.get("admin/topics");
};

const getAllBlog = () => {
    return axios.get("blog/view/all");
};

const getBlogWithId = (id) => {
    return axios.get(`blog/view/${id}`);
};

const getBlogCategories = () => {
    return axios.get(`blog/category/get-all`);
};

export {
    postCreateNewUser,
    postLogin,
    postRegister,
    getAllUser,
    deleteUser,
    getUserProfile,
    resetPassword,
    getAllSpecialization,
    getDataUserWithId,
    getAllTopic,
    getAdminBlogs,
    getAllBlog,
    getBlogWithId,
    getAdminTopics,
    getBlogCategories,
};
