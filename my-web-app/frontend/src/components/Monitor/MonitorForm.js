import React, { useState } from 'react';
import '../../styles/CalculatorForm.css';

function MonitorForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        model: '',
        producator: '',
        pret: '',
        dimensiuneDiagonala: '',
        rataRefresh: '',
        ...initialData,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="monitor-form" onSubmit={handleSubmit}>
            <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" required />
            <input type="text" name="producator" value={formData.producator} onChange={handleChange} placeholder="Producator" required />
            <input type="number" name="pret" value={formData.pret} onChange={handleChange} placeholder="Preț" required />
            <input type="number" name="dimensiuneDiagonala" value={formData.dimensiuneDiagonala} onChange={handleChange} placeholder="Dimensiune diagonala" required />
            <input type="number" name="rataRefresh" value={formData.rataRefresh} onChange={handleChange} placeholder="Rata refresh" required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default MonitorForm;
