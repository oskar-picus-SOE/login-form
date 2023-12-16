import axios from "axios";

const apiGatewayUrl = "http://localhost:9090";

export const login = async (formValues) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    return axios.post(`${apiGatewayUrl}/api/login`, JSON.stringify(formValues), config);
};