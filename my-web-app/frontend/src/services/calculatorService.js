import axios from 'axios';

const API_URL = 'http://localhost:8080/api/calculators';

export const getAllCalculators = async () => {
    const response = await axios.get(API_URL+"/all");
    return response.data;
};

export const getCalculatorById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const addCalculator = async (calculator) => {
    await axios.post(API_URL+"/add", calculator);
};

export const updateCalculator = async (id, calculator) => {
    await axios.post(`${API_URL}${"/edit"}`, calculator);
};

export const deleteCalculator = async (id) => {
    await axios.delete(API_URL+"/delete/"+id);
};
