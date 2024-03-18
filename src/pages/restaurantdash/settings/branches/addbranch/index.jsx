import React, { useEffect } from "react";
import { AddBranchForm, BackIcon } from "./styles";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAddBranchQuery } from "../../../../../apis/branches/addBranch";
import { useEditBranchQuery } from "../../../../../apis/branches/editBranch";
import { LoadingButton } from "@mui/lab";
import { isEmpty } from "lodash";

export default function AddEditBranch({
  setShowAddComponent,
  selectedBranch,
  setSelectedBranch,
  refetchBranches,
  userInformation,
  selectedIdForAction,
  setSelectedIdForAction,
}) {
  const { register, handleSubmit, setValue, formState } = useForm();
  const { handleApiCall, isPending } = useAddBranchQuery({
    onSuccess: () => {
      setSelectedBranch(null);
      refetchBranches();
      setShowAddComponent(false);
    },
  });

  const { handleApiCall: handleEditApi, isPending: isEditing } =
    useEditBranchQuery({
      onSuccess: () => {
        setSelectedIdForAction(null);
        setSelectedBranch(null);
        refetchBranches();
        setShowAddComponent(false);
      },
    });

  const handleAddBranch = () => {
    handleSubmit((data) => {
      const payload = {
        ...data,
        restaurant_id: userInformation.restaurant_id,
      };
      if (selectedBranch) {
        handleEditApi(selectedIdForAction, payload);
      } else {
        handleApiCall(payload);
      }
    })();
  };

  useEffect(() => {
    if (selectedBranch) {
      const { name, location, mapLink } = selectedBranch;
      setValue("name", name);
      setValue("location", location);
      setValue("mapLink", mapLink);
    }
  }, []);

  const handleBack = () => {
    setSelectedBranch(null);
    setShowAddComponent(false);
  };

  return (
    <AddBranchForm>
      <BackIcon onClick={() => handleBack()} />

      <TextField
        label="Name"
        name="name"
        variant="outlined"
        {...register("name", { required: "Required" })}
        error={!isEmpty(formState?.errors?.name)}
        helperText={
          !isEmpty(formState.errors.link) && formState?.errors?.name?.message
        }
      />
      <TextField
        label="Location"
        variant="outlined"
        name="location"
        {...register("location", { required: "Required" })}
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
        {...register("mapLink", { required: "Required" })}
        error={!isEmpty(formState?.errors?.mapLink)}
        helperText={
          !isEmpty(formState.errors.mapLink) &&
          formState?.errors?.mapLink?.message
        }
      />
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
        {selectedBranch ? "Edit Branch" : "Add Branch"}
      </LoadingButton>
    </AddBranchForm>
  );
}
