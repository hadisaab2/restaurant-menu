import React, { useState } from "react";
import {
  Container,
  FormContainer,
  HeaderContainer,
  InputsContainer,
  SubTitle,
  Title,
  inputStyle,
} from "./styles";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSignInQuery } from "../../apis/users/sign-in";
import { getCookie, setCookie } from "../../utilities/manageCookies";
import { jwtDecode } from "jwt-decode";
import { RESTAURANTDASH, SUPERADMIN } from "../../routes/URLs";

export default function AdminSignin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onSuccess = ({ data: { accessToken } }) => {
    const decodedToken = jwtDecode(accessToken);
    console.log(decodedToken)
    setCookie("accessToken", accessToken);
    setCookie("userInfo", JSON.stringify(decodedToken));
    localStorage.setItem("isLoggedIn", "true");

    if (decodedToken.role_id === 2) {
      navigate(RESTAURANTDASH);
    } else {
      navigate(SUPERADMIN);
    }
  };

  const handleOnChange = ({ target: { value, name } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const { handleApiCall } = useSignInQuery({
    onSuccess,
  });

  const handleOnSubmit = () => handleApiCall(credentials);

  return (
    <Container>
      <FormContainer>
        <HeaderContainer>
          <Title>Welcome To Plateau</Title>
          <SubTitle>
            Access the admin dashboard to manage and control your menu
            effortlessly.
          </SubTitle>
        </HeaderContainer>
        <InputsContainer>
          <TextField
            label="username"
            name="username"
            variant="outlined"
            style={inputStyle}
            onChange={handleOnChange}
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            name="password"
            style={inputStyle}
            onChange={handleOnChange}
          />
          <Button variant="contained" onClick={handleOnSubmit}>
            sign in
          </Button>
        </InputsContainer>
      </FormContainer>
    </Container>
  );
}
