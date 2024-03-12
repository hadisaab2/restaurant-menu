import React, { useEffect } from "react";
import { AddMedia, AddMediaForm, BackIcon } from "../styles";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

export default function AddEditMedia({ setShowAddComponent, selectedMedia,setSelectedMedia }) {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const handleAddMedia = () => {
    handleSubmit((data) => {
      console.log(data);
    })();
  };

  useEffect(() => {
    if (selectedMedia) {
      const { mediatype, link } = selectedMedia;
      setValue("mediatype", mediatype);
      setValue("link", link);
    }
  }, []);

  const handleBack = ()=>{
    setSelectedMedia(null)
    setShowAddComponent(false)
  }
  return (
    <AddMediaForm>
          <BackIcon onClick={() => handleBack()} />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Media</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            {...register("mediatype")}
            label="mediaType"
            defaultValue={selectedMedia?.mediatype}
          >
            <MenuItem value={"Instagram"}>Instagram</MenuItem>
            <MenuItem value={"Facebook"}>Facebook</MenuItem>
            <MenuItem value={"Tiktok"}>Tiktok</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        label="Link"
        name="Link"
        variant="outlined"
        {...register("link")}
      />

      <AddMedia onClick={() => handleAddMedia()}>
        {selectedMedia ? "Edit Media" : "Add Media"}{" "}
      </AddMedia>
    </AddMediaForm>
  );
}
