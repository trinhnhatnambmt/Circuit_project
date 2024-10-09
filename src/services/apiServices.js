import axios from "axios";

const postCreateNewUser = async (values) => {
    const response = await axios.post(
        "https://662b5a5cde35f91de157f14d.mockapi.io/pets",
        values
    );
    return response;
};

export { postCreateNewUser };
