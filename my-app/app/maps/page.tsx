"use client";
import { useState } from "react";
import { useGoogleMaps } from "./components/useGoogleMaps";
import { useNearbyPlaces } from "./components/useNearbyPlaces";
import MapContainer from "./components/MapContainer";
import PlacesPanel from "./components/placesPanel";
import { PlaceInfo } from "./components/types";

export default function MapsPage() {
  const loaded = useGoogleMaps();
  const [map, setMap] = useState<google.maps.Map>();
  const [selectedPlace, setSelectedPlace] = useState<PlaceInfo>();
  const { parkingList, chargingList, findNearbyPlaces } = useNearbyPlaces(map);

  if (!loaded) return <p className="p-6">Loading Google Maps...</p>;

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800">
      <PlacesPanel
        parkingList={parkingList}
        chargingList={chargingList}
        onSelect={setSelectedPlace}
      />
      <MapContainer
        onReady={(m, loc) => {
          setMap(m);
          findNearbyPlaces(loc);
        }}
        selectedPlace={selectedPlace}
      />
    </main>
  );
}
