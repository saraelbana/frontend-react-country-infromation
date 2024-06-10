import './App.css';
import MapHolder from "./mapHolder/MapHolder.jsx";
import fetchCountries from "./app.js";
function App() {

    const countries = fetchCountries();
    return (
        <>
            <MapHolder className = "mapHolder"/>
            <h1>
                world Regions
            </h1>
        </>
    )
}

export default App
