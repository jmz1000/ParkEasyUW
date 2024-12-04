import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';

const Map = ({ data, selectedLocation, onMarkerClick }) => {
    const uwBounds = [
        [47.643, -122.327], 
        [47.667, -122.288],
    ];

    const markersRef = useRef([]);  

    useEffect(() => {
        if (selectedLocation && markersRef.current[selectedLocation.ID]) {
            markersRef.current[selectedLocation.ID].openPopup(); 
        }
    }, [selectedLocation]);

    return (
        <MapContainer
            center={[47.6550, -122.340]}
            zoom={15}
            className="map-container"
            maxBounds={uwBounds}
            maxBoundsViscosity={1.0}
            maxZoom={18}
            minZoom={14.5}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {data.map((garage) => (
                <Marker
                    key={garage.ID}
                    position={[garage["x-coord"], garage["y-coord"]]}
                    icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                    ref={(el) => (markersRef.current[garage.ID] = el)} 
                >
                    <Popup>
                        <div className="popup-info">
                            <b>{garage.name}</b><br />
                            <i>{garage.address}</i><br />
                            <div>
                                <img 
                                    src={garage.image} 
                                    alt={garage.name} 
                                    style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover', borderRadius: '5px' }} 
                                />
                            </div>
                            <div>
                                <strong>Hourly Price:</strong> ${garage.hour_price}<br />
                                <strong>Daily Price:</strong> ${garage.daily_price}<br />
                                <strong>Monthly Price:</strong> ${garage.monthly_price}<br />
                                <button 
                                    onClick={() => onMarkerClick(garage)} 
                                    className="popup-info-button"
                                >
                                    More Information
                                </button>
                            </div>
                        </div>
                    </Popup>

                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
