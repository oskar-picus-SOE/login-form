import axios from "axios";

const apiGatewayUrl = "http://localhost:8080";

export const login = async (formValues) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    return axios.post(`${apiGatewayUrl}/api/login`, JSON.stringify(formValues), config);
};