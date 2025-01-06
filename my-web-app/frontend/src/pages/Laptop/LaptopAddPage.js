import React from "react";
import LaptopForm from "../../components/Laptop/LaptopForm";
import {addLaptop} from "../../services/LaptopService";
import { useNavigate } from "react-router-dom";

function LaptopAddPage(){
    const navigate=useNavigate();

    const handleAddLaptop=async(laptopData)=>{
        try {
            await addLaptop(laptopData);
            alert("Laptop added successfully!");
            navigate("/laptops"); // Redirect to the list page
        } catch (error) {
            console.error("Failed to add laptop:", error);
            alert("Failed to add laptop. Please try again.");
        }
    };

    return(
        <div>
            <h1>
                Add Laptop
            </h1>
            <LaptopForm onSubmit={handleAddLaptop}/>
        </div>
    );
}

export default LaptopAddPage;