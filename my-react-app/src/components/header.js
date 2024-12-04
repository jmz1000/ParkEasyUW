import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");  
    };

    const goToAbout = () => {
        navigate("/about");  
    };

    return (
        <header className="app-header">
            <h1 onClick={goToHome} style={{ cursor: 'pointer' }}>ParkEasyUW</h1>
            <div className="button-group">
                <h2 onClick={goToHome} className="about-home">Home</h2>
                <h2 onClick={goToAbout} className="about-button">About</h2>
                
            </div>
        </header>
    );
}

export default Header;

