
import CountryBlock from "../countryBlock/CountryBlock.jsx";
import { useState, useEffect } from 'react';
import getCountriesData from "../../getCountriesDataHelper.js";


function CountriesList(){
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCountriesData();
            setCountries(data);
        };

        fetchData();
    }, []);

    //*Question Question* isn't this the same as the useEffect above?
    // I think this is the same as the useEffect above
    //because the useEffect above is a function that is called when the component is mounted
    //and the function below is a function that is called when the component is mounted
    //I think the function below is not needed
    // useEffect(() => {
    //     countries();
    // }, []);
    // const countries = async ()=>{
    //     const data = await getCountriesData();
    //     setCountries(data);
    // }

    // My code
    // const  countries = async ()=>{
    //     await getCountriesData();
    // }

    console.log(countries);
    return(<ul>
            {
                countries.map((country) =>
                    <li key = {country.name}>
                        <CountryBlock country={country}/>
                    </li>)
            }
    </ul>)
}
export default CountriesList;