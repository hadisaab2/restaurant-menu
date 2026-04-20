import styled from "styled-components";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { breakingPoints, dashboardColors } from "../../../../styles/theme";
import { MdDelete } from "react-icons/md";

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0;
  row-gap: 0;
  position: relative;
  padding-top: 40px;
  margin-top: 20px;
  width:${props=>props.activeTab=="formbuilder"?"100%":"60%"};
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const Delete = styled(MdDelete)`
  font-size: 15px;
  cursor: pointer;

`;
export const ButtonsContainer = styled.div`
width: 100%;
height:30px;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const CoverImage = styled.button`
  /* width: 150px; */
  height: 20px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${dashboardColors.mainColor};
  font-weight: 500;
  font-size: 10px;

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

export const ImagesContainer = styled.div`
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
`;
export const UploadedImageContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 50%;
  }
`;

export const UploadedImageWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;

`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;


`;
export const UploadBtn = styled.div`
   width: 100%;
  height: 150px;
  background-color: transparent;
  border:1px solid  #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:10px;
  border-radius: 5px;
`;



/** MUI `sx` for product details tab fields (use inside a grid: full width of cell). */
export const productFormFieldSx = {
  width: "100%",
  mb: 0,
  alignSelf: "stretch",
};

export const fieldStyle = productFormFieldSx;

/** TipTap / ProseMirror: match MUI outlined field, tall editing area */
export const productRichTextWrapperSx = {
  ...productFormFieldSx,
  display: "flex",
  flexDirection: "column",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: 1,
  overflow: "hidden",
  minHeight: 260,
  "&:focus-within": {
    borderColor: "primary.main",
  },
  "& .product-rich-text-content": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 200,
  },
  "& .ProseMirror": {
    flex: 1,
    minHeight: 200,
    padding: "12px 14px",
    outline: "none",
    fontSize: "1rem",
    lineHeight: 1.5,
    "&:focus": {
      outline: "none",
    },
    "& p.is-editor-empty:first-child::before": {
      content: "attr(data-placeholder)",
      float: "left",
      color: "rgba(0, 0, 0, 0.38)",
      pointerEvents: "none",
      height: 0,
    },
  },
};

export const UploadImageText = styled.p`
  /* align-self: flex-end; */
  margin-left: 20px;
  font-size: 13px;
  color: red;
`;
export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
  justify-content: center;
  align-items: center;
`;
 

export const Tab = styled.div`
padding: 10px;
border-radius: 5px;
background-color:${props=>props.activeTab==props.tab?dashboardColors.mainColor:"null"};
color:${props=>props.activeTab==props.tab?"white":"black"};

`;
 