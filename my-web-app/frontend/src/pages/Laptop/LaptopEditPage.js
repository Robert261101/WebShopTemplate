import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLaptopById, updateLaptop } from "../../services/LaptopService";
import LaptopForm from "../../components/Laptop/LaptopForm";

function LaptopEditPage(){
    const {id}=useParams();
    const navigate=useNavigate();
    const [laptopData,setLaptopData]=useState(null);

    useEffect(() => {
        const fetchLaptop =async () => {
            try {
                const data=await getLaptopById(id);
                setLaptopData(data);
            } catch (error) {
                console.error("Failed to fetch laptop:", error);
                alert("Failed to load laptop. Please try again.");
            }
        };
        fetchLaptop();
    }, [id]);

    const handleUpdateLaptop = async (updatedLaptop) => {
        try {
            await updateLaptop(id, updatedLaptop)
            alert("Laptop updated successfully!");
            navigate("/laptops"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to update laptop:", error);
            alert("Failed to update laptop. Please try again.");
        }
    };

    if (!laptopData){
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Edit Laptop</h1>
            <LaptopForm onSubmit={handleUpdateLaptop} initialData={laptopData}/>
        </div>
    );
}

export default LaptopEditPage;

