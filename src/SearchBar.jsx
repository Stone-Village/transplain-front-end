import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Seach"
            value={query}
            onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;