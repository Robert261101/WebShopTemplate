import React from "react";
import { useNavigate } from "react-router-dom";
import { addCalculator } from "../../services/CalculatorService";
import CalculatorForm from "../../components/Calculator/CalculatorForm";

function CalculatorAddPage() {
    const navigate = useNavigate();

    const handleAddCalculator = async (calculatorData) => {
        try {
            await addCalculator(calculatorData);
            alert("Calculator added successfully!");
            navigate("/calculators"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to add calculator:", error);
            alert("Failed to add calculator. Please try again.");
        }
    };

    return (
        <div>
            <h1>Add Calculator</h1>
            <CalculatorForm onSubmit={handleAddCalculator} />
        </div>
    );
}

export default CalculatorAddPage;
