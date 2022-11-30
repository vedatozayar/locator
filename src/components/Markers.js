import React from 'react';
import { Marker } from 'react-leaflet';

const Markers = ({ data }) => {
  const items = data.map((item) => (
    <Marker key={item.id} position={[item.lat, item.long]}></Marker>
  ));
  return <>{items}</>;
};

export default Markers;
