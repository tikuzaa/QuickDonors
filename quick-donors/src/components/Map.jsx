import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your Mapbox access token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Map = ({ donors, center }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    const markers = document.getElementsByClassName('marker');
    while (markers[0]) {
      markers[0].remove();
    }

    // Add markers for donors
    donors.forEach((donor) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = '#dc2626';
      el.style.border = '2px solid white';

      new mapboxgl.Marker(el)
        .setLngLat([donor.location.longitude, donor.location.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              `<div>
                <h3 class="font-bold">${donor.name}</h3>
                <p>Blood Type: ${donor.bloodType}</p>
                <p>Distance: ${donor.distance?.toFixed(1)} km</p>
              </div>`
            )
        )
        .addTo(map.current);
    });
  }, [donors]);

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />;
};

export default Map;