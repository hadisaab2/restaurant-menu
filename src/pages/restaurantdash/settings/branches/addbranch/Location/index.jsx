import React, { useState } from 'react';
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from "@mui/material";
import { lebanonData } from "./lebanondata";
import { AddRate, CityDeliveryRate, DeliveryRate, DeliveryWrapper } from './styles';

export default function Location({ location, setLocation, register }) {
    const [cityPage, setCityPage] = useState(1); // Tracks the current page for cities
    const CITIES_PER_PAGE = 10; // Number of cities per page
    const [deliveryRates, setDeliveryRates] = useState({}); // New state for delivery rates

    const handleChange = (event) => {
        const selectedValues = event.target.value;

        const selectedDistricts = lebanonData
            .filter((governorate) => selectedValues.includes(governorate.GovernorateDescription.trim()))
            .flatMap((governorate) => governorate.Districts.map((district) => district.DistrictDescription.trim()));

        const selectedCities = lebanonData
            .flatMap((governorate) =>
                governorate.Districts.filter((district) => selectedDistricts.includes(district.DistrictDescription.trim()))
            )
            .flatMap((district) => district.Cities)


        setLocation((prev) => ({
            ...prev,
            governorates: selectedValues,
            districts: selectedDistricts,
            cities: selectedCities,
        }));

        setCityPage(1); // Reset pagination
    };

    const handleDistrictChange = (event) => {
        const selectedDistricts = event.target.value;
        const selectedCities = lebanonData
            .flatMap((governorate) => governorate.Districts)
            .filter((district) => selectedDistricts.includes(district.DistrictDescription.trim()))
            .flatMap((district) => district.Cities)

        setLocation((prev) => ({
            ...prev,
            districts: selectedDistricts,
            cities: selectedCities,
        }));

        setCityPage(1); // Reset pagination
    };

    const handleCityChange = (event) => {

        const selectedCities = event.target.value;
        const hasUndefined = selectedCities.some((value) => value === undefined); // check if last menuitem handlechange triggered
        if (!hasUndefined) {
            setLocation((prev) => ({
                ...prev,
                cities: selectedCities,
            }));
        }

    };
    const handleLoadMore = () => {
        setCityPage((prevPage) => prevPage + 1); // Increment the page
    };



    const handleDeliveryInputChange = (district, rate) => {
        setDeliveryRates((prev) => ({
            ...prev,
            [district]: rate, // Update delivery rate for the specific district
        }));
        const citiesFromDistrict = lebanonData
            .flatMap((governorate) => governorate.Districts)
            .find((d) => d.DistrictDescription.trim() === district)?.Cities || [];

        // Filter cities that are already in location.cities
        const updatedCities = location.cities.map((city) => {
            // Check if the city belongs to the current district
            if (citiesFromDistrict.some((c) => c.id === city.id)) {
                return { ...city, deliveryRate: rate }; // Add/update delivery rate
            }
            return city; // Keep city unchanged if it's not part of the current district
        });

        // Update the location state
        setLocation((prev) => ({
            ...prev,
            cities: updatedCities, // Update only the relevant cities
        }));
    };


    const handleAddRate = (rate, district) => {
        // Find the cities belonging to the specified district
        

    };
    { console.log(location.cities) }
    return (
        <>
            <FormControl style={{ width: "40%" }}>
                <InputLabel id="governorate-select-label">Select Governorate</InputLabel>
                <Select
                    labelId="governorate-select-label"
                    multiple
                    value={location.governorates}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(", ")}
                >
                    {lebanonData.map((governorate) => (
                        <MenuItem key={governorate.GovernorateDescription} value={governorate.GovernorateDescription.trim()}>
                            <Checkbox checked={location.governorates.includes(governorate.GovernorateDescription.trim())} />
                            <ListItemText primary={governorate.GovernorateDescription.trim()} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl style={{ width: "30%" }}>
                <InputLabel id="district-select-label">Select District</InputLabel>
                <Select
                    labelId="district-select-label"
                    multiple
                    value={location.districts}
                    onChange={handleDistrictChange}
                    renderValue={(selected) => selected.join(", ")}
                >
                    {lebanonData
                        .filter((governorate) => location.governorates.includes(governorate.GovernorateDescription.trim()))
                        .flatMap((governorate) => governorate.Districts)
                        .map((district) => (
                            <MenuItem key={district.DistrictDescription} value={district.DistrictDescription.trim()}>
                                <Checkbox checked={location.districts.includes(district.DistrictDescription.trim())} />
                                <ListItemText primary={district.DistrictDescription.trim()} />
                                <DeliveryWrapper onClick={
                                    (e) => e.stopPropagation() //important 
                                }>
                                    <div style={{width:"20px"}}></div>
                                    <DeliveryRate placeholder="Delivery Rate" value={deliveryRates[district.DistrictDescription.trim()] || ""}
                                        onChange={(e) =>
                                            handleDeliveryInputChange(district.DistrictDescription.trim(), e.target.value)
                                        } />
                                    <AddRate onClick={() => {
                                        handleAddRate(
                                            deliveryRates[district.DistrictDescription.trim()] || "",
                                            district.DistrictDescription.trim()
                                        );
                                    }}>+</AddRate>
                                </DeliveryWrapper>


                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
            <FormControl style={{ width: "30%" }}>
                <InputLabel id="city-select-label">Select Cities</InputLabel>
                <Select
                    labelId="city-select-label"
                    multiple
                    value={location.cities}
                    onChange={handleCityChange}
                    renderValue={(selected) => selected.map((city) => city?.region_name).join(", ")}
                >
                    {lebanonData
                        .flatMap((governorate) =>
                            governorate.Districts.filter((district) => location.districts.includes(district.DistrictDescription.trim()))
                        )
                        .flatMap((district) => district.Cities).slice(0, cityPage * CITIES_PER_PAGE).map((city) => (
                            <MenuItem key={city.id} value={city}>
                                <Checkbox
                                    checked={location.cities.find((c) => c.id == city.id)}
                                />
                                <ListItemText primary={city.region_name.trim()} />
                                <DeliveryWrapper onClick={
                                    (e) => e.stopPropagation() //important 
                                }>
                                    <CityDeliveryRate placeholder="Delivery Rate" value={location.cities.find((c) => c.id == city.id)?.deliveryRate || "0"}
                                    />
                                    <AddRate onClick={() => {

                                    }}>edit</AddRate>
                                </DeliveryWrapper>
                            </MenuItem>
                        ))}
                    {cityPage * CITIES_PER_PAGE < location.cities.length && (
                        <MenuItem onClick={(e) => {
                            e.stopPropagation(); // Prevent the click from propagating to the parent Select
                            handleLoadMore(); // Call the load more handler
                        }}>
                            <ListItemText primary="Load More" />

                        </MenuItem>

                    )}
                </Select>
            </FormControl>
        </>
    );
}
