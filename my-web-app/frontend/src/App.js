import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalculatorListPage from "./pages/Calculator/CalculatorListPage";
import CalculatorAddPage from "./pages/Calculator/CalculatorAddPage";
import CalculatorEditPage from "./pages/Calculator/CalculatorEditPage";
import LaptopListPage from  "./pages/Laptop/LaptopListPage";
import LaptopAddPage from "./pages/Laptop/LaptopAddPage";
import LaptopEditPage from "./pages/Laptop/LaptopEditPage";

import MonitorListPage from "./pages/Monitor/MonitorListPage";
import MonitorAddPage from "./pages/Monitor/MonitorAddPage";
import MonitorEditPage from "./pages/Monitor/MonitorEditPage";

import TelefonListPage from "./pages/Telefon/TelefonListPage";
import TelefonAddPage from "./pages/Telefon/TelefonAddPage";
import TelefonEditPage from "./pages/Telefon/TelefonEditPage";

import TelevizorListPage from "./pages/Televizor/TelevizorListPage";
import TelevizorAddPage from "./pages/Televizor/TelevizorAddPage";
import TelevizorEditPage from "./pages/Televizor/TelevizorEditPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/calculators" element={<CalculatorListPage />} />
                <Route path="/calculators/add" element={<CalculatorAddPage />} />
                <Route path="/calculators/edit/:id" element={<CalculatorEditPage />} />

                <Route path="/laptops" element={<LaptopListPage />} />
                <Route path="/laptops/add" element={<LaptopAddPage />} />
                <Route path="/laptops/edit/:id" element={<LaptopEditPage />} />
                
                <Route path="/monitors" element={<MonitorListPage />} />
                <Route path="/monitors/add" element={<MonitorAddPage />} />
                <Route path="/monitors/edit/:id" element={<MonitorEditPage />} />
                
                <Route path="/telephones" element={<TelefonListPage />} />
                <Route path="/telephones/add" element={<TelefonAddPage />} />
                <Route path="/telephones/edit/:id" element={<TelefonEditPage />} />
                
                <Route path="/televizoare" element={<TelevizorListPage />} />
                <Route path="/televizoare/add" element={<TelevizorAddPage />} />
                <Route path="/televizoare/edit/:id" element={<TelevizorEditPage />} />
                
            </Routes>
        </Router>
    );
}

export default App;
