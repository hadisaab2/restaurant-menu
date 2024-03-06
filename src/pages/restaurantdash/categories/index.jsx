import React, { useState } from 'react'
import { Container,Category, CategoriesContainer,AddCategory, Edit, Delete,Actions, BackIcon ,AddCategoryForm} from './styles'
import { TextField } from '@mui/material';

export default function Categories() {
    const [showAddComponent, setShowAddComponent] = useState(false);
    const[categories,setcategories]=useState([1,2,3,4,5])
  return (
    <Container>

        {showAddComponent? 
            <AddCategoryForm>
            <BackIcon onClick={() => setShowAddComponent(false)} />
  
            <TextField label="Name" name="Name" variant="outlined" />
            <AddCategory>Add Category</AddCategory>
          </AddCategoryForm>
          :<>
          <AddCategory onClick={() => setShowAddComponent(true)}>Add Category</AddCategory>
        <CategoriesContainer>
        {categories.map((category)=>{
            return(
                <Category>Category Name

                    <Actions>
                        <Edit/>
                        <Delete/>
                    </Actions>
                </Category>
            )
        })}
        </CategoriesContainer>
          </>    
    }
        
    </Container>
  )
}
