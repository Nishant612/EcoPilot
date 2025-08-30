"use client";
import { PlaceInfo } from "./types";

interface Props {
  parkingList: PlaceInfo[];
  chargingList: PlaceInfo[];
  onSelect: (place: PlaceInfo) => void;
}

export default function PlacesPanel({
  parkingList,
  chargingList,
  onSelect,
}: Props) {
  return (
    <div className="w-full md:w-1/3 bg-white p-6 shadow-lg overflow-y-auto">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        🌍 EcoPilot Nearby Finder
      </h1>

      <h2 className="text-lg font-semibold mb-2">🅿️ Parking Areas</h2>
      <ul className="space-y-2 mb-6">
        {parkingList.map((p, i) => (
          <li
            key={i}
            onClick={() => onSelect(p)}
            className="cursor-pointer p-2 bg-gray-100 rounded-lg shadow-sm flex justify-between hover:bg-gray-200"
          >
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-gray-600">{p.charges}</p>
            </div>
            <span className="text-sm text-gray-600">{p.distance}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mb-2">⚡ EV Charging</h2>
      <ul className="space-y-2">
        {chargingList.map((c, i) => (
          <li
            key={i}
            onClick={() => onSelect(c)}
            className="cursor-pointer p-2 bg-gray-100 rounded-lg shadow-sm flex justify-between hover:bg-gray-200"
          >
            <span>{c.name}</span>
            <span className="text-sm text-gray-600">{c.distance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
