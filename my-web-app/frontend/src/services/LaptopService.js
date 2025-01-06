import axios, { AxiosHeaders } from "axios";

const API_URL='http://localhost:8080/api/laptops';

export const getAllLaptops= async()=>{
    const response = await axios.get(API_URL+"/all");
    return response.data;
};

export const getLaptopById = async(id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const addLaptop = async(laptop) => {
    await axios.post(API_URL+"/add", laptop);
};

export const updateLaptop = async (id, laptop) => {
    await axios.post(`${API_URL}${"/edit"}`, laptop);
};

export const deleteLaptop = async (id) => {
    await axios.delete(API_URL+"/delete/"+id);
};