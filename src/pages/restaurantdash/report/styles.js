import styled, { keyframes } from "styled-components";
import { breakingPoints } from "../../../styles/theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;
  padding-bottom: 60px;
  animation: ${fadeUp} 0.35s ease both;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 14px;
    margin-top: 14px;
  }
`;

export const Hero = styled.div`
  border-radius: 20px;
  padding: 32px 32px 28px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 22px 18px 20px;
    border-radius: 14px;
  }
`;

export const HeroTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, #5eabb1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`;

export const HeroSubtitle = styled.p`
  margin: 6px 0 0;
  font-size: 13px;
  opacity: 0.55;
  position: relative;
  max-width: 480px;
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(148,163,184,0.18);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(15,23,42,0.07);
  animation: ${fadeUp} 0.4s ease both;
  animation-delay: ${(p) => p.$delay || "0s"};

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 20px 16px;
    border-radius: 12px;
  }
`;

export const SectionLabel = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
`;

export const PresetsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`;

export const PresetBtn = styled.button`
  padding: 9px 20px;
  border-radius: 10px;
  border: 1.5px solid ${(p) => (p.$active ? "#5eabb1" : "#e2e8f0")};
  background: ${(p) => (p.$active ? "rgba(94,171,177,0.1)" : "#ffffff")};
  color: ${(p) => (p.$active ? "#5eabb1" : "#64748b")};
  font-size: 13px;
  font-weight: ${(p) => (p.$active ? "700" : "500")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #5eabb1;
    color: #5eabb1;
  }
`;

export const DateRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4px;
`;

export const DateInput = styled.input`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1.5px solid #e2e8f0;
  font-size: 13px;
  color: #334155;
  background: #f8fafc;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  min-width: 150px;

  &:focus {
    border-color: #5eabb1;
    box-shadow: 0 0 0 3px rgba(94,171,177,0.15);
  }
`;

export const DateSep = styled.span`
  font-size: 13px;
  color: #94a3b8;
  font-weight: 500;
`;

export const DownloadBtn = styled.button`
  margin-top: 6px;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #5eabb1 0%, #4d9aa0 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(94,171,177,0.3);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.5s ease;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(94,171,177,0.4);
    &::after { left: 120%; }
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2.5px solid rgba(255,255,255,0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
  display: inline-block;
`;

export const PreviewCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 22px;
  margin-top: 8px;
`;

export const PreviewTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #475569;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const PreviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 20px;

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const PreviewItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: #475569;
  padding: 6px 0;
`;

export const CheckIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgba(16,185,129,0.1);
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
`;
