import styled, { css } from "styled-components";
import { dashboardColors } from "../../../../styles/theme";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

const accent = dashboardColors.mainColor;
const cardBorder = "rgba(148, 163, 184, 0.2)";

const iconBtn = css`
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(248, 250, 252, 0.95);
  color: #64748b;
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);
  transition: background 0.15s, color 0.15s, transform 0.15s;
  flex-shrink: 0;

  &:active {
    transform: scale(0.98);
  }
`;

export const Container = styled.div`
  width: 100%;
  min-width: 0;
  height: auto;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 0 12px 0;
  border-radius: 16px;
  border: 1px solid ${cardBorder};
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(94, 171, 177, 0.35);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.1);
    transform: translateY(-2px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  min-height: 140px;
  max-height: 200px;
  background: linear-gradient(
    145deg,
    rgba(148, 163, 184, 0.12) 0%,
    rgba(241, 245, 249, 0.95) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img`
  width: ${(props) => (props.JPG ? "auto" : "100%")};
  height: ${(props) => (props.JPG ? "auto" : "100%")};
  max-width: 100%;
  max-height: 100%;
  object-fit: ${(props) => (props.JPG ? "contain" : "cover")};
`;

export const CardActions = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`;

export const EditButton = styled.button`
  ${iconBtn}

  &:hover {
    background: rgba(94, 171, 177, 0.14);
    color: ${accent};
    transform: scale(1.05);
  }
`;

export const DeleteButton = styled.button`
  ${iconBtn}

  &:hover {
    background: rgba(254, 226, 226, 0.95);
    color: #dc2626;
    transform: scale(1.05);
  }
`;

export const EditIcon = styled(MdModeEditOutline)`
  font-size: 1.35rem;
  pointer-events: none;
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding: 12px 14px 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
`;

export const Title = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f172a;
  line-height: 1.35;
  margin-top: 0;
  padding-right: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Category = styled.span`
  margin-top: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #64748b;
  text-transform: capitalize;
`;

export const StatusBadges = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const StatusBadge = styled.span`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.45);
  color: ${(props) => (props.$variant === "hidden" ? "#b45309" : "#b91c1c")};
  background: ${(props) =>
    props.$variant === "hidden"
      ? "rgba(251, 191, 36, 0.15)"
      : "rgba(239, 68, 68, 0.12)"};
`;

export const Delete = styled(MdDelete)`
  font-size: 1.35rem;
  pointer-events: none;
`;
