import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTelephoneById, updateTelephone } from "../../services/TelefonService";
import TelephoneForm from "../../components/Telefon/TelefonForm";

function TelefonEditPage() {
    const { id } = useParams(); // ID-ul telefonului din URL
    const navigate = useNavigate();
    const [telefonData, setTelefonData] = useState(null);

    useEffect(() => {
        const fetchTelefon = async () => {
            try {
                const data = await getTelephoneById(id);
                setTelefonData(data);
            } catch (error) {
                console.error("Failed to fetch telephone:", error);
                alert("Failed to load telephone. Please try again.");
            }
        };
        fetchTelefon();
    }, [id]);

    const handleUpdateTelefon = async (updatedData) => {
        try {
            await updateTelephone(id, updatedData);
            alert("Telephone updated successfully!");
            navigate("/telephones"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to update telephone:", error);
            alert("Failed to update telephone. Please try again.");
        }
    };

    if (!telefonData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Edit Telephone</h1>
            <TelephoneForm onSubmit={handleUpdateTelefon} initialData={telefonData} />
        </div>
    );
}

export default TelefonEditPage;
