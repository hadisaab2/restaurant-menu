import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteRestaurantQuery } from "../../../../apis/restaurants/deleteRestauarant";

export default function DeleteRestaurantPopup({
  isOpen,
  setIsOpen,
  selectedIdForAction,
  refetchRestaurant,
}) {
  const { isPending, handleApiCall } = useDeleteRestaurantQuery({
    onSuccess: () => {
      refetchRestaurant();
      setIsOpen(false);
    },
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => handleApiCall(selectedIdForAction);

  return (
    <React.Fragment>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Delete Restaurant</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this restaurant?
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
