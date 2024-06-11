import axios from 'axios';

async function callRestCountriesAPI() {
    try {
        const response =  await axios.get('https://restcountries.com/v3.1/all');
        return  response.data;
    }catch (error){
        console.error(error);
        console.log('Error fetching data');
        return[];
    }
}
async function getCountriesData(){
   try {
       const fetchedCountriesData = await callRestCountriesAPI();
       let countriesData = filterFetchedCountriesData(fetchedCountriesData);
       return countriesData;
   }
   catch (error){
       console.error(error);
       console.log('Error fetching data');
       return [];
   }
}
function filterFetchedCountriesData(fetchedCountriesData){
    let countriesData = [];
    fetchedCountriesData.map((country) => {
        let obj = {
            name: country.name.common,
            flag: country.flags.png,
            region: country.region,
            population: country.population,
        }
        countriesData.push(obj);
    });
    return countriesData;
}

export default getCountriesData;
