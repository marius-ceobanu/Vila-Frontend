import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '400px'
};

const center = {
    lat: parseFloat(process.env.REACT_APP_LOCATION_LAT),
    lng: parseFloat(process.env.REACT_APP_LOCATION_LNG)
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const marker = {lat: parseFloat(process.env.REACT_APP_LOCATION_LAT), lng: parseFloat(process.env.REACT_APP_LOCATION_LNG)}
    const [selected, setSelected] = useState(null);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <Marker
                key={`${marker.lat}-${marker.lng}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                    setSelected(marker);
                }}
            />
            {selected ? (
                <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => {
                        setSelected(null);
                    }}
                >
                    <div>
                        <h5>
                            Come to Vila!{" "}
                            <span role="img" aria-label="bear">
                              🐻
                            </span>
                        </h5>
                        <p>Program: </p>
                        <p>L - V : 08:00 - 16:30</p>
                        <p>S - D : 08:00 - 18:30</p>
                        <button onClick={() => window.open("https://www.google.com/maps/place/Acas%C4%83+%C3%AEn+Bucovina/@47.5302684,25.8834043,12z/data=!4m12!1m2!2m1!1sbucovina+!3m8!1s0x0:0xd6fc7b271fbfbdfe!5m2!4m1!1i2!8m2!3d47.5301738!4d25.9534444!15sCghidWNvdmluYZIBEWJlZF9hbmRfYnJlYWtmYXN0")}>Find us!</button>
                    </div>
                </InfoWindow>
            ) : null}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map);