import axios from "axios";

const API_URL = 'http://localhost:8080/api/monitors';

export const getAllMonitors = async () => {
    const response = await axios.get("http://localhost:8080/api/monitors/all");
    return response.data;
};

export const getMonitorById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const addMonitor = async (monitor) => {
    await axios.post(API_URL+"/add", monitor);
};

export const updateMonitor = async (id, monitor) => {
    await axios.post(`${API_URL}${"/edit"}`, monitor);
};

export const deleteMonitor = async (id) => {
    await axios.delete(API_URL+"/delete/"+id);
};