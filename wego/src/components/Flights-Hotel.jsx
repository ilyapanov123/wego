import React from "react";
import airport from "../static/img/yousef-alfuhigi-bMIlyKZHKMY-unsplash.jpg";
import hotel from "../static/img/rakabtw_-M3YuHIpgmSY-unsplash.jpg";
import { useNavigate } from "react-router-dom";

function FlightsHotels() {
    const navigate = useNavigate();

    const handleSearch = () => {

        navigate("/hotels");
    };

    const handleSearch2 = () => {
        navigate("/flights");
    };

    return (
        <div className="flights-hotels-flex">
            <div className="airport-img">
                <img src={airport} className="airport-hotel-img" alt="airport" />
                <h2 className="airport-hotel-text">Flights</h2>
                <h3 className="search-airport-hotel-text">Search Flights & Places Hire to our most popular <br/>destinations</h3>
                <button className="show-button" onClick={handleSearch2}>Show Flights</button>
            </div>

            <div className="hotels-img">
                <img src={hotel} className="airport-hotel-img" alt="hotel" />
                <h2 className="airport-hotel-text">Hotels</h2>
                <h3 className="search-airport-hotel-text">Search hotels & Places Hire to our most popular <br />destinations</h3>
                <button className="show-button" onClick={handleSearch}>Show Hotels</button>
            </div>
        </div>
    );
}

export default FlightsHotels;