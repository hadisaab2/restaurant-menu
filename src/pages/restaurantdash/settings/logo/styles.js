import styled from "styled-components";
import { breakingPoints, dashboardColors } from "../../../../styles/theme";

const accent = dashboardColors.mainColor;
const cardBorder = "rgba(148, 163, 184, 0.22)";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 16px;
  padding: 24px 24px 28px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.07);
  border: 1px solid ${cardBorder};
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 18px 16px 22px;
    max-width: 100%;
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #64748b;
  max-width: 32rem;
`;

export const PreviewPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  padding: 24px 20px;
  border-radius: 14px;
  border: 2px dashed rgba(148, 163, 184, 0.45);
  background: linear-gradient(
    180deg,
    rgba(94, 171, 177, 0.06) 0%,
    rgba(248, 250, 252, 0.9) 100%
  );
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: rgba(94, 171, 177, 0.45);
  }
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.12);
`;

export const PreviewPlaceholder = styled.div`
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  max-width: 260px;
`;

export const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const SpecsBox = styled.div`
  margin: 0;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(94, 171, 177, 0.08);
  border: 1px solid rgba(94, 171, 177, 0.2);
  font-size: 0.8125rem;
  line-height: 1.55;
  color: #475569;
`;

export const SpecsTitle = styled.strong`
  display: block;
  margin-bottom: 6px;
  color: #334155;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const ErrorText = styled.span`
  font-size: 0.8125rem;
  color: #dc2626;
  font-weight: 500;
`;

export const ChooseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fff;
  background: linear-gradient(135deg, ${accent} 0%, #4a9499 100%);
  box-shadow: 0 4px 14px rgba(94, 171, 177, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(94, 171, 177, 0.42);
  }

  &:active {
    transform: translateY(0);
  }
`;
