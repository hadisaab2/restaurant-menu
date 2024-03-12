import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteBranchQuery } from "../../../../../apis/branches/deleteBranch";

export default function DeleteBranchPopup({
  isOpen,
  setIsOpen,
  selectedIdForAction,
  refetchBranches,
  setSelectedIdForAction,
}) {
  const { isPending, handleApiCall } = useDeleteBranchQuery({
    onSuccess: () => {
      refetchBranches();
      setSelectedIdForAction(null);
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
        <DialogTitle>Delete Branch</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this Branch ?
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
