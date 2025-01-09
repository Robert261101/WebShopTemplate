import React, { useState } from 'react';
import '../../styles/CalculatorForm.css';

function TelefonForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        model: '',
        producator: '',
        pret: '',
        dimensiuneDiagonala: '',
        memorieInterna: '',
        memorieRAM: '',
        sistemOperare: '',
        culoare: '',
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
        <form className="telefon-form" onSubmit={handleSubmit}>
            <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" required />
            <input type="text" name="producator" value={formData.producator} onChange={handleChange} placeholder="Producator" required />
            <input type="number" name="pret" value={formData.pret} onChange={handleChange} placeholder="Preț" required />
            <input type="number" name="dimensiuneDiagonala" value={formData.dimensiuneDiagonala} onChange={handleChange} placeholder="Dimensiune Diagonala" required />
            <input type="number" name="memorieInterna" value={formData.memorieInterna} onChange={handleChange} placeholder="Memorie Interna" required />
            <input type="number" name="memorieRAM" value={formData.memorieRAM} onChange={handleChange} placeholder="Memorie RAM" required />
            <input type="text" name="sistemOperare" value={formData.sistemOperare} onChange={handleChange} placeholder="Sistem Operare" required />
            <input type="text" name="culaore" value={formData.culoare} onChange={handleChange} placeholder="Culoare" required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TelefonForm;
