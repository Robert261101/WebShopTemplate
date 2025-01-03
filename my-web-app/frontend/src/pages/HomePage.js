import React from "react";
import { Link } from "react-router-dom";  // Importă Link pentru navigare

function HomePage() {
    return (
        <div style={styles.pageContainer}>
            <h1>Bine ai venit la Magazinul Nostru!</h1>
            <p>Accesează lista de dispozitivelor și gestionează-le ușor.</p>
            <Link to="/calculators" style={styles.button}>
                Vezi Lista de Calculatoare
            </Link>
            
        </div>
    );
}

// Stiluri CSS inline
const styles = {
    pageContainer: {
        textAlign: "center",
        marginTop: "50px"
    },
    button: {
        display: "inline-block",
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        fontSize: "16px"
    }
};

export default HomePage;
