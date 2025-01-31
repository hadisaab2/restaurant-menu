import React, { useEffect, useState } from "react";
import { AddBranchForm, BackIcon, Note } from "./styles";
import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAddBranchQuery } from "../../../../../apis/branches/addBranch";
import { useEditBranchQuery } from "../../../../../apis/branches/editBranch";
import { LoadingButton } from "@mui/lab";
import { isEmpty } from "lodash";
import Location from "./Location";
import { useGetBranch } from "../../../../../apis/branches/getBranch";
import { lebanonData } from "./Location/lebanondata";
export default function AddEditBranch({
  setShowAddComponent,
  refetchBranches,
  userInformation,
  selectedIdForAction,
  setSelectedIdForAction,
}) {
  const [location, setLocation] = useState({ governorates: [], districts: [], cities: [] });
  const [isOnline, setIsOnline] = useState(false); // Default false
  const { register, handleSubmit, setValue, formState, reset } = useForm();
  const { response: fetchedBranch, isLoading: branchLoading, refetch: refetchBranchDetails } = useGetBranch({
    branch_id: selectedIdForAction, // Trigger fetch based on branch_id,
    onSuccess: () => {
    }
  });


  const getDistrictNamesFromId = (regions) => {
    return Array.from(
      new Set(
        regions
          .map((region) => {
            // Find the district that matches the region's district_id
            const district = lebanonData
              .flatMap((governorate) => governorate.Districts)
              .find((d) => d.id === region.district_id);

            return district ? district.DistrictDescription : null;
          })
          .filter(Boolean) // Remove null values
      )
    );
  };

  const getGovernoratesFromDistricts = (districtNames) => {
    return Array.from(
      new Set(
        lebanonData
          .filter((governorate) =>
            governorate.Districts.some((district) =>
              districtNames.includes(district.DistrictDescription)
            )
          )
          .map((governorate) => governorate.GovernorateDescription)
      )
    );
  };

  useEffect(() => {
    if (!branchLoading && selectedIdForAction) {
      const { name, location, mapLink, phone_number, regions,is_online } = fetchedBranch?.data;
      console.log(is_online)
      setValue("name", name);
      setValue("location", location);
      setValue("mapLink", mapLink);
      setValue("phone_number", phone_number);
      const filtereddistricts = getDistrictNamesFromId(regions)
      const filteredgovernorate = getGovernoratesFromDistricts(filtereddistricts);
      setValue("regions", regions);
      setValue("is_online", is_online);
      setIsOnline(is_online)
      setLocation({
        governorates: filteredgovernorate,
        districts: filtereddistricts,
        cities: regions.map(({ district_id, ...rest }) => rest), // Assuming `regions` is the desired value for cities
      });


    }
  }, [branchLoading,fetchedBranch?.data])


  const { handleApiCall, isPending } = useAddBranchQuery({
    onSuccess: () => {
      reset({
        name: null,
        location: null,
        mapLink: null,
        phone_number: null
        // Add all field names you want to reset
      });
      refetchBranches();
      setShowAddComponent(false);
    },
  });

  const { handleApiCall: handleEditApi, isPending: isEditing } =
    useEditBranchQuery({
      onSuccess: () => {
        setSelectedIdForAction(null);
        reset({
          name: null,
          location: null,
          mapLink: null,
          phone_number: null
          // Add all field names you want to reset
        });
        refetchBranches();
        setShowAddComponent(false);
      },
    });

  const handleAddBranch = () => {
    handleSubmit((data) => {
      const payload = {
        ...data,
        restaurant_id: userInformation.restaurant_id,
        regions: location.cities.map(city => city.id),
        is_online:isOnline
      };
      if (selectedIdForAction) {
        handleEditApi(selectedIdForAction, payload);
      } else {
        handleApiCall(payload);
      }
    })();
  };


  const handleBack = () => {
    reset({
      name: null,
      location: null,
      mapLink: null,
      phone_number: null
      // Add all field names you want to reset
    });
    setSelectedIdForAction(null)
    setShowAddComponent(false);
  };
  const handleisOnline = (event) => {
    setIsOnline(!isOnline); // Toggle between true/false
  };


  return (
    <>
      {!branchLoading &&
        <>
          <AddBranchForm>
            <BackIcon onClick={() => handleBack()} />

            <TextField
              label="Name"
              name="name"
              variant="outlined"
              {...register("name")}
              error={!isEmpty(formState?.errors?.name)}
              helperText={
                !isEmpty(formState.errors.link) && formState?.errors?.name?.message
              }
            />
            <TextField
              label="PhoneNumber"
              name="phone_number"
              variant="outlined"
              {...register("phone_number", {
                pattern: {
                  value: /^(\d+\s)*\d+$/,
                  message: "Invalid phone number format.",
                },
              })}
              error={!isEmpty(formState?.errors?.phone_number)}
              helperText={
                !isEmpty(formState.errors.phone_number) &&
                formState?.errors?.phone_number?.message
              }
            />
            <TextField
              label="Location"
              variant="outlined"
              name="location"
              {...register("location")}
              error={!isEmpty(formState?.errors?.location)}
              helperText={
                !isEmpty(formState.errors.location) &&
                formState?.errors?.location?.message
              }
            />
            <TextField
              label="Maps"
              variant="outlined"
              name="mapLink"
              {...register("mapLink")}
              error={!isEmpty(formState?.errors?.mapLink)}
              helperText={
                !isEmpty(formState.errors.mapLink) &&
                formState?.errors?.mapLink?.message
              }
            />
            {!branchLoading && <Location location={location} setLocation={setLocation} register={register} />}
            <FormControl component="fieldset">
              <FormLabel component="legend">Shop Type</FormLabel>
              <FormControlLabel
                control={<Checkbox checked={isOnline} onChange={handleisOnline} />}
                label="Online Shop"
              />
            </FormControl>

            <LoadingButton
              loading={isPending || isEditing}
              onClick={() => handleAddBranch()}
              style={{
                backgroundColor: "turquoise",
                color: "white",
                width: "150px",
                height: "40px",
              }}
            >
              {selectedIdForAction ? "Edit Branch" : "Add Branch"}
            </LoadingButton>
          </AddBranchForm>
          <Note>
            Note: When listing multiple phone numbers, please separate each with a single space.
          </Note>
        </>
      }
    </>
  );
}
