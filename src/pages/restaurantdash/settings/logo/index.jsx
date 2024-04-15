import React, { useEffect, useRef, useState } from "react";
import { Container, Note } from "./styles";
import {
  Row,
  UploadBtn,
  UploadImageText,
  UploadPhoto,
  UploadedImage,
} from "../../products/addproduct/styles";
import { Button } from "@mui/material";
import { useAddOrEditRestaurantLogoQuery } from "../../../../apis/restaurants/addOrEditLogo";
import { useGetRestaurantLogoQuery } from "../../../../apis/restaurants/getRestauarant";
import { getCookie } from "../../../../utilities/manageCookies";
import { LoadingButton } from "@mui/lab";

export default function Logo({ setSection }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileErrMsg, setFileErrMsg] = useState("Please upload image");
  const [imageUrl, setImageUrl] = useState(null);
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, setUserInformation] = useState(
    JSON.parse(storedUserInfo)
  );

  const { handleApiCall, isPending } = useAddOrEditRestaurantLogoQuery({
    onSuccess: () => {
      setFile(null);
      setImageUrl(null);
      setSection("Products");
    },
  });

  const { isLoading, response } = useGetRestaurantLogoQuery({
    onSuccess: () => {},
    name: userInformation?.restaurant_name,
  });

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleOnDeleteImage = () => {
    setImageUrl(null);
    setFile(null);
  };

  useEffect(() => {
    if (!isLoading && response.data.logoURL) {
      setImageUrl(
        `https://storage.googleapis.com/ecommerce-bucket-testing/${response.data.logoURL}`
      );
    }
  }, [isLoading]);

  const handleFileChange = ({ target }) => {
    if (target.files[0]) {
      const uploadedFile = target.files[0];
      const fileSizeInMB = uploadedFile.size / (1024 * 1024);
      if (fileSizeInMB > 2) {
        setFileErrMsg("Image is greater than 2MB");
        return;
      } else {
        setFileErrMsg("Please upload image");
      }
      setFile(target.files[0]);
      const url = URL.createObjectURL(target.files[0]);
      setImageUrl(url);
    }
    target.value = null;
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <UploadPhoto
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {imageUrl ? (
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {file && (
              <LoadingButton
                variant="contained"
                loading={isPending}
                style={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "turquoise",
                  color: "white",
                  textTransform: "capitalize",
                }}
                onClick={() =>
                  handleApiCall(userInformation.restaurant_id, { file })
                }
              >
                Add
              </LoadingButton>
            )}
            <Button
              variant="contained"
              color="error"
              style={{
                width: "150px",
                height: "40px",
                textTransform: "capitalize",
              }}
              onClick={() => handleOnDeleteImage()}
            >
              Delete
            </Button>
          </Row>
        ) : (
          <UploadBtn onClick={handleButtonClick}>Upload Image</UploadBtn>
        )}
        {!file && !imageUrl && <UploadImageText>{fileErrMsg}</UploadImageText>}
      </Row>

      {imageUrl && <UploadedImage src={imageUrl} alt="Uploaded" />}
      <Note>
      Note: For optimal display, it is recommended that the logo be horizontal with dimensions of 80px in width and 50px in height.
           </Note>
    </Container>

  );
}
