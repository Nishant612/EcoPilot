"use client";
import { useEffect, useRef, useState } from "react";
import { PlaceInfo } from "./types";

interface Props {
  onReady: (map: google.maps.Map, location: google.maps.LatLng) => void;
  selectedPlace?: PlaceInfo;
}

export default function MapContainer({ onReady, selectedPlace }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const selectedMarkerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    // ✅ Only run once when ref is set and map not yet created
    if (!mapRef.current || map) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLocation = new google.maps.LatLng(
          pos.coords.latitude,
          pos.coords.longitude
        );

        // ✅ Assert mapRef.current is HTMLDivElement
        const googleMap = new google.maps.Map(mapRef.current as HTMLDivElement, {
          center: userLocation,
          zoom: 14,
        });

        setMap(googleMap);

        new google.maps.Marker({
          map: googleMap,
          position: userLocation,
          title: "Your Location",
          icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        });

        onReady(googleMap, userLocation);
      },
      () => {
        alert("Could not detect location. Please allow location access.");
      }
    );
  }, [map, onReady]);

  useEffect(() => {
    if (!map || !selectedPlace?.location) return;

    map.panTo(selectedPlace.location);
    map.setZoom(16);

    if (selectedMarkerRef.current) {
      selectedMarkerRef.current.setMap(null);
    }

    selectedMarkerRef.current = new google.maps.Marker({
      map,
      position: selectedPlace.location,
      title: selectedPlace.name,
      animation: google.maps.Animation.DROP,
    });
  }, [selectedPlace, map]);

  return (
    <div
      ref={mapRef}
      className="flex-1 h-[80vh] md:h-auto rounded-xl shadow-lg"
    />
  );
}
