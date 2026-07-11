import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Alert,
  CircularProgress,
  Checkbox,
  Chip,
  Tooltip,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

import {
  useGetZones,
  useGetZone,
  useCreateZone,
  useUpdateZone,
  useGridPreview,
} from "../../../apis/zones";
import {
  ZonesContainer,
  TopBar,
  ZonesList,
  ZoneRow,
  ZoneInfo,
  ZoneName,
  ZoneMeta,
  StatusBadge,
  MapContainer,
  ReadoutBar,
  ReadoutItem,
  WarningText,
  FormRow,
  CostCard,
  GridStatsRow,
} from "./styles";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAX_ZONE_KM2 = 25;

const BUSINESS_TYPE_GROUPS = {
  "Restaurants": ["restaurant", "fast_food_restaurant", "lebanese_restaurant", "seafood_restaurant", "steak_house", "sushi_restaurant", "american_restaurant", "italian_restaurant", "bistro"],
  "Cafes & Drinks": ["cafe", "coffee_shop", "juice_shop", "tea_house"],
  "Bakeries & Sweets": ["bakery", "pastry_shop", "cake_shop", "dessert_shop", "dessert_restaurant", "chocolate_shop", "ice_cream_shop"],
  "Food Delivery": ["meal_takeaway", "meal_delivery"],
  "Flowers & Gifts": ["florist", "flower_shop", "gift_shop"],
  "Beauty & Wellness": ["beauty_salon", "nail_salon", "hair_salon", "spa"],
  "Grocery": ["grocery_store", "supermarket", "convenience_store"],
};

const ALL_FOOD_TYPES = [...BUSINESS_TYPE_GROUPS["Restaurants"], ...BUSINESS_TYPE_GROUPS["Cafes & Drinks"], ...BUSINESS_TYPE_GROUPS["Bakeries & Sweets"], ...BUSINESS_TYPE_GROUPS["Food Delivery"]];

const ZONE_COLORS = ["#6d28d9", "#dc2626", "#16a34a", "#f59e0b", "#3b82f6", "#ec4899", "#14b8a6", "#f97316"];

export default function Zones() {
  const { data: zones, isLoading: loadingZones } = useGetZones();
  const [selectedZoneId, setSelectedZoneId] = useState(null);
  const { data: selectedZone } = useGetZone(selectedZoneId);
  const [mode, setMode] = useState("list"); // list | draw | edit
  const [formName, setFormName] = useState("");
  const [formCountry, setFormCountry] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formStatus, setFormStatus] = useState("draft");
  const [formBusinessTypes, setFormBusinessTypes] = useState([...ALL_FOOD_TYPES]);

  // Multi-zone view
  const [viewSelected, setViewSelected] = useState(new Set());
  const [viewMode, setViewMode] = useState(false);
  const viewMapContainerRef = useRef(null);
  const viewMapRef = useRef(null);

  // Map refs
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const drawRef = useRef(null);

  // Readout state
  const [readout, setReadout] = useState({ area: 0, vertices: 0, centroid: null });
  const [drawnPolygon, setDrawnPolygon] = useState(null);

  // Grid preview
  const { generatePreview, isGenerating, previewData, resetPreview } = useGridPreview();

  // Mutations
  const { createZone, isPending: isCreating, error: createError } = useCreateZone({
    onSuccess: (data) => {
      setMode("list");
      setSelectedZoneId(data.id);
      resetForm();
    },
  });
  const { updateZone, isPending: isUpdating, error: updateError } = useUpdateZone({
    onSuccess: () => {
      setMode("list");
      resetForm();
    },
  });

  const resetForm = () => {
    setFormName("");
    setFormCountry("");
    setFormCity("");
    setFormStatus("draft");
    setDrawnPolygon(null);
    setReadout({ area: 0, vertices: 0, centroid: null });
    resetPreview();
  };

  // ── Map initialization ──
  useEffect(() => {
    if ((mode !== "draw" && mode !== "edit") || !MAPBOX_TOKEN) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [35.5, 33.9], // Beirut default
      zoom: 12,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: { polygon: true, trash: true },
      defaultMode: "draw_polygon",
    });
    map.addControl(draw);
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    mapRef.current = map;
    drawRef.current = draw;

    const updateReadout = () => {
      const data = draw.getAll();
      if (data.features.length === 0) {
        setReadout({ area: 0, vertices: 0, centroid: null });
        setDrawnPolygon(null);
        return;
      }
      const feature = data.features[0];
      if (feature.geometry.type !== "Polygon" || !feature.geometry.coordinates[0]) return;

      const ring = feature.geometry.coordinates[0];
      const area = turf.area(feature) / 1e6;
      const centroid = turf.centroid(feature);

      setReadout({
        area: parseFloat(area.toFixed(4)),
        vertices: ring.length - 1, // exclude closing coord
        centroid: centroid.geometry.coordinates,
      });
      setDrawnPolygon(feature.geometry);
    };

    map.on("draw.create", updateReadout);
    map.on("draw.update", updateReadout);
    map.on("draw.delete", updateReadout);

    // If editing, load existing polygon
    if (mode === "edit" && selectedZone?.boundary_geojson) {
      map.on("load", () => {
        draw.add({
          type: "Feature",
          geometry: selectedZone.boundary_geojson,
          properties: {},
        });
        draw.changeMode("simple_select");
        updateReadout();

        // Fly to zone
        if (selectedZone.centroid?.coordinates) {
          map.flyTo({ center: selectedZone.centroid.coordinates, zoom: 13 });
        }
      });
    }

    return () => {
      map.remove();
      mapRef.current = null;
      drawRef.current = null;
    };
  }, [mode, selectedZone?.id]);

  // ── Grid preview circles on map ──
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !previewData?.grid) return;

    const addGridLayer = () => {
      if (map.getSource("grid-circles")) {
        map.removeLayer("grid-circles-layer");
        map.removeSource("grid-circles");
      }

      // Create circle features from point centers using grid_radius_m (search radius per cell)
      const circles = previewData.grid.features.map((f) =>
        turf.circle(f.geometry.coordinates, (previewData.grid_radius_m || 450) / 1000, { units: "kilometers", steps: 32 })
      );
      const collection = turf.featureCollection(circles);

      map.addSource("grid-circles", { type: "geojson", data: collection });
      map.addLayer({
        id: "grid-circles-layer",
        type: "fill",
        source: "grid-circles",
        paint: {
          "fill-color": "#6d28d9",
          "fill-opacity": 0.12,
          "fill-outline-color": "#6d28d9",
        },
      });
    };

    if (map.isStyleLoaded()) addGridLayer();
    else map.on("load", addGridLayer);
  }, [previewData]);

  // ── Multi-zone view map ──
  useEffect(() => {
    if (!viewMode || viewSelected.size === 0 || !MAPBOX_TOKEN || !viewMapContainerRef.current) return;
    if (viewMapRef.current) { viewMapRef.current.remove(); viewMapRef.current = null; }

    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: viewMapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [35.5, 33.9],
      zoom: 11,
    });
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    viewMapRef.current = map;

    map.on("load", () => {
      const selectedZones = (zones || []).filter((z) => viewSelected.has(z.id));
      const bounds = new mapboxgl.LngLatBounds();

      selectedZones.forEach((z, i) => {
        if (!z.boundary_geojson) return;
        const color = ZONE_COLORS[i % ZONE_COLORS.length];
        const sourceId = `zone-${z.id}`;

        map.addSource(sourceId, { type: "geojson", data: { type: "Feature", geometry: z.boundary_geojson, properties: {} } });
        map.addLayer({ id: `${sourceId}-fill`, type: "fill", source: sourceId, paint: { "fill-color": color, "fill-opacity": 0.15 } });
        map.addLayer({ id: `${sourceId}-line`, type: "line", source: sourceId, paint: { "line-color": color, "line-width": 2 } });

        // Add label
        if (z.centroid?.coordinates) {
          new mapboxgl.Marker({ color })
            .setLngLat(z.centroid.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<strong>${z.name}</strong><br/>${z.area_km2} km²`))
            .addTo(map);
          bounds.extend(z.centroid.coordinates);
        }
        if (z.bbox) {
          bounds.extend([z.bbox[0], z.bbox[1]]);
          bounds.extend([z.bbox[2], z.bbox[3]]);
        }
      });

      if (!bounds.isEmpty()) map.fitBounds(bounds, { padding: 40 });
    });

    return () => { if (viewMapRef.current) { viewMapRef.current.remove(); viewMapRef.current = null; } };
  }, [viewMode, viewSelected, zones]);

  // ── Handlers ──
  const handleNewZone = () => {
    resetForm();
    setSelectedZoneId(null);
    setMode("draw");
  };

  const handleEditZone = (zone) => {
    setSelectedZoneId(zone.id);
    setFormName(zone.name);
    setFormCountry(zone.country || "");
    setFormCity(zone.city || "");
    setFormStatus(zone.status);
    setFormBusinessTypes(zone.business_types && Array.isArray(zone.business_types) ? zone.business_types : [...ALL_FOOD_TYPES]);
    resetPreview();
    setMode("edit");
  };

  const handleSave = () => {
    if (!drawnPolygon && mode === "draw") return;

    const payload = {
      name: formName,
      country: formCountry || undefined,
      city: formCity || undefined,
      status: formStatus,
      business_types: formBusinessTypes.length > 0 ? formBusinessTypes : undefined,
    };

    if (drawnPolygon) {
      payload.boundary_geojson = drawnPolygon;
    }

    if (mode === "edit" && selectedZoneId) {
      updateZone({ id: selectedZoneId, ...payload });
    } else {
      createZone(payload);
    }
  };

  const handleGridPreview = () => {
    if (selectedZoneId) generatePreview(selectedZoneId);
  };

  const apiError = createError || updateError;

  // ── Render ──
  if (!MAPBOX_TOKEN) {
    return (
      <Alert severity="warning">
        Set REACT_APP_MAPBOX_TOKEN in your .env to enable the Zones map.
      </Alert>
    );
  }

  return (
    <ZonesContainer>
      {mode === "list" && (
        <>
          <TopBar>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Zones</Typography>
            <div style={{ display: "flex", gap: 8 }}>
              {viewSelected.size > 0 && (
                <Button variant="outlined" onClick={() => setViewMode(!viewMode)} sx={{ textTransform: "none", fontSize: 12 }}>
                  {viewMode ? "Hide Map" : `View ${viewSelected.size} on Map`}
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNewZone}
                sx={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", textTransform: "none" }}
              >
                + New Zone
              </Button>
            </div>
          </TopBar>

          {loadingZones ? (
            <CircularProgress size={24} />
          ) : !zones?.length ? (
            <Alert severity="info">No zones yet. Click "+ New Zone" to draw your first zone.</Alert>
          ) : (
            <>
              <ZonesList>
                {zones.map((z) => (
                  <ZoneRow key={z.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Checkbox size="small" checked={viewSelected.has(z.id)}
                      onChange={(e) => {
                        const next = new Set(viewSelected);
                        e.target.checked ? next.add(z.id) : next.delete(z.id);
                        setViewSelected(next);
                      }}
                      onClick={(e) => e.stopPropagation()}
                      sx={{ padding: 0 }} />
                    <div style={{ flex: 1, cursor: "pointer" }} onClick={() => handleEditZone(z)}>
                      <ZoneInfo>
                        <ZoneName>{z.name}</ZoneName>
                        <ZoneMeta>
                          {[z.country, z.city].filter(Boolean).join(", ") || "No location"}
                          {z.area_km2 ? ` — ${z.area_km2} km²` : ""}
                        </ZoneMeta>
                      </ZoneInfo>
                    </div>
                    <StatusBadge $status={z.status}>{z.status}</StatusBadge>
                  </ZoneRow>
                ))}
              </ZonesList>

              {/* Multi-zone map view */}
              {viewMode && viewSelected.size > 0 && (
                <div style={{ marginTop: 16 }}>
                  <div ref={viewMapContainerRef} style={{ width: "100%", height: 400, borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                </div>
              )}
            </>
          )}
        </>
      )}

      {(mode === "draw" || mode === "edit") && (
        <>
          <TopBar>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {mode === "edit" ? `Edit: ${formName}` : "Draw New Zone"}
            </Typography>
            <Button variant="outlined" onClick={() => { setMode("list"); resetForm(); }} sx={{ textTransform: "none" }}>
              Back to List
            </Button>
          </TopBar>

          {/* Form fields */}
          <FormRow>
            <TextField size="small" label="Zone Name" value={formName} onChange={(e) => setFormName(e.target.value)} required sx={{ minWidth: 200 }} />
            <TextField size="small" label="Country" value={formCountry} onChange={(e) => setFormCountry(e.target.value)} sx={{ minWidth: 140 }} />
            <TextField size="small" label="City" value={formCity} onChange={(e) => setFormCity(e.target.value)} sx={{ minWidth: 140 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select value={formStatus} onChange={(e) => setFormStatus(e.target.value)} label="Status">
                <MenuItem value="draft">Draft</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="archived">Archived</MenuItem>
              </Select>
            </FormControl>
          </FormRow>

          {/* Business Types */}
          <div style={{ marginBottom: 12 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, fontSize: 12 }}>Business Types to Source</Typography>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {Object.entries(BUSINESS_TYPE_GROUPS).map(([group, types]) => {
                const allSelected = types.every((t) => formBusinessTypes.includes(t));
                const someSelected = types.some((t) => formBusinessTypes.includes(t));
                return (
                  <Tooltip key={group} title={types.join(", ")} arrow>
                    <Chip
                      label={group}
                      size="small"
                      variant={allSelected ? "filled" : "outlined"}
                      color={allSelected ? "primary" : someSelected ? "warning" : "default"}
                      onClick={() => {
                        if (allSelected) {
                          setFormBusinessTypes((prev) => prev.filter((t) => !types.includes(t)));
                        } else {
                          setFormBusinessTypes((prev) => [...new Set([...prev, ...types])]);
                        }
                      }}
                      sx={{ fontSize: 11, cursor: "pointer" }}
                    />
                  </Tooltip>
                );
              })}
            </div>
            <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 4 }}>{formBusinessTypes.length} types selected. Click a group to toggle.</div>
          </div>

          {/* Map */}
          <MapContainer ref={mapContainerRef} />

          {/* Live readout */}
          <ReadoutBar>
            <ReadoutItem>Area: <strong>{readout.area} km²</strong></ReadoutItem>
            <ReadoutItem>Vertices: <strong>{readout.vertices}</strong></ReadoutItem>
            {readout.centroid && (
              <ReadoutItem>
                Centroid: <strong>[{readout.centroid[0]?.toFixed(4)}, {readout.centroid[1]?.toFixed(4)}]</strong>
              </ReadoutItem>
            )}
            {readout.area > MAX_ZONE_KM2 && (
              <WarningText>Area exceeds {MAX_ZONE_KM2} km² limit!</WarningText>
            )}
          </ReadoutBar>

          {/* Actions */}
          <FormRow>
            <LoadingButton
              variant="contained"
              onClick={handleSave}
              loading={isCreating || isUpdating}
              disabled={!formName || (!drawnPolygon && mode === "draw")}
              sx={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", textTransform: "none" }}
            >
              {mode === "edit" ? "Update Zone" : "Save Zone"}
            </LoadingButton>

            {mode === "edit" && selectedZoneId && (
              <LoadingButton
                variant="outlined"
                onClick={handleGridPreview}
                loading={isGenerating}
                sx={{ textTransform: "none" }}
              >
                Generate Grid Preview
              </LoadingButton>
            )}
          </FormRow>

          {apiError && (
            <Alert severity="error" sx={{ mt: 1 }}>
              {apiError?.response?.data?.message || apiError?.message || "An error occurred"}
            </Alert>
          )}

          {/* Grid preview results */}
          {previewData && (
            <>
              <GridStatsRow>
                <div>Seed cells: <strong>{previewData.seedCells}</strong></div>
                <div>
                  Typical: <strong>~{previewData.estimates?.typical?.calls} calls</strong>
                  {previewData.priceConfigured
                    ? <> (~${previewData.estimates?.typical?.costBilled} billed)</>
                    : <span style={{ color: "#d97706" }}> — price not configured</span>}
                </div>
                <div style={{ color: "#666", fontSize: "0.85em" }}>
                  Range: {previewData.estimates?.best?.calls}–{previewData.estimates?.worst?.calls} calls
                  {previewData.priceConfigured && (
                    <> (${previewData.estimates?.best?.costBilled}–${previewData.estimates?.worst?.costBilled} billed)</>
                  )}
                </div>
                <div>Grid spacing: <strong>{previewData.grid_spacing_m}m</strong> — Search radius: <strong>{previewData.grid_radius_m}m</strong></div>
              </GridStatsRow>
              <CostCard>
                {previewData.priceConfigured ? (
                  <>
                    <strong>~{previewData.estimates?.typical?.calls} typical calls</strong> (~${previewData.estimates?.typical?.costGross} gross)
                    <br />
                    After monthly free tier ({previewData.freeTierMonthly?.toLocaleString()} calls):
                    <strong> best ${previewData.estimates?.best?.costBilled}</strong>,
                    <strong> typical ~${previewData.estimates?.typical?.costBilled}</strong>,
                    <strong> worst ~${previewData.estimates?.worst?.costBilled}</strong>
                  </>
                ) : (
                  <>
                    <strong>~{previewData.estimates?.typical?.calls} typical calls</strong> — range {previewData.estimates?.best?.calls}–{previewData.estimates?.worst?.calls}
                    <br />
                    <span style={{ color: "#d97706" }}>Set <code>maps.nearby_price_per_1k</code> in engine_config for cost estimates</span>
                  </>
                )}
              </CostCard>
            </>
          )}
        </>
      )}
    </ZonesContainer>
  );
}
