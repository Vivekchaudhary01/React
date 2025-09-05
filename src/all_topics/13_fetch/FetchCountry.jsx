import React, { useEffect, useState } from 'react'

const FetchCountry = () => {
    const [countries, setCountries]=useState([]);

    async function getCountries() {
        let response= await fetch("https://xcountries-backend.azurewebsites.net/all");
        let data= await response.json();
        console.log(data);
        setCountries(data);
    }

    useEffect(()=>{
        getCountries();
    },[])

  return (
    <div>
            <h1> Fetch Countries </h1>
            {/* {display:"grid",gridTemplateColumns:"repeat(4,1fr"} */}
            <section style={{display:"flex", flexWrap:"wrap",gap:"30px", textAlign:"center"}}>
                {   countries.length == 0 ? (<h3>Loading .....</h3>) :
                    (countries.map((country,idx) => {
                            return (
                                <div key={idx} style={{border:"1px solid black",maxWidth:"150px"}}>
                                    <img src={country.flag} alt={country.abbr} height={100} width={100} />
                                    <h2>{country.name}</h2>
                                </div>
                            );
                        })
                    )
                }
            </section>
        
    </div>
  )
}

export default FetchCountry