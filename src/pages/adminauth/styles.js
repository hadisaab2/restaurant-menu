import styled from "styled-components";
import { breakingPoints } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: linear-gradient(135deg, #dce5fd 0%, #f3f7ff 50%, #fdf2ff 100%);
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 420px;
  min-height: 380px;
  padding: 28px 32px;
  box-shadow: 0 10px 30px rgba(90, 97, 105, 0.18);
  background-color: ${props => props.theme.backgroundColor || "#ffffff"};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  backdrop-filter: blur(8px);

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 20px 18px;
    max-width: 90%;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 8px;
`;

/* 🔹 New: logo wrapper + image */
export const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: #ffffff;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.16);
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  margin-top: 10px;
  color: #1f2933;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 0;
  margin-top: 6px;
  line-height: 1.4;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 13px;
  }
`;

export const inputStyle = {
  width: "80%",
};

export const ErrorMessage = styled.p`
  color: #e02424;
  font-size: 13px;
  width: 80%;
  text-align: center;

  /* Make it feel like it's above the button, not the password */
  margin-top: 2px;      /* small space from password */
  margin-bottom: -4px;  /* pulls it closer to the button */

  align-self: center;
`;


