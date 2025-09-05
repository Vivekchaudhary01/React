import style from "./FetchTask.module.css";
import React, { useEffect, useState } from 'react';

const FetchTask = () => {
    // State to store selected values from dropdowns
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    // State to store API data
    const [allCountries, setAllCountries] = useState([]);
    const [allStates, setAllStates] = useState([]);
    const [allCities, setAllCities] = useState([]);

    // State to enable/disable dropdowns
    const [isStateDisabled, setIsStateDisabled] = useState(true);
    const [isCityDisabled, setIsCityDisabled] = useState(true);

    // ================================
    // Fetch all countries on first render
    // ================================
    useEffect(() => {
        async function getAllCountries() {
            const resp = await fetch("https://crio-location-selector.onrender.com/countries");
            const data = await resp.json();
            setAllCountries(data);
        }
        getAllCountries();
    }, []); // runs only once on mount

    // ================================================
    // Fetch all states when a country is selected
    // ================================================
    useEffect(() => {
        if (!selectedCountry) return; // do nothing if country is not selected
        
        setIsStateDisabled(false); // enable state dropdown
        
        async function getAllStates() {
            console.log("Fetching states...");
            const resp = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`);
            const data = await resp.json();
            setAllStates(data); // update states list


            // Reset dependent dropdowns
            setSelectedState("");
            setSelectedCity("");
            setAllCities([]);
            setIsCityDisabled(true); // disable city dropdown
        }

        getAllStates();
    }, [selectedCountry]); // re-run when selectedCountry changes

    // ==================================================
    // Fetch all cities when a state is selected
    // ==================================================
    useEffect(() => {
        if (!selectedState || !selectedCountry) return; // only fetch if both are selected
        
        setIsCityDisabled(false); // enable city dropdown
        async function getAllCities() {
            console.log("Fetching cities...");
            const resp = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`);
            const data = await resp.json();
            setAllCities(data); // update city list


            // Reset city selection
            setSelectedCity("");
        }

        getAllCities();
    }, [selectedState]); // re-run when selectedState changes

    // ===============================
    // Render the component
    // ===============================
    return (
        <div className={style.FetchTaskContainer}>
            <h1>Fetch Task 1</h1>

            <section className={style.FetchTaskSectionContainer}>

                {/* Country Dropdown */}
                <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                >
                    <option value="" disabled>Select Country</option>
                    {allCountries.map((country, idx) => (
                        <option key={idx} value={country}>{country}</option>
                    ))}
                </select>

                {/* State Dropdown */}
                <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    disabled={isStateDisabled}
                >
                    <option value="" disabled>Select State</option>
                    {allStates.map((state, idx) => (
                        <option key={idx} value={state}>{state}</option>
                    ))}
                </select>

                {/* City Dropdown */}
                <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={isCityDisabled}
                >
                    <option value="" disabled>Select City</option>
                    {allCities.map((city, idx) => (
                        <option key={idx} value={city}>{city}</option>
                    ))}
                </select>

            </section>

            {/* Optional: Display selected values */}
            {selectedCountry && selectedState && selectedCity && (
                <p>You selected: {selectedCountry} → {selectedState} → {selectedCity}</p>
            )}
        </div>
    );
};

export default FetchTask;
