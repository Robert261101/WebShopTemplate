import React from "react";
import { useNavigate } from "react-router-dom";
import { addTelevizor } from "../../services/TelevizorService";
import TelevizorForm from "../../components/Televizor/TelevizorForm";

function TelevizorAddPage() {
    const navigate = useNavigate();

    const handleAddTelevizor = async (televizorData) => {
        try {
            await addTelevizor(televizorData);
            alert("Televizor added successfully!");
            navigate("/televizoare"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to add televizor:", error);
            alert("Failed to add televizor. Please try again.");
        }
    };

    return (
        <div>
            <h1>Add Televizor</h1>
            <TelevizorForm onSubmit={handleAddTelevizor} />
        </div>
    );
}

export default TelevizorAddPage;
