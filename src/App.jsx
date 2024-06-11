import './App.css';
import MapHolder from "../src/components/mapHolder/MapHolder.jsx";
import CountriesList from "../src/components/countriesList/CountriesList.jsx";

function App() {

    return (
        <>
            <MapHolder className = "map-holder"/>
            <h1 className="world-regions-title">
                world Regions
            </h1>
            <CountriesList className = "countries-list"/>
        </>
    )
}

export default App
