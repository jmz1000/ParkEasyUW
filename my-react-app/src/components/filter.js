import React, { useState } from "react";

function Filter({ filters, setFilters, cleanData, setData }) {
    const [selected] = useState(false);

    const getPriceRange = () => {
        switch (filters.priceType) {
            case "hour":
                return { min: 0, max: 50 };
            case "daily":
                return { min: 0, max: 100 };
            case "monthly":
                return { min: 0, max: 500 };
            default:
                return { min: 0, max: 50 };
        }
    };

    const { min: priceMin, max: priceMax } = getPriceRange();

    const handleFilterChange = (key, value) => {
        const updatedFilters = { ...filters, [key]: value };
        setFilters(updatedFilters);

        let filteredData = cleanData;

        if (!updatedFilters.viewAll) {
            if (updatedFilters.garage) {
                filteredData = filteredData.filter(item => item.garage_or_street === "garage");
            } else if (updatedFilters.street) {
                filteredData = filteredData.filter(item => item.garage_or_street === "street");
            }

            if (updatedFilters.wheelchairAcc) {
                filteredData = filteredData.filter(item => item.wheelchair_acc === 'True');
            }

            if (updatedFilters.handicapParkCount) {
                filteredData = filteredData.filter(item => item.handicap_park_count > 0);
            }

            if (updatedFilters.electricCharge) {
                filteredData = filteredData.filter(item => item.electric_charge_count > 0);
            }

            if (updatedFilters.capacity > 0) {
                filteredData = filteredData.filter(item => item.max_capacity >= updatedFilters.capacity);
            }

            const priceFieldMapping = {
                hourly: "hour_price",
                daily: "daily_price",
                monthly: "monthly_price",
            };

            const priceField = priceFieldMapping[updatedFilters.priceType];
            if (updatedFilters.price > 0 && priceField) {
                filteredData = filteredData.filter(item => 
                    item[priceField] !== undefined && item[priceField] <= updatedFilters.price
                );
            }

            if (updatedFilters.timeFrom && updatedFilters.timeTo) {
                filteredData = filteredData.filter(item => 
                    item.start_time <= updatedFilters.timeFrom && 
                    item.end_time >= updatedFilters.timeTo
                );
            }
        }

        setData(filteredData);
    };

    return (
        <div className="text-filter">
            <h2>Filters:</h2>
            <div className={selected === 0 ? "content show" : "content"}>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.garage}
                        onChange={(e) => handleFilterChange("garage", e.target.checked)}
                    />
                    Garage
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.street}
                        onChange={(e) => handleFilterChange("street", e.target.checked)}
                    />
                    Street
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.wheelchairAcc}
                        onChange={(e) => handleFilterChange("wheelchairAcc", e.target.checked)}
                    />
                    Wheelchair Accessible
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.handicapParkCount}
                        onChange={(e) => handleFilterChange("handicapParkCount", e.target.checked)}
                    />
                    Handicap Parking Spots
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.electricCharge}
                        onChange={(e) => handleFilterChange("electricCharge", e.target.checked)}
                    />
                    Electric Charge Available
                </label>
                <div>
                    <label>Price:</label>
                    <select
                        value={filters.priceType}
                        onChange={(e) => handleFilterChange("priceType", e.target.value)}
                    >
                        <option value="hour">Hourly</option>
                        <option value="daily">Daily</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    <input
                        type="range"
                        min={priceMin}
                        max={priceMax}
                        value={filters.price}
                        onChange={(e) => handleFilterChange("price", Number(e.target.value))}
                    />
                    <span>${filters.price}</span>
                </div>
                <div>
                    <label>Capacity:</label>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={filters.capacity}
                        onChange={(e) => handleFilterChange("capacity", Number(e.target.value))}
                    />
                    <span>{filters.capacity} spots</span>
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        value={filters.timeFrom}
                        onChange={(e) => handleFilterChange("timeFrom", e.target.value)}
                    />
                    <input
                        type="time"
                        value={filters.timeTo}
                        onChange={(e) => handleFilterChange("timeTo", e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Filter;