import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #fafafa;
  font-family: ${(props) => `${props.theme.font || "system-ui"}, "Noto Kufi Arabic", sans-serif`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
`;

export const BlurOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;
