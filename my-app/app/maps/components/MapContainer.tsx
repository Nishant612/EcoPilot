"use client";
import { useEffect, useRef, useState } from "react";
import { PlaceInfo } from "./types";

interface MapContainerProps {
  onReady: (map: google.maps.Map, location: google.maps.LatLng) => void;
  selectedPlace?: PlaceInfo;
  directions?: google.maps.DirectionsResult;
}

export default function MapContainer({ onReady, selectedPlace, directions }: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const selectedMarkerRef = useRef<google.maps.Marker | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);

  useEffect(() => {
    // ✅ Only run if mapRef.current exists and map isn’t initialized
    if (!mapRef.current || map) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        // ✅ Assert non-null for TypeScript
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
      () => alert("Please allow location access.")
    );
  }, [mapRef, map, onReady]);

  // Update selected place marker
  useEffect(() => {
    if (!map || !selectedPlace?.location) return;

    map.panTo(selectedPlace.location);
    map.setZoom(16);

    if (selectedMarkerRef.current) selectedMarkerRef.current.setMap(null);

    selectedMarkerRef.current = new google.maps.Marker({
      map,
      position: selectedPlace.location,
      title: selectedPlace.name,
      animation: google.maps.Animation.DROP,
    });
  }, [selectedPlace, map]);

  // Render directions
  useEffect(() => {
    if (!map || !directions) return;

    if (directionsRendererRef.current) directionsRendererRef.current.setMap(null);

    const renderer = new google.maps.DirectionsRenderer({
      map,
      directions,
      suppressMarkers: false,
    });
    directionsRendererRef.current = renderer;
  }, [directions, map]);

  return <div ref={mapRef} className="flex-1 h-[80vh] md:h-auto rounded-xl shadow-lg" />;
}
