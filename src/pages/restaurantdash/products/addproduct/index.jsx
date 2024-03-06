import React, { useRef, useState } from 'react'
import {
    BackIcon,
    ProductInfo,
    inputStyle,
    UploadPhoto,
    UploadBtn,
    UploadedImage
  } from "./styles";
import {
    Button,
    TextField,
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
  } from "@mui/material";
export default function AddProduct({setEditProduct}) {
    const [age, setAge] = useState("");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
    const handleFileChange = (event) => {
        if (event.target.files[0]) {
          setFile(event.target.files[0]);
          const url = URL.createObjectURL(event.target.files[0]);
          setImageUrl(url);
        }
        event.target.value = null;
      };
    
      const handleButtonClick = () => {
        fileInputRef.current.click();
      };
      const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <ProductInfo>
          <BackIcon onClick={() => setEditProduct(true)} />
          <UploadPhoto type="file" ref={fileInputRef} onChange={handleFileChange}/>
          <UploadBtn onClick={handleButtonClick}>Upload Image</UploadBtn>
          {imageUrl && (
            <UploadedImage src={imageUrl} alt="Uploaded"  />
          )}
          <TextField label="Name" name="Name" variant="outlined" />
          <TextField label="Price" variant="outlined" name="Price" />
          <TextField
            label="Description"
            variant="outlined"
            name="Description"
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" style={{backgroundColor:"turquoise"}}>Add Product</Button>
        </ProductInfo>
  )
}
