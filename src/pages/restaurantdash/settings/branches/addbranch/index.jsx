import React, { useEffect } from 'react'
import { AddBranch, AddBranchForm, BackIcon } from './styles'
import { TextField } from '@mui/material'
import { useForm } from "react-hook-form";

export default function AddEditBranch({setShowAddComponent,selectedBranch,setSelectedBranch}) {
  const { register, handleSubmit, getValues,setValue } = useForm();
  const handleAddBranch = () => {
    console.log(getValues());
    handleSubmit((data) => {
      console.log(data);
    })();
  };

  useEffect(()=>{
    if (selectedBranch) {
        const{name,location,maps}=selectedBranch
        setValue("name", name);
        setValue("location", location);
        setValue("maps", maps);
    }
  },[])

  const handleBack = ()=>{
    setSelectedBranch(null)
    setShowAddComponent(false)
  }
  return (
    <AddBranchForm>
          <BackIcon onClick={() => handleBack()} />

          <TextField label="Name" name="Name" variant="outlined" {...register("name")} />
          <TextField label="Location" variant="outlined" name="Location" {...register("location")}  />
          <TextField label="Maps" variant="outlined" name="Maps" {...register("maps")} />
          <AddBranch onClick={()=>handleAddBranch()}>{selectedBranch?"Edit Branch":"Add Branch"}</AddBranch>
        </AddBranchForm>
  )
}
