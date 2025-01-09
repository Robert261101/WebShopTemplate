import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTelevizoreById, updateTelevizor } from "../../services/TelevizorService";
import TelevizorForm from "../../components/Televizor/TelevizorForm";

function TelevizorEditPage() {
    const { id } = useParams(); // ID-ul televizorului din URL
    const navigate = useNavigate();
    const [televizorData, setTelevizorData] = useState(null);

    useEffect(() => {
        const fetchTelevizor = async () => {
            try {
                const data = await getTelevizoreById(id);
                setTelevizorData(data);
            } catch (error) {
                console.error("Failed to fetch televizor:", error);
                alert("Failed to load televizor. Please try again.");
            }
        };
        fetchTelevizor();
    }, [id]);

    const handleUpdateTelevizor = async (updatedData) => {
        try {
            await updateTelevizor(id, updatedData);
            alert("Televizor updated successfully!");
            navigate("/televizoare"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to update televizor:", error);
            alert("Failed to update televizor. Please try again.");
        }
    };

    if (!televizorData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Edit Televizor</h1>
            <TelevizorForm onSubmit={handleUpdateTelevizor} initialData={televizorData} />
        </div>
    );
}

export default TelevizorEditPage;
