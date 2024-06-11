import './App.css';
import MapHolder from "./mapHolder/MapHolder.jsx";
import CountriesList from "./countriesList/CountriesList.jsx";

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
