import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ position }) {
  return (
    <>
      <MapContainer
        className="leaflet-container"
        center={[53.5761629822869, 10.004642333165153]}
        zoom={11.2}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position.map((singlePosition, index) => (
          <Marker key={index} position={singlePosition}>
            <Popup>Hier ist der Standort.</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default Map;
