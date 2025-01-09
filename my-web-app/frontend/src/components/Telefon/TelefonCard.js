import React from 'react';
import '../../styles/CalculatorCard.css';

function TelefonCard({ telephone, onEdit, onDelete }) {
    return (
        <div className="telefon-card">
            <h3>{telephone.model}</h3>
            <p>Producator: {telephone.producator}</p>
            <p>Preț: {telephone.pret} RON</p>
            <p>Dimensiune Diagonala: {telephone.dimensiuneDiagonala}</p>
            <p>Memorie Interna: {telephone.memorieInterna}</p>
            <p>Memorie RAM: {telephone.memorieRAM}</p>
            <p>Sistem de Operare: {telephone.sistemOperare}</p>
            <p>Culoare: {telephone.culoare}</p>
            <div className="telefon-card-actions">
                <button onClick={() => onEdit(telephone.id)}>Edit</button>
                <button onClick={() => onDelete(telephone.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TelefonCard;
