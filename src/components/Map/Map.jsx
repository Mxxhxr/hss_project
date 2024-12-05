import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const IndiaMap = () => {
  const [geoData, setGeoData] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Fetch the GeoJSON file
    fetch('../india.geojson')
      .then(response => response.json())
      .then(data => setGeoData(data));
  }, []);


  const handleStateClick = (stateName) => {
    console.log("Navigating to:", stateName); // Debugging log
    navigate(`/state/${encodeURIComponent(stateName)}`); // Use encodeURIComponent to handle special characters
  };

  return (
    <div>
      {geoData ? (
        <ComposableMap
            projectionConfig={{
              scale: 600,
              center: [80, 11],
            }}
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#ffffff"
                stroke="#000000"
                strokeWidth={0.5}
                onClick={() => {
                    console.log("Geo properties:", geo.properties); // Debug log
                    handleStateClick(geo.properties.ST_NM); // Correct property
                }}
                />

              ))
            }
          </Geographies>
        </ComposableMap>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default IndiaMap;
