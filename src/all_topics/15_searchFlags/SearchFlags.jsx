import React, { useEffect, useState } from 'react';

const SearchFlags = () => {
    const [allCountries, setAllCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [mapQuery, setMapQuery] = useState("India"); // default location

    useEffect(() => {
        async function getCountries() {
            try {
                let response = await fetch("https://xcountries-backend.azurewebsites.net/all");
                let data = await response.json();
                setAllCountries(data);
                setCountries(data);
            } catch (err) {
                console.error("Failed to fetch countries", err);
            }
        }
        getCountries();
    }, []);

    useEffect(() => {
        if (search.trim() === "") {
            setCountries(allCountries);
        } else {
            const filteredCountries = allCountries.filter((ele) =>
                ele.name.toLowerCase().includes(search.toLowerCase())
            );
            setCountries(filteredCountries);
        }
    }, [search, allCountries]);

    return (
        <div className='bg-gray-100 min-h-screen w-full'>
            <h1 className='text-center p-4 text-3xl font-semibold'>Search Flags Task</h1>
            <form className='p-3 flex justify-center'>
                <input
                    type="search"
                    name='search'
                    id='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search here...'
                    className='bg-white border border-gray-400 rounded-2xl w-[50%] p-3'
                />
            </form>

            {/* Google Map */}
            <div className='flex justify-center'>
                <iframe
                    title="Google Map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                    width="80%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='rounded shadow-md mb-5'
                ></iframe>
            </div>

            <div className='flex flex-wrap justify-center gap-4 p-5'>
                {countries.map((country, idx) => (
                    <div
                        key={idx}
                        className='bg-white p-4 rounded shadow text-center w-40 hover:shadow-lg transition cursor-pointer'
                        title={`Click to view ${country.name} on map`}
                        onClick={() => setMapQuery(country.name)}
                    >
                        <img
                            src={country.flag}
                            alt={country.name}
                            className='w-full h-24 object-cover rounded mb-2'
                        />
                        <p className='font-medium text-gray-800'>{country.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchFlags;
