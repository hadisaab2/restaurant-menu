import styled from "styled-components";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { breakingPoints } from "../../../../styles/theme";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  position: relative;
  padding-top: 40px;
  margin-top: 20px;
  width: 60%;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;

  }
`;

export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
`;

export const UploadPhoto = styled.input`
  display: none;
`;

export const Row = styled.div`
  width: 100%;
`;

export const UploadBtn = styled.button`
  width: 150px;
  height: 40px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  background-color: turquoise;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
`;

export const UploadedImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const fieldStyle = {
  width: "40%",
};

export const UploadImageText = styled.p`
  /* align-self: flex-end; */
  margin-left: 20px;
  font-size: 13px;
  color: red;
`;


const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};


export const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 40%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${grey[900]};
  background:transparent;
  border: 1px solid rgba(0, 0, 0, 0.23);
  box-shadow: 0px 2px 2px ${grey[50]};

  &:hover {
    border-color: #1976d2;
  }

  &:focus {
    border-color: #1976d2;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);