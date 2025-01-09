import React, { useEffect, useState } from 'react';
import MonitorCard from '../../components/Monitor/MonitorCard';
import SearchBar from '../../components/SearchBar';
import { getAllMonitors, deleteMonitor } from '../../services/MonitorService';
import { useNavigate } from "react-router-dom";  // Importă useNavigate

function MonitorListPage() {
    const [monitors, setMonitors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        getAllMonitors().then(setMonitors);
    }, []);

    const handleDelete = (id) => {
        deleteMonitor(id).then(() => {
            setMonitors(monitors.filter((mon) => mon.id !== id));
        });
    };

    const handleEdit = (id) => {
        console.log("Edit monitor with ID:", id);
        // Redirecționează la pagina de editare
        navigate(`/monitors/edit/${id}`);
    };

    const handleAdd = (id) => {
        console.log("Add monitor:", id);
        // Redirecționează la pagina de editare
        navigate(`/monitors/add`);
    };

    const filteredMonitors = monitors.filter((mon) =>
        Object.values(mon).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleBackToHome = () => {
        navigate('/');  // Navighează înapoi la Home
    };

    return (
        <div>
            <button onClick={handleBackToHome}>Întoarce-te la Home</button> {/* Butonul de întoarcere */}
            <h1>Monitor List</h1>
            <button onClick={handleAdd}>Adauga Monitor</button> {/* Butonul de adaugare */}
            <SearchBar onSearch={setSearchTerm} />
            {filteredMonitors.map((mon) => (
                <MonitorCard
                    key={mon.id}
                    monitor={mon}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}

export default MonitorListPage;
