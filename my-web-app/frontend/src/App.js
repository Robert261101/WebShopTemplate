import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalculatorListPage from "./pages/Calculator/CalculatorListPage";
import CalculatorAddPage from "./pages/Calculator/CalculatorAddPage";
import CalculatorEditPage from "./pages/Calculator/CalculatorEditPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/calculators" element={<CalculatorListPage />} />
                <Route path="/calculators/add" element={<CalculatorAddPage />} />
                <Route path="/calculators/edit/:id" element={<CalculatorEditPage />} />
            </Routes>
        </Router>
    );
}

export default App;
