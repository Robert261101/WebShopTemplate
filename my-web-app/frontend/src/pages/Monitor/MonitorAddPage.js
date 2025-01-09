import React from "react";
import { useNavigate } from "react-router-dom";
import { addMonitor } from "../../services/MonitorService";
import MonitorForm from "../../components/Monitor/MonitorForm";

function MonitorAddPage() {
    const navigate = useNavigate();

    const handleAddMonitor = async (monitorData) => {
        try {
            await addMonitor(monitorData);
            alert("Monitor added successfully!");
            navigate("/monitors"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to add monitor:", error);
            alert("Failed to add monitor. Please try again.");
        }
    };

    return (
        <div>
            <h1>Add Monitor</h1>
            <MonitorForm onSubmit={handleAddMonitor} />
        </div>
    );
}

export default MonitorAddPage;
