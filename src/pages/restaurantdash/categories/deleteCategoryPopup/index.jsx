import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDeleteCategoryQuery } from "../../../../apis/categories/deleteCategory";
import { LoadingButton } from "@mui/lab";

export default function DeleteCategoryPopup({
  isOpen,
  setIsOpen,
  selectedIdForAction,
  refetchCategories,
  setSelectedIdForAction,
  refetchProductsHandler,
}) {
  const { isPending, handleApiCall } = useDeleteCategoryQuery({
    onSuccess: () => {
      refetchCategories();
      refetchProductsHandler();
      setIsOpen(false);
      setSelectedIdForAction(null);
    },
  });
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => handleApiCall(selectedIdForAction);

  return (
    <React.Fragment>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Delete Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this category with all corresponding
            products?
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
