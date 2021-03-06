import React, { useState } from 'react';
import { Redirect } from "react-router-dom";


function Header() {
    const [searchValue, setSerachValue] = useState('');

    const handleSearchValue = e => {
        setSerachValue(e.target.value);
    };
    const handleSearchSubmit = e =>  {
        e.preventDefault();
        <Redirect to="/search/" />

    };
    return (
        <header className="header-bar">
            <div>
                <h1 className="app-title">Movie app</h1>
            </div>
            <div>
                <form onSubmit={handleSearchSubmit}>
                    <input
                    className="search-inpt" 
                    type="text"
                    value={searchValue}
                    onChange={handleSearchValue}
                    placeholder="Search movies, shows"
                    />
                </form>
            </div>
        </header>
)};


export default Header;
