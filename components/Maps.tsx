"use client";

import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { SearchData } from "@/actions/fetchSearchData";

type ViewState = {
  longitude: number;
  latitude: number;
  zoom: number;
};

interface MapsProps {
  searchResults: SearchData[];
}

const Maps = ({ searchResults }: MapsProps) => {
  const [selectedLocation, setSelectedLocation] = useState<SearchData | null>(null);

  // Extract coordinates from searchResults
  const coordinates = searchResults
    .filter((result) => result.long !== undefined && result.lat !== undefined)
    .map((result) => ({
      longitude: result.long!,
      latitude: result.lat!,
    }));

  // Calculate the center of the map based on the coordinates
  const center = getCenter(coordinates) || {
    latitude: 37.7577,
    longitude: -122.4376,
  };

  // Initial viewport centered on the calculated center
  const [viewport] = useState<ViewState>({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 16, // Closer zoom level for a detailed view
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        initialViewState={viewport}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/anti08/clzogggrv007v01pb5jtn9q1i"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_KEY}
      >
        {searchResults.map((result) => (
          <div key={result.long!}>
            <Marker longitude={result.long!} latitude={result.lat!}>
              <div
                style={{
                  fontSize: "24px",
                  color: "red",
                  transform: "translate(-50%, -50%)", // Center the marker
                }}
              >
                <p
                  role="img"
                  onClick={() => setSelectedLocation(result)}
                  className="cursor-pointer text-2xl animate-bounce"
                  aria-label="push-pin"
                >
                  📌
                </p>
              </div>
            </Marker>
            {selectedLocation?.long === result.long && selectedLocation?.lat === result.lat && (
              <Popup
                onClose={() => setSelectedLocation(null)}
                closeOnClick={true}
                latitude={result.lat!}
                longitude={result.long!}
              >
                {result.title}
              </Popup>
            )}
          </div>
        ))}
      </Map>
    </div>
  );
};

export default Maps;
