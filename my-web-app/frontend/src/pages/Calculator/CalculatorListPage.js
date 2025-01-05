import React, { useEffect, useState } from 'react';
import CalculatorCard from '../../components/Calculator/CalculatorCard';
import SearchBar from '../../components/SearchBar';
import { getAllCalculators, deleteCalculator } from '../../services/calculatorService';
import { useNavigate } from "react-router-dom";  // Importă useNavigate

function CalculatorListPage() {
    const [calculators, setCalculators] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        getAllCalculators().then(setCalculators);
    }, []);

    const handleDelete = (id) => {
        deleteCalculator(id).then(() => {
            setCalculators(calculators.filter((calc) => calc.id !== id));
        });
    };

    const handleEdit = (id) => {
        console.log("Edit calculator with ID:", id);
        // Redirecționează la pagina de editare
        navigate(`/calculators/edit/${id}`);
    };

    const handleAdd = (id) => {
        console.log("Add calculator:", id);
        // Redirecționează la pagina de editare
        navigate(`/calculators/add`);
    };

    const filteredCalculators = calculators.filter((calc) =>
        Object.values(calc).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleBackToHome = () => {
        navigate('/');  // Navighează înapoi la Home
    };

    return (
        <div>
            <button onClick={handleBackToHome}>Întoarce-te la Home</button> {/* Butonul de întoarcere */}
            <h1>Calculator List</h1>
            <button onClick={handleAdd}>Adauga Calculator</button> {/* Butonul de adaugare */}
            <SearchBar onSearch={setSearchTerm} />
            {filteredCalculators.map((calc) => (
                <CalculatorCard
                    key={calc.id}
                    calculator={calc}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}

export default CalculatorListPage;
