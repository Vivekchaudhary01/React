import React from 'react'
import { useAPI } from './customHooks'
import FlagCard from './FlagCard';

const Flags = () => {

    let flagData = useAPI("https://xcountries-backend.azurewebsites.net/all");

    console.log(flagData);
    return (

        <div>
            <h1>Flags</h1>
            <section>
                {flagData.length == 0 ? <h1>Loading...</h1>
                    : flagData.map((country, idx) => {
                        return <FlagCard key={idx} country={country}/>
                    })}
            </section>
        </div>

    )
}

export default Flags