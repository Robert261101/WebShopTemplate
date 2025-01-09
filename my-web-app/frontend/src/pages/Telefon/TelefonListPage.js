import React, { useEffect, useState } from 'react';
import TelefonCard from '../../components/Telefon/TelefonCard';
import SearchBar from '../../components/SearchBar';
import { getAllTelephones, deleteTelephone } from '../../services/TelefonService';
import { useNavigate } from "react-router-dom";  // Importă useNavigate

function TelefonListPage() {
    const [telephones, setTelephones] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        getAllTelephones().then(setTelephones);
    }, []);

    const handleDelete = (id) => {
        deleteTelephone(id).then(() => {
            setTelephones(telephones.filter((tel) => tel.id !== id));
        });
    };

    const handleEdit = (id) => {
        console.log("Edit telephone with ID:", id);
        // Redirecționează la pagina de editare
        navigate(`/telephones/edit/${id}`);
    };

    const handleAdd = (id) => {
        console.log("Add telephone:", id);
        // Redirecționează la pagina de editare
        navigate(`/telephones/add`);
    };

    const filteredTelephones = telephones.filter((tel) =>
        Object.values(tel).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleBackToHome = () => {
        navigate('/');  // Navighează înapoi la Home
    };

    return (
        <div>
            <button onClick={handleBackToHome}>Întoarce-te la Home</button> {/* Butonul de întoarcere */}
            <h1>Telefoane List</h1>
            <button onClick={handleAdd}>Adauga Telefon</button> {/* Butonul de adaugare */}
            <SearchBar onSearch={setSearchTerm} />
            {filteredTelephones.map((tel) => (
                <TelefonCard
                    key={tel.id}
                    telephone={tel}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}

export default TelefonListPage;
