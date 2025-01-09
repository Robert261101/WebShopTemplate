import axios from 'axios';

const API_URL = 'http://localhost:8080/api/telephones';

export const getAllTelephones = async () => {
    const response = await axios.get(API_URL+"/all");
    return response.data;
};

export const getTelephoneById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const addTelephone = async (telephone) => {
    await axios.post(API_URL+"/add", telephone);
};

export const updateTelephone = async (id, telephone) => {
    await axios.post(`${API_URL}${"/edit"}`, telephone);
};

export const deleteTelephone = async (id) => {
    await axios.delete(API_URL+"/delete/"+id);
};
