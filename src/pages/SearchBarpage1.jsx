import React, { useState } from "react";
import Navbar from "./Navbar";
// import RoomList from "./RoomList"; // Component to display filtered results

const SearchBarpage1 = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query); // Update searchQuery state
    };

    return (
        <>
            <div className="fixed top-0 w-full z-50">
                <Navbar onSearch={handleSearch} />
            </div>
            <div className="pt-20"> {/* Add padding to avoid overlap */}
                <RoomList searchQuery={searchQuery} /> {/* Pass query to results */}
            </div>
        </>
    );
};

export default SearchBarpage1;
