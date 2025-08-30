"use client";
import { useRef, useState } from "react";
import { PlaceInfo } from "./types";

export function useNearbyPlaces(map?: google.maps.Map) {
  const [parkingList, setParkingList] = useState<PlaceInfo[]>([]);
  const [chargingList, setChargingList] = useState<PlaceInfo[]>([]);
  const markersRef = useRef<google.maps.Marker[]>([]);

  const clearMarkers = () => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  };

  const findNearbyPlaces = (location: google.maps.LatLng) => {
    if (!map) return;
    clearMarkers();

    const service = new google.maps.places.PlacesService(map);
    const distanceService = new google.maps.DistanceMatrixService();

    const fetchPlaces = (
      keyword: string,
      setList: (p: PlaceInfo[]) => void,
      iconUrl: string,
      withCharges?: boolean
    ) => {
      service.nearbySearch(
        { location, radius: 5000, keyword },
        (results, status) => {
          if (status !== "OK" || !results) {
            setList([]);
            return;
          }

          const top = results.slice(0, 5);
          top.forEach((place) => {
            if (place.geometry?.location) {
              const marker = new google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name,
                icon: iconUrl,
              });
              markersRef.current.push(marker);
            }
          });

          distanceService.getDistanceMatrix(
            {
              origins: [location],
              destinations: top.map(
                (p) => p.geometry?.location as google.maps.LatLng
              ),
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (response, dsStatus) => {
              if (dsStatus === "OK" && response && response.rows[0].elements) {
                const newList: PlaceInfo[] = top.map((place, i) => ({
                  name: place.name || "Unknown",
                  distance:
                    response.rows[0].elements[i].distance?.text || "N/A",
                  charges: withCharges
                    ? place.price_level
                      ? `$${place.price_level * 2} approx`
                      : "Not Available"
                    : undefined,
                  location: place.geometry?.location,
                }));
                setList(newList);
              } else {
                setList([]);
              }
            }
          );
        }
      );
    };

    fetchPlaces(
      "parking",
      setParkingList,
      "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      true
    );

    fetchPlaces(
      "EV charging station",
      setChargingList,
      "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
    );
  };

  return { parkingList, chargingList, findNearbyPlaces, clearMarkers };
}
