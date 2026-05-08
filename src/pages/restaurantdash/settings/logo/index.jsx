import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  HeaderBlock,
  Title,
  Subtitle,
  PreviewPanel,
  PreviewImage,
  PreviewPlaceholder,
  ActionsRow,
  HiddenFileInput,
  SpecsBox,
  SpecsTitle,
  ErrorText,
  ChooseButton,
} from "./styles";
import { Button } from "@mui/material";
import { useAddOrEditRestaurantLogoQuery } from "../../../../apis/restaurants/addOrEditLogo";
import { useGetRestaurantLogoQuery } from "../../../../apis/restaurants/getRestauarant";
import { getCookie } from "../../../../utilities/manageCookies";
import { LoadingButton } from "@mui/lab";
import { IoCloudUploadOutline } from "react-icons/io5";

const LOGO_IMAGE_BASE =
  "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function Logo({ setSection }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileErrMsg, setFileErrMsg] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation] = useState(JSON.parse(storedUserInfo));

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
    fileInputRef.current?.click();
  };

  const discardStagedFile = () => {
    setFile(null);
    setFileErrMsg(null);
    const path = response?.data?.logoURL;
    setImageUrl(path ? `${LOGO_IMAGE_BASE}${path}` : null);
  };

  useEffect(() => {
    if (isLoading || !response?.data) return;
    const path = response.data.logoURL;
    if (path) {
      setImageUrl(`${LOGO_IMAGE_BASE}${path}`);
    } else {
      setImageUrl(null);
    }
  }, [isLoading, response?.data]);

  const handleFileChange = ({ target }) => {
    if (target.files[0]) {
      const uploadedFile = target.files[0];
      const fileSizeInMB = uploadedFile.size / (1024 * 1024);
      if (fileSizeInMB > 2) {
        setFileErrMsg("Image must be 2MB or smaller.");
        target.value = null;
        return;
      }
      setFileErrMsg(null);
      setFile(target.files[0]);
      const url = URL.createObjectURL(target.files[0]);
      setImageUrl(url);
    }
    target.value = null;
  };

  const hasPreview = Boolean(imageUrl);

  return (
    <Container>
      <HeaderBlock>
        <Title>Restaurant logo</Title>
        <Subtitle>
          This appears in your menu header and share previews. Use a clear,
          horizontal mark for best results on all devices.
        </Subtitle>
      </HeaderBlock>

      <PreviewPanel>
        {hasPreview ? (
          <PreviewImage src={imageUrl} alt="Restaurant logo preview" />
        ) : (
          <PreviewPlaceholder>
            No logo yet. Choose a PNG, JPG, or SVG up to 2&nbsp;MB.
          </PreviewPlaceholder>
        )}
      </PreviewPanel>

      <HiddenFileInput
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/svg+xml,image/webp"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <ActionsRow>
        <ChooseButton type="button" onClick={handleButtonClick}>
          <IoCloudUploadOutline size={20} />
          {hasPreview && !file ? "Replace logo" : "Choose image"}
        </ChooseButton>
        {file && (
          <LoadingButton
            variant="contained"
            loading={isPending}
            onClick={() =>
              handleApiCall(userInformation.restaurant_id, { file })
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "10px",
              px: 2.5,
              boxShadow: "0 4px 14px rgba(94, 171, 177, 0.35)",
              background: "linear-gradient(135deg, #5eabb1 0%, #4a9499 100%)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #4f9ea4 0%, #3d858a 100%)",
              },
            }}
          >
            Save logo
          </LoadingButton>
        )}
        {file && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={discardStagedFile}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "10px",
              borderColor: "rgba(148, 163, 184, 0.55)",
              color: "#64748b",
            }}
          >
            Discard upload
          </Button>
        )}
      </ActionsRow>

      {fileErrMsg && <ErrorText>{fileErrMsg}</ErrorText>}

      <SpecsBox>
        <SpecsTitle>Recommended</SpecsTitle>
        Horizontal layout works best. Prefer SVG or PNG with roughly 80×50px
        logical size for crisp menus; avoid very tall logos so the header stays
        balanced.
      </SpecsBox>
    </Container>
  );
}
