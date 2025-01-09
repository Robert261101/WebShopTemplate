import React from 'react';
import '../../styles/CalculatorCard.css';

function TelevizorCard({ televizor, onEdit, onDelete }) {
    return (
        <div className="televizor-card">
            <h3>{televizor.model}</h3>
            <p>Producator: {televizor.producator}</p>
            <p>Preț: {televizor.pret} RON</p>
            <p>Dimensiune Diagonala: {televizor.dimensiuneDiagonala}</p>
            <p>Tehnologie Display: {televizor.tehnologieDisplay}</p>
            <p>Clariatate Imagine: {televizor.claritateImagine}</p>
            <p>Clasa Energetica: {televizor.clasaEnergetica}</p>
            <div className="televizor-card-actions">
                <button onClick={() => onEdit(televizor.id)}>Edit</button>
                <button onClick={() => onDelete(televizor.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TelevizorCard;
