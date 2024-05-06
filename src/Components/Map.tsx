import { useState, useEffect } from 'react'
import L from 'leaflet';
import mark from "../assets/marker.png";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'; // Leaflet CSS for map styling


// Merging default Leaflet icon 
const customIcon = L.icon({
    iconUrl: mark,
    iconRetinaUrl: mark,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
});

// Defining params for country data
interface Country {
    country: string;
    countryInfo: {
        _id: number;
        lat: number;
        long: number;
    };
    active: number;
    recovered: number;
    deaths: number;
}

const WorldMap = () => {
    const [countriesData, setCountriesData] = useState<Country[]>([]);

    // fetch countries data when component mounts
    useEffect(() => {
        // Function to fetch countries data
        const calToSetEffectCountries = async () => {
            const countriesApiUrl = "https://disease.sh/v3/covid-19/countries";
            const response = await fetch(countriesApiUrl);
            const dataCountry = await response.json();
            setCountriesData(dataCountry);
        };
        calToSetEffectCountries();
    }, []); // Dependency array to ensure useEffect runs only once


    return (
        <div className='p-5'>
            <h1 className="text-2xl font-bold text-[#0c0f06] mb-5">
                Total Cases Around the world
            </h1>
            <div className='h-[200px] md:h-[450px] border'>
                <MapContainer center={[20.593683, 78.962883]} zoom={4} style={{ height: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
                    {countriesData?.map((country) => (
                        <Marker
                            key={country.countryInfo._id}
                            position={[country.countryInfo.lat, country.countryInfo.long]}
                            icon={customIcon}
                        >
                            <Popup>
                                <div>
                                    <h2>{country.country}</h2>
                                    <p>
                                        Active Cases: {country.active} <br />
                                        Recovered Cases: {country.recovered} <br />
                                        Deaths: {country.deaths}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

export default WorldMap