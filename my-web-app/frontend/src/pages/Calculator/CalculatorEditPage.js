import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCalculatorById, updateCalculator } from "../../services/CalculatorService";
import CalculatorForm from "../../components/Calculator/CalculatorForm";

function CalculatorEditPage() {
    const { id } = useParams(); // ID-ul calculatorului din URL
    const navigate = useNavigate();
    const [calculatorData, setCalculatorData] = useState(null);

    useEffect(() => {
        const fetchCalculator = async () => {
            try {
                const data = await getCalculatorById(id);
                setCalculatorData(data);
            } catch (error) {
                console.error("Failed to fetch calculator:", error);
                alert("Failed to load calculator. Please try again.");
            }
        };
        fetchCalculator();
    }, [id]);

    const handleUpdateCalculator = async (updatedData) => {
        try {
            await updateCalculator(id, updatedData);
            alert("Calculator updated successfully!");
            navigate("/calculators"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to update calculator:", error);
            alert("Failed to update calculator. Please try again.");
        }
    };

    if (!calculatorData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Edit Calculator</h1>
            <CalculatorForm onSubmit={handleUpdateCalculator} initialData={calculatorData} />
        </div>
    );
}

export default CalculatorEditPage;
