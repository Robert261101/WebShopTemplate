import React from "react";
import { Link } from "react-router-dom";  // Importă Link pentru navigare

function HomePage() {
    return (
        <div style={styles.pageContainer}>
            <h1>Bine ai venit la Magazinul Nostru!</h1>
            <p>Accesează lista de dispozitivelor și gestionează-le ușor.</p>
            <Link to="/calculators" style={styles.button1}>
                Vezi Lista de Calculatoare
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/laptops" style={styles.button2}>
                Vezi Lista de Laptopuri
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/monitors" style={styles.button1}>
                Vezi Lista de Monitoare
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/telephones" style={styles.button2}>
                Vezi Lista de Telefoane
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/televizoare" style={styles.button1}>
                Vezi Lista de Televizoare
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
    button1: {
        display: "inline-block",
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#73c600",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        fontSize: "16px"
    },

    button2: {
        display: "inline-block",
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#66af00",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        fontSize: "16px"
    }
};

export default HomePage;
