import React, { useEffect } from "react";
import { AddMedia, AddMediaForm, BackIcon } from "../styles";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAddMediaQuery } from "../../../../../apis/socialMedia/addSocialMedia";
import { useEditMediaQuery } from "../../../../../apis/socialMedia/editSocialMedia";
import { LoadingButton } from "@mui/lab";
import { isEmpty } from "lodash";

export default function AddEditMedia({
  setShowAddComponent,
  selectedMedia,
  setSelectedMedia,
  refetchMedia,
  userInformation,
  media,
}) {
  const { register, handleSubmit, setValue, formState } = useForm();

  const { handleApiCall, isPending } = useAddMediaQuery({
    onSuccess: () => {
      setSelectedMedia(null);
      refetchMedia();
      setShowAddComponent(false);
    },
  });
  const { handleApiCall: handleEditApi, isPending: isEditing } =
    useEditMediaQuery({
      onSuccess: () => {
        setSelectedMedia(null);
        refetchMedia();
        setShowAddComponent(false);
      },
    });

  const handleAddMedia = () => {
    handleSubmit((data) => {
      const payload = {
        ...data,
        restaurant_id: userInformation.restaurant_id,
      };

      if (selectedMedia) {
        handleEditApi(selectedMedia.id, payload);
      } else {
        handleApiCall(payload);
      }
    })();
  };

  useEffect(() => {
    if (selectedMedia) {
      const { platform, link } = selectedMedia;
      setValue("platform", platform);
      setValue("link", link);
    }
  }, []);

  const handleBack = () => {
    setSelectedMedia(null);
    setShowAddComponent(false);
  };

  const platformAlreadyAdded = (platformToAdd) =>
    isEmpty(selectedMedia) &&
    media.some(({ platform }) => platform === platformToAdd);

  return (
    <AddMediaForm>
      <BackIcon onClick={() => handleBack()} />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Media</InputLabel>
          <Select
            readOnly={selectedMedia}
            {...register("platform", { required: "Required" })}
            label="platform"
            defaultValue={selectedMedia?.platform}
            error={!isEmpty(formState?.errors?.platform)}
          >
            {!platformAlreadyAdded("Instagram") && (
              <MenuItem value={"Instagram"}>Instagram</MenuItem>
            )}
            {!platformAlreadyAdded("Facebook") && (
              <MenuItem value={"Facebook"}>Facebook</MenuItem>
            )}
            {!platformAlreadyAdded("Tiktok") && (
              <MenuItem value={"Tiktok"}>Tiktok</MenuItem>
            )}
            {!platformAlreadyAdded("Whatsapp") && (
              <MenuItem value={"Whatsapp"}>Whatsapp</MenuItem>
            )}
          </Select>
          {!isEmpty(formState?.errors?.platform) && (
            <FormHelperText style={{ color: "#d64241" }}>
              Required field
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <TextField
        label="Link"
        name="link"
        variant="outlined"
        {...register("link", { required: "Required" })}
        error={!isEmpty(formState?.errors?.link)}
        helperText={
          !isEmpty(formState.errors.link) && formState?.errors?.link?.message
        }
      />

      <LoadingButton
        onClick={handleAddMedia}
        loading={isPending}
        style={{
          backgroundColor: "turquoise",
          color: "white",
          width: "150px",
          height: "40px",
        }}
      >
        {selectedMedia ? "Edit Media" : "Add Media"}
      </LoadingButton>
    </AddMediaForm>
  );
}
