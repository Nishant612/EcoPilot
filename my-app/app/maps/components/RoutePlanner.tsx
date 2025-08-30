"use client";

import { useState } from "react";

interface RoutePlannerProps {
  currentLocation: { lat: number; lng: number };
  findShortestPath: (from: { lat: number; lng: number }, to: { lat: number; lng: number }) => void;
  googleMapsApiKey: string;
}

const RoutePlanner: React.FC<RoutePlannerProps> = ({ currentLocation, findShortestPath, googleMapsApiKey }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const geocodeAddress = async (address: string) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsApiKey}`
    );
    const data = await response.json();
    if (data.status === "OK" && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error("Unable to geocode address: " + address);
    }
  };

  const handleSearch = async () => {
    try {
      const fromCoords = from.trim() === "" ? currentLocation : await geocodeAddress(from);
      if (!to.trim()) {
        alert("Please enter a destination!");
        return;
      }
      const toCoords = await geocodeAddress(to);
      findShortestPath(fromCoords, toCoords);
    } catch (error) {
      alert("Error finding route: " + error);
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-4">
      <h2 className="text-lg font-semibold mb-2">Find Best Route</h2>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="From (leave empty for current location)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Search Route
        </button>
      </div>
    </div>
  );
};

export default RoutePlanner;
