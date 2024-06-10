import axios from 'axios';

async function fetchCountries() {
    const countriesList = await axios.get('https://restcountries.com/v3.1/all');
}