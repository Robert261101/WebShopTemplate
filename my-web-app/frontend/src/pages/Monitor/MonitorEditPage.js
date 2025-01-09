import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMonitorById, updateMonitor } from "../../services/MonitorService";
import MonitorForm from "../../components/Monitor/MonitorForm";

function MonitorEditPage() {
    const { id } = useParams(); // ID-ul Monitorului din URL
    const navigate = useNavigate();
    const [monitorData, setMonitorData] = useState(null);

    useEffect(() => {
        const fetchMonitor = async () => {
            try {
                const data = await getMonitorById(id);
                setMonitorData(data);
            } catch (error) {
                console.error("Failed to fetch monitor:", error);
                alert("Failed to load monitor. Please try again.");
            }
        };
        fetchMonitor();
    }, [id]);

    const handleUpdateMonitor = async (updatedData) => {
        try {
            await updateMonitor(id, updatedData);
            alert("Monitor updated successfully!");
            navigate("/monitors"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to update monitor:", error);
            alert("Failed to update monitor. Please try again.");
        }
    };

    if (!monitorData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Edit Monitor</h1>
            <MonitorForm onSubmit={handleUpdateMonitor} initialData={monitorData} />
        </div>
    );
}

export default MonitorEditPage;
