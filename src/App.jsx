import React, { useState } from 'react';

function App() {
    const [query, setQuery] = useState('');
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setselectedAddress] = useState(null);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const FIND_ENDPOINT = process.env.REACT_APP_FIND_ENDPOINT;


    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 1) {
            try {
                const url = `${FIND_ENDPOINT}?Key=${API_KEY}&Text=${value}&IsMiddleware=False&Container=&Countries=GB`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAddresses(data.Items);
            } catch (error) {
                console.log(error);
            }
        } else {
            setAddresses([]);
        }
    };

    const handleSelectAddress = (address) => {
        setselectedAddress(address);
        setQuery('');
        setAddresses([]);
    };

    const handleRemoveAddress = () => {
        setselectedAddress(null);
    };

    return (
        <>
            {!selectedAddress ? (
                <>
                    <div className="search-container">
                        <input type="search" value={query} className="input" placeholder="Enter Address" onChange={handleSearch} autoComplete="off" />
                    </div>
                    {addresses.length > 0 && (
                        <ul className="search-wrap">
                            {addresses.map((address, index) => (
                                <li key={index} onClick={() => handleSelectAddress(address)} className="search-result">
                                    {address.Text},{address.Description}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <div className="address-card">
                    <div className="address-text">
                        {selectedAddress.Text}
                    </div>
                    <div className="address-desc">
                        {selectedAddress.Description}
                    </div>
                </div>
            )}
        </>
    );
};

export default App;

