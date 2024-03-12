import React, { useState } from "react";
import {
  AddMediaForm,
  Table,
  Th,
  Td,
  EditDeleteIcons,
  Edit,
  Delete,
  AddMedia,
  BackIcon
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

export default function SocialMedia() {
  const [showAddComponent, setShowAddComponent] = useState(false);
  const[selectedMedia,setSelectedMedia]=useState(null)
  const [media, setMedia] = useState([
    {
      mediatype: "Instagram",
      link: "www.instagram.com/addict",
    },
    {
      mediatype: "Facebook",
      link: "www.facebook.com/addict",
    },
  ]);

  const [mediaType, setMediaType] = useState("");
  const handleChange = (event) => {
    setMediaType(event.target.value);
  };

  const handleEdit= (media)=>{
    setShowAddComponent(true)
    setSelectedMedia(media)
   }
  return (
    <>
      {showAddComponent ? (
          <AddEditMedia setShowAddComponent={setShowAddComponent} selectedMedia={selectedMedia} setSelectedMedia={setSelectedMedia}/>
      ) : (
        <>
        <AddMedia onClick={() => setShowAddComponent(true)} >
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
            {media.map((media) => {
              return (
                <tr>
                  <Td>{media.mediatype}</Td>
                  <Td>
                    <a href="#">{media.link}</a>
                  </Td>
                  <Td>
                    <EditDeleteIcons>
                    <Edit  onClick={()=>handleEdit(media)}/>
                      <Delete />
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
