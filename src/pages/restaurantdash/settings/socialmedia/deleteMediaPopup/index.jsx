import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteMediaQuery } from "../../../../../apis/socialMedia/deleteSocialMedial";

export default function DeleteMediaPopup({
  isOpen,
  setIsOpen,
  selectedIdForAction,
  refetchMedia,
  setSelectedIdFroAction,
}) {
  const { isPending, handleApiCall } = useDeleteMediaQuery({
    onSuccess: () => {
      refetchMedia();
      setIsOpen(false);
      setSelectedIdFroAction(null);
    },
  });
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => handleApiCall(selectedIdForAction);

  return (
    <React.Fragment>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Delete Media</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this Media ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton onClick={handleDelete} loading={isPending}>
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
