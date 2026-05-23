import React, { useState, useCallback, useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { FaCrosshairs, FaMapMarkerAlt, FaTimes, FaCheck, FaEdit } from "react-icons/fa";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const miniMapStyle = {
  width: "100%",
  height: "180px",
  borderRadius: 10,
};

const defaultCenter = { lat: 33.8938, lng: 35.5018 }; // Beirut default

export default function MapPicker({
  apiKey,
  onLocationConfirm,
  selectedLocation,
  hasError,
  theme,
  activeLanguage = "en",
}) {
  const t = (en, ar) => (activeLanguage === "ar" ? ar : en);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  const [showMap, setShowMap] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(
    selectedLocation
      ? { lat: selectedLocation.latitude, lng: selectedLocation.longitude }
      : null
  );
  const [mapCenter, setMapCenter] = useState(
    selectedLocation
      ? { lat: selectedLocation.latitude, lng: selectedLocation.longitude }
      : defaultCenter
  );
  const [geocodedAddress, setGeocodedAddress] = useState(
    selectedLocation?.address || ""
  );
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [error, setError] = useState("");
  const mapRef = useRef(null);

  const mainColor = theme?.mainColor || theme?.maincolor || "#007bff";

  const reverseGeocode = useCallback((lat, lng) => {
    if (!window.google?.maps?.Geocoder) return;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results[0]) {
        setGeocodedAddress(results[0].formatted_address);
      } else {
        setGeocodedAddress(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
      }
    });
  }, []);

  const handleMapClick = useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkerPosition({ lat, lng });
    reverseGeocode(lat, lng);
  }, [reverseGeocode]);

  const handleMarkerDragEnd = useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkerPosition({ lat, lng });
    reverseGeocode(lat, lng);
  }, [reverseGeocode]);

  const handleUseCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError(t("Geolocation is not supported by your browser", "المتصفح لا يدعم تحديد الموقع"));
      return;
    }

    setIsGeolocating(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const pos = { lat: latitude, lng: longitude };
        setMarkerPosition(pos);
        setMapCenter(pos);
        setIsGeolocating(false);

        // Reverse geocode then auto-confirm
        if (window.google?.maps?.Geocoder) {
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ location: pos }, (results, status) => {
            const addr = status === "OK" && results[0]
              ? results[0].formatted_address
              : `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            setGeocodedAddress(addr);
            // Auto-confirm immediately
            onLocationConfirm({ latitude, longitude, address: addr });
          });
        } else {
          const addr = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          setGeocodedAddress(addr);
          onLocationConfirm({ latitude, longitude, address: addr });
        }
      },
      () => {
        setError(t("Unable to retrieve your location", "تعذر تحديد موقعك"));
        setIsGeolocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, [reverseGeocode, t, onLocationConfirm]);

  const handleSelectOnMap = useCallback(() => {
    setShowMap(true);
  }, []);

  const handleConfirm = useCallback(() => {
    if (!markerPosition) return;
    onLocationConfirm({
      latitude: markerPosition.lat,
      longitude: markerPosition.lng,
      address: geocodedAddress,
    });
    setShowMap(false);
  }, [markerPosition, geocodedAddress, onLocationConfirm]);

  const handleCancel = useCallback(() => {
    setShowMap(false);
    if (!selectedLocation) {
      setMarkerPosition(null);
      setGeocodedAddress("");
    }
  }, [selectedLocation]);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (selectedLocation?.latitude && selectedLocation?.longitude) {
      const pos = { lat: selectedLocation.latitude, lng: selectedLocation.longitude };
      setMarkerPosition(pos);
      setMapCenter(pos);
      if (selectedLocation.address) {
        setGeocodedAddress(selectedLocation.address);
      }
    }
  }, [selectedLocation]);

  if (loadError) {
    return (
      <div style={{ color: "#ff4444", fontSize: 13, padding: "8px 0" }}>
        {t("Failed to load Google Maps", "فشل تحميل خرائط Google")}
      </div>
    );
  }

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Action Buttons */}
      <div style={{ display: "flex", gap: 10 }}>
        <button
          type="button"
          onClick={handleUseCurrentLocation}
          disabled={isGeolocating || !isLoaded}
          style={{
            flex: 1, padding: "12px 14px", borderRadius: 10, fontSize: 13, fontWeight: 600,
            cursor: isGeolocating ? "not-allowed" : "pointer",
            border: `2px solid ${mainColor}`, background: mainColor, color: "#ffffff",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            opacity: isGeolocating ? 0.6 : 1, transition: "all 0.2s ease",
          }}
        >
          <FaCrosshairs />
          {isGeolocating ? t("Locating...", "جارٍ التحديد...") : t("My Location", "موقعي")}
        </button>

        <button
          type="button"
          onClick={handleSelectOnMap}
          disabled={!isLoaded}
          style={{
            flex: 1, padding: "12px 14px", borderRadius: 10, fontSize: 13, fontWeight: 600,
            cursor: "pointer",
            border: `2px solid ${theme?.borderColor || "rgba(0, 0, 0, 0.1)"}`,
            background: theme?.categoryUnActive || "#ffffff",
            color: theme?.popupTextColor || "#00112b",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            transition: "all 0.2s ease",
          }}
        >
          <FaMapMarkerAlt />
          {t("Pick on Map", "اختر على الخريطة")}
        </button>
      </div>

      {/* Mini Map Preview (after location selected) */}
      {selectedLocation && !showMap && isLoaded && (
        <div style={{
          borderRadius: 12, overflow: "hidden",
          border: `2px solid ${theme?.borderColor || "rgba(0,0,0,0.1)"}`,
          position: "relative",
        }}>
          <GoogleMap
            mapContainerStyle={miniMapStyle}
            center={{ lat: selectedLocation.latitude, lng: selectedLocation.longitude }}
            zoom={15}
            options={{
              draggable: false, zoomControl: false, scrollwheel: false,
              disableDoubleClickZoom: true, streetViewControl: false,
              mapTypeControl: false, fullscreenControl: false,
            }}
          >
            <Marker position={{ lat: selectedLocation.latitude, lng: selectedLocation.longitude }} />
          </GoogleMap>

          {/* Address overlay */}
          <div style={{
            padding: "10px 14px", background: theme?.categoryUnActive || "#f8f9fa",
            display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: theme?.popupTextColor || "#00112b", marginBottom: 2 }}>
                {t("Delivery Location", "موقع التوصيل")}
              </div>
              <div style={{ fontSize: 11, color: theme?.popupTextColor || "#666", lineHeight: 1.4 }}>
                {selectedLocation.address || `${selectedLocation.latitude}, ${selectedLocation.longitude}`}
              </div>
            </div>
            <button
              type="button"
              onClick={handleSelectOnMap}
              style={{
                padding: "6px 12px", borderRadius: 8, border: `1.5px solid ${mainColor}`,
                background: "transparent", color: mainColor, fontSize: 11, fontWeight: 600,
                cursor: "pointer", display: "flex", alignItems: "center", gap: 4,
                transition: "all 0.2s",
              }}
            >
              <FaEdit size={10} />
              {t("Change", "تغيير")}
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Map Modal */}
      {showMap && isLoaded && (
        <div
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 99999, background: "#fff",
            display: "flex", flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Map Header */}
          <div style={{
            padding: "12px 16px", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            borderBottom: "1px solid #eee",
            flexShrink: 0,
          }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
              {t("Select your location", "حدد موقعك")}
            </h3>
            <button
              type="button"
              onClick={handleCancel}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#666", padding: 4 }}
            >
              <FaTimes />
            </button>
          </div>

          {/* Map - full remaining space */}
          <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={mapCenter}
              zoom={15}
              onClick={handleMapClick}
              onLoad={onMapLoad}
              options={{
                streetViewControl: false, mapTypeControl: false,
                fullscreenControl: false, zoomControl: true,
              }}
            >
              {markerPosition && (
                <Marker position={markerPosition} draggable onDragEnd={handleMarkerDragEnd} />
              )}
            </GoogleMap>

            {/* Floating confirm card - centered above the pin */}
            {markerPosition && (
              <div style={{
                position: "absolute",
                bottom: 80,
                left: "50%",
                transform: "translateX(-50%)",
                width: "90%",
                maxWidth: 360,
                background: "#fff",
                borderRadius: 14,
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                padding: 14,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                zIndex: 10,
              }}>
                {geocodedAddress && (
                  <div style={{
                    fontSize: 12, color: "#333", padding: "8px 10px",
                    background: "#f5f5f5", borderRadius: 8,
                    display: "flex", alignItems: "flex-start", gap: 8,
                    lineHeight: 1.4,
                  }}>
                    <FaMapMarkerAlt style={{ color: mainColor, marginTop: 2, flexShrink: 0 }} />
                    <span>{geocodedAddress}</span>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleConfirm}
                  style={{
                    width: "100%", padding: "14px", borderRadius: 10,
                    fontSize: 15, fontWeight: 700,
                    cursor: "pointer", border: "none",
                    background: mainColor, color: "#ffffff",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    boxShadow: `0 4px 16px ${mainColor}50`,
                  }}
                >
                  <FaCheck />
                  {t("Confirm Location", "تأكيد الموقع")}
                </button>
              </div>
            )}

            {/* Hint when no pin placed */}
            {!markerPosition && (
              <div style={{
                position: "absolute",
                bottom: 30,
                left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                borderRadius: 10,
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                padding: "12px 20px",
                fontSize: 13,
                color: "#666",
                whiteSpace: "nowrap",
              }}>
                {t("Tap on the map to place a pin", "انقر على الخريطة لوضع دبوس")}
              </div>
            )}
          </div>
        </div>
      )}

      {error && <div style={{ color: "#ff4444", fontSize: 13 }}>{error}</div>}
      {hasError && !selectedLocation && (
        <div style={{ color: "#ff4444", fontSize: 13 }}>
          {t("Please select a location", "يرجى تحديد الموقع")}
        </div>
      )}
    </div>
  );
}
