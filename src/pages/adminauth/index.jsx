import React, { useState } from "react";
import {
  Container,
  ErrorMessage,
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
import { isNull } from "lodash";

export default function AdminSignin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const onSuccess = ({ data: { accessToken } }) => {
    const decodedToken = jwtDecode(accessToken);
    setCookie("accessToken", accessToken);
    setCookie("userInfo", JSON.stringify(decodedToken));
    localStorage.setItem("isLoggedIn", "true");
    setErrorMessage(null);

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
    onError: () => {
      setErrorMessage("Invalid credentials");
    },
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
            error={!isNull(errorMessage)}
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            name="password"
            style={inputStyle}
            onChange={handleOnChange}
            error={!isNull(errorMessage)}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button variant="contained" onClick={handleOnSubmit}>
            sign in
          </Button>
        </InputsContainer>
      </FormContainer>
    </Container>
  );
}
