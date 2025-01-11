import React from 'react';
import { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
    const [localSearch, setLocalSearch] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => onSearch(localSearch), 300);
        return () => clearTimeout(timeoutId); // Cleanup la schimbarea termenului
    }, [localSearch, onSearch]);

    return (
        <input
            type="text"
            placeholder="Search..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
        />
    );
}

export default SearchBar;