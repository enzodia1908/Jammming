import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css'

function SearchBar({onSearch}){

    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        if (query.trim()) {
            onSearch(query);
        } else {
            alert('Please type a query into the search bar.')
        };
    }

    return (
        <div>
            <input
                className={styles.searchBar}
                value={query}
                onChange={handleInputChange}
                placeholder='Favourite song?'/>
        
            <button 
                className={styles.button}
                onClick={handleSubmit}>Search</button>
        </div>
    );
};

export default SearchBar;

