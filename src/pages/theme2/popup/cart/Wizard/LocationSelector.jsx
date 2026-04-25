import React, { useState } from "react";
import { FaMapMarkerAlt, FaCrosshairs } from "react-icons/fa";
import {
  LocationContainer,
  LocationButton,
  LocationDisplay,
  LocationText,
  LocationCoordinates,
  MapLink,
  ErrorMessage,
} from "./LocationSelectorStyles";

export default function LocationSelector({
  onLocationSelect,
  selectedLocation,
  hasError,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setIsLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location = {
          latitude,
          longitude,
          address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
        };

        // Reverse geocode to get address (optional - can be enhanced with Google Geocoding API)
        onLocationSelect(location);
        setIsLoading(false);
      },
      (err) => {
        setError("Unable to retrieve your location. Please try again.");
        setIsLoading(false);
        console.error("Geolocation error:", err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const openGoogleMaps = () => {
    if (selectedLocation) {
      const url = `https://www.google.com/maps?q=${selectedLocation.latitude},${selectedLocation.longitude}`;
      window.open(url, "_blank");
    } else {
      // Open Google Maps for location selection
      const url = `https://www.google.com/maps/search/?api=1`;
      window.open(url, "_blank");
    }
  };

  return (
    <LocationContainer>
      <LocationButton
        type="button"
        onClick={getCurrentLocation}
        disabled={isLoading}
        variant="current"
      >
        <FaCrosshairs />
        {isLoading ? "Getting Location..." : "Use Current Location"}
      </LocationButton>

      <LocationButton
        type="button"
        onClick={openGoogleMaps}
        variant="select"
      >
        <FaMapMarkerAlt />
        {selectedLocation ? "View on Map" : "Select on Map"}
      </LocationButton>

      {selectedLocation && (
        <LocationDisplay>
          <LocationText>Selected Location:</LocationText>
          <LocationCoordinates>
            {selectedLocation.address || `${selectedLocation.latitude}, ${selectedLocation.longitude}`}
          </LocationCoordinates>
          {selectedLocation.latitude && selectedLocation.longitude && (
            <MapLink
              href={`https://www.google.com/maps?q=${selectedLocation.latitude},${selectedLocation.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </MapLink>
          )}
        </LocationDisplay>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {hasError && !selectedLocation && (
        <ErrorMessage>Please select a location</ErrorMessage>
      )}
    </LocationContainer>
  );
}

