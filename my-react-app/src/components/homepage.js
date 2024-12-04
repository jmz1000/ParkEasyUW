import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from './map.js';
import Filter from './filter.js';  
import List from './List.js';  
import { cleanData } from './data/cleaned.js';  

function HomePage() {
    const [filters, setFilters] = useState({
        viewAll: false,
        garage: false,
        street: false,
        wheelchairAcc: false,
        handicapParkCount: false,
        electricCharge: false,
        price: 0,
        priceType: "hourly",
        capacity: 0,
        timeFrom: "",
        timeTo: "",
    });

    const [data, setData] = useState(cleanData);  
    const [selectedLocation, setSelectedLocation] = useState(null);  
    const navigate = useNavigate();

    const handleMarkerClick = (garage) => {
        navigate('/information', { state: garage });
    };

    const handleLocationClick = (location) => {
        setSelectedLocation(location);  
    };

    return (
        <div className="home-container">
            <div className="filter-container">
                <Filter 
                    filters={filters} 
                    setFilters={setFilters} 
                    cleanData={cleanData} 
                    setData={setData}  
                />
            </div>
            <div className="map-container">
                <Map 
                    data={data} 
                    selectedLocation={selectedLocation}  
                    onMarkerClick={handleMarkerClick} 
                />
            </div>
            <div className="list-container">
                <List locations={data} onLocationClick={handleLocationClick} />
            </div>
        </div>
    );
}

export default HomePage;
