import React from 'react';
import '../../styles/CalculatorCard.css'

function LaptopCard({ laptop, onEdit, onDelete }) {
    return (
        <div className="laptop-card">
            <h3>{laptop.model}</h3>
            <p>Producator: {laptop.producator}</p>
            <p>Preț: {laptop.pret} RON</p>
            <p>Tip Procesor: {laptop.tipProcesor}</p>
            <p>Memorie RAM: {laptop.memorieRAM}</p>
            <p>Dimensiune Diagonala: {laptop.dimensiuneDiagonala}</p>
            <p>Sistem de Operare: {laptop.sistemOperare}</p>
            <p>Tip Stocare: {laptop.tipStocare}</p>
            <div className="laptop-card-actions">
                <button onClick={() => onEdit(laptop.id)}>Edit</button>
                <button onClick={() => onDelete(laptop.id)}>Delete</button>
            </div>
        </div>
    );
}

export default LaptopCard;
