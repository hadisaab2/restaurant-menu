import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDeleteProductQuery } from "../../../../../apis/products/deleteProduct";
import { LoadingButton } from "@mui/lab";
import { useQueryClient } from "@tanstack/react-query";

export default function DeleteProductPopup({
  isOpen,
  setIsOpen,
  selectedIdForAction,
  setSelectedIdForAction,
  refetchProducts,
}) {
  const queryClient = useQueryClient();

  const { isPending, handleApiCall } = useDeleteProductQuery({
    onSuccess: () => {
      setSelectedIdForAction(null);
      queryClient.resetQueries(['products'], { exact: true });
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
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
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
