import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.API_KEY;

const Map = ({ donors, center }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markers = useRef([]); 

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 12,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    
    markers.current.forEach((marker) => marker.remove());
    markers.current = [];

    if (donors.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();

      donors.forEach((donor) => {
        const el = document.createElement("div");
        el.className = "marker";
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.borderRadius = "50%";
        el.style.backgroundColor = "#dc2626";
        el.style.border = "2px solid white";

        const marker = new mapboxgl.Marker(el)
          .setLngLat([donor.location.longitude, donor.location.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div>
                <h3 class="font-bold">${donor.username}</h3>
                <p>Blood Type: ${donor.bloodtype}</p>
              </div>`
            )
          )
          .addTo(map.current);

        markers.current.push(marker);
        bounds.extend([donor.location.longitude, donor.location.latitude]);
      });

      map.current.fitBounds(bounds, { padding: 50 });
    } else {
      map.current.setCenter(center);
      map.current.setZoom(12);
    }
  }, [donors]);

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />;
};

export default Map;
