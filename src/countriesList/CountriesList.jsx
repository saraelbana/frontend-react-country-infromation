import getCountriesData from "../getCountriesDataHelper.js";
import CountryBlock from "../countryBlock/CountryBlock.jsx";
import {useState, useEffect} from "react";
function CountriesList(){
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getCountriesData();
            setCountries(data);
        };

        fetchData();
    }, []);
    console.log(countries);
    return(<ul>
            {
                countries.map((country) =>
                    <li key = {country.name}>
                        <CountryBlock country={country}/>
                    </li>)
            }
    </ul>);
}
export default CountriesList;