import React, { useEffect, useState } from 'react';
import TelevizorCard from '../../components/Televizor/TelevizorCard';
import SearchBar from '../../components/SearchBar';
import { getAllTelevizoare, deleteTelevizor } from '../../services/TelevizorService';
import { useNavigate } from "react-router-dom";  // Importă useNavigate

function TelevizorListPage() {
    const [televizoare, setTelevizoare] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        getAllTelevizoare().then(setTelevizoare);
    }, []);

    const handleDelete = (id) => {
        deleteTelevizor(id).then(() => {
            setTelevizoare(televizoare.filter((telev) => telev.id !== id));
        });
    };

    const handleEdit = (id) => {
        console.log("Edit Televizor with ID:", id);
        // Redirecționează la pagina de editare
        navigate(`/televizoare/edit/${id}`);
    };

    const handleAdd = (id) => {
        console.log("Add televizor:", id);
        // Redirecționează la pagina de editare
        navigate(`/televizoare/add`);
    };

    const filteredTelevizoare = televizoare.filter((telev) =>
        Object.values(telev).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleBackToHome = () => {
        navigate('/');  // Navighează înapoi la Home
    };

    return (
        <div>
            <button onClick={handleBackToHome}>Întoarce-te la Home</button> {/* Butonul de întoarcere */}
            <h1>Televizoare List</h1>
            <button onClick={handleAdd}>Adauga Televizor</button> {/* Butonul de adaugare */}
            <SearchBar onSearch={setSearchTerm} />
            {filteredTelevizoare.map((telev) => (
                <TelevizorCard
                    key={telev.id}
                    televizor={telev}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}

export default TelevizorListPage;
