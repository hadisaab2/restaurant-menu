import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Title,
  AddSliderImage,
  ImageGrid,
  ImageCard,
  ImagePreview,
  ImageActions,
  Edit,
  Delete,
  PriorityInput,
  UploadBtn,
  UploadPhoto,
  UploadedImage,
  UploadImageText,
  BackIcon,
  FormContainer,
  FormTitle,
  SaveButton,
  SectionTitle,
  HomepageCoverSection,
} from "./styles";
import { useGetSliderImages } from "../../../../apis/sliderImages/getSliderImages";
import { useAddSliderImageQuery } from "../../../../apis/sliderImages/addSliderImage";
import { useEditSliderImageQuery } from "../../../../apis/sliderImages/editSliderImage";
import { useDeleteSliderImageQuery } from "../../../../apis/sliderImages/deleteSliderImage";
import { getCookie } from "../../../../utilities/manageCookies";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";

export default function SliderImages() {
  const [sliderImages, setSliderImages] = useState([]);
  const [homepageCoverImage, setHomepageCoverImage] = useState(null);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [currentImageType, setCurrentImageType] = useState(1); // 1 = slider, 2 = homepage cover
  const [selectedIdForAction, setSelectedIdForAction] = useState(null);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [priority, setPriority] = useState(0);
  const [fileErrMsg, setFileErrMsg] = useState("Please upload image");
  const fileInputRef = useRef(null);
  
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation] = useState(JSON.parse(storedUserInfo));

  const { response, refetch, isLoading } = useGetSliderImages({
    onSuccess: () => {},
    restaurant_id: userInformation.restaurant_id,
  });

  const { handleApiCall: addSliderImage, isPending: isAdding } = useAddSliderImageQuery({
    onSuccess: () => {
      toast.success("Image added successfully");
      resetForm();
      refetchSliderImages();
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || "Failed to add image";
      toast.error(errorMessage);
    },
  });

  const { handleApiCall: editSliderImage, isPending: isEditing } = useEditSliderImageQuery({
    onSuccess: () => {
      toast.success("Image updated successfully");
      resetForm();
      refetchSliderImages();
    },
    onError: () => {
      toast.error("Failed to update image");
    },
  });

  const { handleApiCall: deleteSliderImage, isPending: isDeleting } = useDeleteSliderImageQuery({
    onSuccess: () => {
      toast.success("Image deleted successfully");
      refetchSliderImages();
    },
    onError: () => {
      toast.error("Failed to delete image");
    },
  });

  const refetchSliderImages = () => {
    refetch().then(({ data }) => {
      const allImages = data?.data || [];
      // Separate slider images (type 1) and homepage cover (type 2)
      setSliderImages(allImages.filter(img => img.type === 1 || !img.type));
      setHomepageCoverImage(allImages.find(img => img.type === 2));
    });
  };

  useEffect(() => {
    if (!isLoading && response?.data) {
      const allImages = response.data;
      // Separate slider images (type 1) and homepage cover (type 2)
      setSliderImages(allImages.filter(img => img.type === 1 || !img.type));
      setHomepageCoverImage(allImages.find(img => img.type === 2));
    }
  }, [isLoading, response]);

  const handleFileChange = ({ target }) => {
    if (target.files[0]) {
      const uploadedFile = target.files[0];
      const fileSizeInMB = uploadedFile.size / (1024 * 1024);
      if (fileSizeInMB > 4) {
        setFileErrMsg("Image is greater than 4MB");
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

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleOnDeleteImage = () => {
    setImageUrl(null);
    setFile(null);
  };

  const resetForm = () => {
    setShowAddComponent(false);
    setSelectedIdForAction(null);
    setFile(null);
    setImageUrl(null);
    setPriority(0);
    setCurrentImageType(1);
    setFileErrMsg("Please upload image");
  };

  const handleEdit = (sliderImage) => {
    setSelectedIdForAction(sliderImage.id);
    setPriority(sliderImage.priority || 0);
    setCurrentImageType(sliderImage.type || 1);
    setImageUrl(`https://storage.googleapis.com/ecommerce-bucket-testing/${sliderImage.url}`);
    setShowAddComponent(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      deleteSliderImage(id);
    }
  };

  const handleAddHomepageCover = () => {
    if (homepageCoverImage) {
      toast.warning("Homepage cover image already exists. Please edit or delete it first.");
      return;
    }
    setCurrentImageType(2);
    setShowAddComponent(true);
  };

  const handleEditHomepageCover = () => {
    if (homepageCoverImage) {
      handleEdit(homepageCoverImage);
    }
  };

  const handleSave = () => {
    if (!selectedIdForAction && !file) {
      toast.error("Please upload an image");
      return;
    }

    const payload = {
      restaurant_id: userInformation.restaurant_id,
      priority: parseInt(priority) || 0,
      type: currentImageType || 1, // Ensure type is always set, default to 1 (slider image)
    };

    if (file) {
      payload.file = file;
    }

    if (selectedIdForAction) {
      editSliderImage({ id: selectedIdForAction, ...payload });
    } else {
      addSliderImage(payload);
    }
  };

  return (
    <Container>
      {showAddComponent ? (
        <FormContainer>
          <BackIcon onClick={resetForm}>← Back</BackIcon>
          <FormTitle>
            {selectedIdForAction ? "Edit" : "Add"} {currentImageType === 2 ? "Homepage Cover" : "Slider"} Image
          </FormTitle>
          
          <UploadPhoto
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          
          {imageUrl ? (
            <>
              <UploadedImage src={imageUrl} alt="Preview" />
              <SaveButton
                variant="contained"
                color="error"
                onClick={handleOnDeleteImage}
              >
                Remove Image
              </SaveButton>
            </>
          ) : (
            <UploadBtn onClick={handleButtonClick}>Upload Image</UploadBtn>
          )}
          
          {!imageUrl && !file && (
            <UploadImageText>{fileErrMsg}</UploadImageText>
          )}

          {currentImageType === 1 && (
            <TextField
              label="Priority"
              type="number"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              style={{ width: "100%", maxWidth: "300px", marginTop: "20px" }}
              helperText="Higher priority images appear first"
            />
          )}

          <LoadingButton
            variant="contained"
            onClick={handleSave}
            loading={isAdding || isEditing}
            style={{ marginTop: "20px", width: "100%", maxWidth: "300px" }}
          >
            {selectedIdForAction ? "Update" : "Add"} {currentImageType === 2 ? "Homepage Cover" : "Slider"} Image
          </LoadingButton>
        </FormContainer>
      ) : (
        <>
          {/* Homepage Cover Image Section */}
          <HomepageCoverSection>
            <SectionTitle>Homepage Cover Image</SectionTitle>
            {homepageCoverImage ? (
              <ImageCard>
                <ImagePreview
                  src={`https://storage.googleapis.com/ecommerce-bucket-testing/${homepageCoverImage.url}`}
                  alt="Homepage Cover"
                />
                <ImageActions>
                  <Edit onClick={handleEditHomepageCover} />
                  <Delete onClick={() => handleDelete(homepageCoverImage.id)} />
                </ImageActions>
              </ImageCard>
            ) : (
              <>
                <AddSliderImage onClick={handleAddHomepageCover}>
                  Add Homepage Cover Image
                </AddSliderImage>
                <p style={{ marginTop: "10px", color: "#666", fontSize: "14px" }}>
                  Upload one image to display at the top of your homepage
                </p>
              </>
            )}
          </HomepageCoverSection>

          {/* Slider Images Section */}
          <div style={{ marginTop: "40px" }}>
            <Title>Slider Images (Maximum 4 images)</Title>
            <AddSliderImage 
              onClick={() => {
                if (sliderImages.length >= 4) {
                  toast.warning("Maximum 4 slider images allowed");
                  return;
                }
                setCurrentImageType(1);
                setShowAddComponent(true);
              }}
              disabled={sliderImages.length >= 4}
            >
              Add Slider Image ({sliderImages.length}/4)
            </AddSliderImage>
            
            <ImageGrid>
              {sliderImages.map((sliderImage) => (
                <ImageCard key={sliderImage.id}>
                  <ImagePreview
                    src={`https://storage.googleapis.com/ecommerce-bucket-testing/${sliderImage.url}`}
                    alt={`Slider ${sliderImage.id}`}
                  />
                  <PriorityInput
                    type="number"
                    value={sliderImage.priority || 0}
                    onChange={(e) => {
                      const newPriority = parseInt(e.target.value) || 0;
                      editSliderImage({
                        id: sliderImage.id,
                        priority: newPriority,
                      });
                    }}
                    placeholder="Priority"
                  />
                  <ImageActions>
                    <Edit onClick={() => handleEdit(sliderImage)} />
                    <Delete onClick={() => handleDelete(sliderImage.id)} />
                  </ImageActions>
                </ImageCard>
              ))}
            </ImageGrid>
            
            {sliderImages.length === 0 && (
              <p style={{ marginTop: "20px", color: "#666" }}>
                No slider images added yet. Add up to 4 images for your homepage slider.
              </p>
            )}
          </div>
        </>
      )}
    </Container>
  );
}
