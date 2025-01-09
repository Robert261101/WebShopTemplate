import axios from 'axios';

const API_URL = 'http://localhost:8080/api/televizoare';

export const getAllTelevizoare = async () => {
    const response = await axios.get(API_URL+"/all");
    return response.data;
};

export const getTelevizoreById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const addTelevizor = async (televizor) => {
    await axios.post(API_URL+"/add", televizor);
};

export const updateTelevizor = async (id, televizor) => {
    await axios.post(`${API_URL}${"/edit"}`, televizor);
};

export const deleteTelevizor = async (id) => {
    await axios.delete(API_URL+"/delete/"+id);
};
