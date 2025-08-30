"use client";
import { useState } from "react";
import { PlaceInfo } from "./types";

export function useDirections(map?: google.maps.Map) {
  const [directionsResult, setDirectionsResult] = useState<google.maps.DirectionsResult | null>(null);

  const findRoute = async (origin: google.maps.LatLng, destination: google.maps.LatLng) => {
    if (!map || !google.maps.DirectionsService) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
        drivingOptions: {
          departureTime: new Date(),
          trafficModel: "BEST_GUESS", // minimizes traffic
        },
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirectionsResult(result);

          // render on map
          const directionsRenderer = new google.maps.DirectionsRenderer({
            map,
            directions: result,
            suppressMarkers: false,
          });
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );
  };

  return { directionsResult, findRoute };
}
