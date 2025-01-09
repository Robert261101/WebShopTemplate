import React, { useState } from 'react';
import '../../styles/CalculatorForm.css';

function TelevizorForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        model: '',
        pret: '',
        producator: '',
        dimensiuneDiagonala: '',
        tehnologieDisplay: '',
        claritateImagine: '',
        clasaEnergetica: '',
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
        <form className="televizor-form" onSubmit={handleSubmit}>
            <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" required />
            <input type="text" name="producator" value={formData.producator} onChange={handleChange} placeholder="Producator" required />
            <input type="number" name="pret" value={formData.pret} onChange={handleChange} placeholder="Preț" required />
            <input type="number" name="dimensiuneDiagonala" value={formData.dimensiuneDiagonala} onChange={handleChange} placeholder="Dimensiune Diagonala" required />
            <input type="text" name="tehnologieDisplay" value={formData.tehnologieDisplay} onChange={handleChange} placeholder="Tehnologie Display" required />
            <input type="text" name="claritateImagine" value={formData.claritateImagine} onChange={handleChange} placeholder="Claritate Imagine" required />
            <input type="text" name="clasaEnergetica" value={formData.clasaEnergetica} onChange={handleChange} placeholder="Clasa Energetica" required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TelevizorForm;
