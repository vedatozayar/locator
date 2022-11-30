import './App.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from 'react';
import Markers from './components/Markers';
import CardList from './components/CardList';
import useHeroesData from './hooks/useHeroesData';
import Information from './components/Information';

function App() {
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const data = useHeroesData();

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    var R = 6378.137; // Radius of earth in KM
    var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
    var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // km
  };

  useEffect(() => {
    const distance = data.map((hero) => {
      return calculateDistance(
        location?.lat,
        location?.lng,
        hero?.lat,
        hero?.long
      );
    });

    setDistance(distance);
  }, [location, data]);

  //Click events
  const ClickHandler = () => {
    const map = useMapEvents({
      click(e) {
        setLocation(e.latlng);
      },
    });
    return location == null ? null : (
      <Marker position={[location.lat, location.lng]}></Marker>
    );
  };

  return (
    <>
      <MapContainer center={[62, 22]} zoom={4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ClickHandler />
        <Markers data={data} />
      </MapContainer>
      {location ? (
        <CardList data={data} distance={distance} />
      ) : (
        <Information />
      )}
    </>
  );
}

export default App;
