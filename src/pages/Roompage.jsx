import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import navbar from "./Navbar";
import Navbar from "./Navbar";

const roomsData = [
    { id: 1, name: "Luxury Suite", category: "Suite", price: 500, stars: 5 },
    { id: 2, name: "Deluxe Room", category: "Deluxe", price: 300, stars: 4 },
    { id: 3, name: "Standard Room", category: "Standard", price: 150, stars: 3 },
    { id: 4, name: "Economy Room", category: "Economy", price: 100, stars: 2 },
    { id: 5, name: "Premium Suite", category: "Suite", price: 450, stars: 5 },
];

const Roompage = () => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState(
        new URLSearchParams(location.search).get("search") || ""
    );

    const filteredRooms = roomsData.filter((room) =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div>
             <Navbar/>
            </div>
            <div className="p-5">
                <h1 className="text-2xl font-bold mb-5">Available Rooms</h1>
                {filteredRooms.length > 0 ? (
                    filteredRooms.map((room) => (
                        <div key={room.id} className="p-3 border mb-3 rounded">
                            <h2 className="text-lg font-bold">{room.name}</h2>
                            <p>Category: {room.category}</p>
                            <p>Price: ${room.price}</p>
                            <p>Star Rating: {room.stars} Star</p>
                        </div>
                    ))
                ) : (
                    <p>No results found!</p>
                )}
            </div>
        </>
    );
};

export default Roompage;
