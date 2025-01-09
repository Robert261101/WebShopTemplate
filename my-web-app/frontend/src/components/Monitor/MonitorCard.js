import React from 'react';
import '../../styles/CalculatorCard.css';

function MonitorCard({ monitor, onEdit, onDelete }) {
    return (
        <div className="monitor-card">
            <h3>{monitor.model}</h3>
            <p>Producator: {monitor.producator}</p>
            <p>Preț: {monitor.pret} RON</p>
            <p>Dimensiune Diagonala: {monitor.dimensiuneDiagonala}</p>
            <p>Rata Refresh: {monitor.rataRefresh}</p>
            <div className="monitor-card-actions">
                <button onClick={() => onEdit(monitor.id)}>Edit</button>
                <button onClick={() => onDelete(monitor.id)}>Delete</button>
            </div>
        </div>
    );
}

export default MonitorCard;
