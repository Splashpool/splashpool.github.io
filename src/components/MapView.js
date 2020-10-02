import map from "../map.png"; // relative path to image
import React, { useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// for using maps you need to install ->  npm install mapbox-gl --save
// install for search feild  -> npm install --save @mapbox/mapbox-gl-geocoder

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuYWVzcGxhc2giLCJhIjoiY2tmYTlwMWpmMHR0cDJ0cHAyOHZhd3V0MSJ9.PmRGRrM4p1wgKavJKm-56A'


const MapView = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.9876, 51.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons) and geolocate user
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default MapView;