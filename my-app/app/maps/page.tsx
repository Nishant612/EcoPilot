"use client";
import { useState } from "react";
import { useGoogleMaps } from "./components/useGoogleMaps";
import { useNearbyPlaces } from "./components/useNearbyPlaces";
import MapContainer from "./components/MapContainer";
import PlacesPanel from "./components/placesPanel";
import { PlaceInfo } from "./components/types";
import { useDirections } from "./components/useDirections";
import RoutePlanner from "./components/RoutePlanner";

export default function MapsPage() {
  const loaded = useGoogleMaps();
  const [map, setMap] = useState<google.maps.Map>();
  const [selectedPlace, setSelectedPlace] = useState<PlaceInfo>();
  const { parkingList, chargingList, findNearbyPlaces } = useNearbyPlaces(map);
  const { directionsResult, findRoute } = useDirections(map);

  if (!loaded) return <p className="p-6">Loading Google Maps...</p>;

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800">
      <PlacesPanel
        parkingList={parkingList}
        chargingList={chargingList}
        onSelect={(place) => {
          setSelectedPlace(place);
          if (map) {
            navigator.geolocation.getCurrentPosition((pos) => {
              const origin = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
              if (place.location) findRoute(origin, place.location);
            });
          }
        }}
      />
      <RoutePlanner
        currentLocation={mapCurrentLocation} 
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        findShortestPath={(fromCoords, toCoords) => {
            // Your logic to draw the route on Google Maps
            console.log("From:", fromCoords, "To:", toCoords);
        }}
        />


      <MapContainer
        onReady={(m, loc) => {
          setMap(m);
          findNearbyPlaces(loc);
        }}
        selectedPlace={selectedPlace}
        directions={directionsResult || undefined}
      />
    </main>
  );
}
