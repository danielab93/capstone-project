import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ center, position }) {
  return (
    <>
      {center.map((singleCenter, index) => (
        <MapContainer
          key={index}
          className="leaflet-container"
          center={singleCenter}
          zoom={11.5}
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
      ))}
    </>
  );
}

export default Map;
