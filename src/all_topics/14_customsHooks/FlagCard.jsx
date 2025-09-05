import React from 'react'

const FlagCard = ({country}) => {
  return (
    <div>
        <img src={country.flag} alt={country.abbr} height={100} width={100} />
        <h2>{country.name}</h2>
    </div>
  )
}

export default FlagCard;