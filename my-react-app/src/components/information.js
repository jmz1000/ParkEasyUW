import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../index';  

const Information = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state; 

    return (
        <div className="information-container">
            <button 
                onClick={() => navigate(-1)} 
                className="go-back-btn"
            >
                Go Back
            </button>

            <div className="information-content">
                <div className="information-text">
                <h1>{data.name}</h1>
                <p><b>Address:</b> {data.address}</p>
                <p><b>Hourly Price:</b> ${data.hour_price}</p>
                <p><b>Daily Price:</b> ${data.daily_price}</p>
                <p><b>Monthly Price:</b> ${data.monthly_price}</p>
                <p><b>Capacity:</b> {data.max_capacity}</p>
                <p><b>Handicap Spaces:</b> {data.handicap_park_count}</p>
                <p><b>Electric Chargers:</b> {data.electric_charge_count}</p>
                <p><b>Type:</b> {data.garage_or_street === "garage" ? "Garage" : "Street Parking"}</p>
                </div>
                <img 
                src={data.image} 
                alt={`${data.name}`} 
                className="information-image" 
                />
            </div>
        </div>
    );
};

export default Information;

