import React from 'react';
import '../../styles/CalculatorCard.css';

function CalculatorCard({ calculator, onEdit, onDelete }) {
    return (
        <div className="calculator-card">
            <h3>{calculator.model}</h3>
            <p>Preț: {calculator.pret} RON</p>
            <p>Tip Procesor: {calculator.tipProcesor}</p>
            <p>Placă Video: {calculator.placaVideo}</p>
            <p>Memorie RAM: {calculator.memorieRAM}</p>
            <p>Sistem de Operare: {calculator.sistemOperare}</p>
            <p>Tip Stocare: {calculator.tipStocare}</p>
            <div className="calculator-card-actions">
                <button onClick={() => onEdit(calculator.id)}>Edit</button>
                <button onClick={() => onDelete(calculator.id)}>Delete</button>
            </div>
        </div>
    );
}

export default CalculatorCard;
