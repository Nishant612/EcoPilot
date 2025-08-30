"use client";
import { useEffect, useState } from "react";

export function useGoogleMaps() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("google-maps")) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);

    document.body.appendChild(script);
  }, []);

  return loaded;
}
