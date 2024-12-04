import React from "react";

const List = ({ locations, onLocationClick }) => {
    return (
        <div className="location-list">
            <h2>Parking Locations</h2>
            {locations.map((location) => (
                <div
                    key={location.ID}
                    className="location-item"
                    onClick={() => onLocationClick(location)}  
                >
                    <h4>{location.name}</h4>
                    <p>{location.address}</p>
                    <p>Hourly Price: ${location.hour_price}</p>
                    <p>Capacity: {location.max_capacity} spots</p>
                    <p>Status: {location.start_time} - {location.end_time}</p>
                </div>
            ))}
        </div>
    );
};

export default List;
