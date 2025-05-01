import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

function GoogleMapComp() {
    const mapContainerStyle = {
        width: "100%",
        height: "400px"
    };
    const center = {
        lat: 37.2972,
        lng: -1.9577, 
    };
    const apiKey =   process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
        return <p>Loading map........</p>
    }
  return (
    <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom = {14}
        >
            <Marker position={center} />

        </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapComp
