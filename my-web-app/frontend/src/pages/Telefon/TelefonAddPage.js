import React from "react";
import { useNavigate } from "react-router-dom";
import { addTelephone } from "../../services/TelefonService";
import TelefonForm from "../../components/Telefon/TelefonForm";

function TelefonAddPage() {
    const navigate = useNavigate();

    const handleAddTelefon = async (telefonData) => {
        try {
            await addTelephone(telefonData);
            alert("Telephone added successfully!");
            navigate("/telephones"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to add telephone:", error);
            alert("Failed to add telephone. Please try again.");
        }
    };

    return (
        <div>
            <h1>Add Telephone</h1>
            <TelefonForm onSubmit={handleAddTelefon} />
        </div>
    );
}

export default TelefonAddPage;
