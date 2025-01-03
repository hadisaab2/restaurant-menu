import React, { useEffect, useState } from "react";
import {
  AddMediaForm,
  Table,
  Th,
  Td,
  EditDeleteIcons,
  Edit,
  Delete,
  AddMedia,
  BackIcon,
} from "./styles";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Box,
} from "@mui/material";
import AddEditMedia from "./addmedia";
import { useGetSocialMedia } from "../../../../apis/socialMedia/getSocialMedia";
import { getCookie } from "../../../../utilities/manageCookies";
import DeleteMediaPopup from "./deleteMediaPopup";

export default function SocialMedia() {
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedIdForAction, setSelectedIdFoRAction] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [media, setMedia] = useState([]);
  const storedUserInfo = getCookie("userInfo") || "{}";
  const [userInformation, _] = useState(JSON.parse(storedUserInfo));

  const { refetch, response, isLoading } = useGetSocialMedia({
    onSuccess: () => {},
    restaurant_id: userInformation.restaurant_id,
  });

  const refetchMedia = () => {
    refetch().then(({ data: { data } }) => setMedia(data));
  };
  const handleEdit = (media) => {
    setSelectedMedia(media);
    setShowAddComponent(true);
  };

  useEffect(() => {
    if (!isLoading) {
      setMedia(response?.data);
    }
  }, [isLoading]);

  return (
    <>
      {showAddComponent ? (
        <AddEditMedia
          setShowAddComponent={setShowAddComponent}
          selectedMedia={selectedMedia}
          setSelectedMedia={setSelectedMedia}
          refetchMedia={refetchMedia}
          userInformation={userInformation}
          media={media}
        />
      ) : (
        <>
          <DeleteMediaPopup
            isOpen={isPopupOpen}
            setIsOpen={setIsPopupOpen}
            refetchMedia={refetchMedia}
            selectedIdForAction={selectedIdForAction}
            setSelectedIdFroAction={setSelectedIdFoRAction}
          />
          <AddMedia onClick={() => setShowAddComponent(true)}>
            Add Media
          </AddMedia>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Link</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {media?.map((media) => {
                return (
                  <tr>
                    <Td>{media.platform}</Td>
                    <Td>
                      <a href="#">{media.link}</a>
                    </Td>
                    <Td>
                      <EditDeleteIcons>
                        <Edit onClick={() => handleEdit(media)} />
                        <Delete
                          onClick={() => {
                            setSelectedIdFoRAction(media.id);
                            setIsPopupOpen(true);
                          }}
                        />
                      </EditDeleteIcons>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}
