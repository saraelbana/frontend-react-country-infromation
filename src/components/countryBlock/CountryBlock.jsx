function CountryBlock({country}){
    return (
        <div>
            <img src= {country.flag} alt = {country.name} />
            <h2>{country.name}</h2>
            <p>Has a population of: {country.population}</p>
        </div>
    )
}
export default CountryBlock;