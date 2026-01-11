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
  LogoWrapper,   // 👈 new
  LogoImage,     // 👈 new
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
          {/* 🔹 Logo on top */}
          <LogoWrapper>
            <LogoImage src="/main-logo.png" alt="Menugic logo" />
          </LogoWrapper>

          <Title>Welcome to Menugic</Title>
          <SubTitle>
            Access your admin dashboard and manage your menu effortlessly.
          </SubTitle>
        </HeaderContainer>

        {/* Form to allow Enter key submit */}
        <form
          style={{ width: "100%" }}
          onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit();
          }}
        >
          <InputsContainer>
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              style={inputStyle}
              onChange={handleOnChange}
              error={!isNull(errorMessage)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              style={inputStyle}
              onChange={handleOnChange}
              error={!isNull(errorMessage)}
            />

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            <Button
              variant="contained"
              type="submit"
              style={{ width: "80%", marginTop: "10px" }}
            >
              Sign in
            </Button>
          </InputsContainer>
        </form>
      </FormContainer>
    </Container>
  );
}
