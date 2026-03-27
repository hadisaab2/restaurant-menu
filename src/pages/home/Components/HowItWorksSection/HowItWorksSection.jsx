import React from "react";
import styled from "styled-components";
import { HiQrCode } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";

const Section = styled.section`
  width: 100%;
  padding: 70px 20px;
  background: #ffffff;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 38px;
  font-weight: 800;
  letter-spacing: -0.6px;
  color: #00112b;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  max-width: 720px;
  font-size: 15px;
  line-height: 1.7;
  color: #666;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StepCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StepCard = styled.div`
  padding: 18px 16px;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #ffffff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);

  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 55, 69, 0.1);
  color: #ff3745;
  flex: 0 0 auto;

  svg {
    font-size: 22px;
  }
`;

const StepText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StepTitle = styled.div`
  font-weight: 800;
  color: #00112b;
  line-height: 1.3;
`;

const StepDesc = styled.div`
  font-size: 14px;
  line-height: 1.65;
  color: #666;
`;

const SideCard = styled.div`
  padding: 22px 18px;
  border-radius: 20px;
  background: linear-gradient(135deg, #00112b 0%, #1d2856 100%);
  color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const SideTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

const SideBullet = styled.div`
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
`;

const CTAButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 14px 18px;
  border-radius: 999px;
  background: #ff3745;
  color: white;
  font-weight: 700;
  font-size: 15px;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    background: #d8121f;
    transform: translateY(-1px);
  }
`;

export default function HowItWorksSection({ onPrimaryCta }) {
  const steps = [
    {
      icon: HiQrCode,
      title: "1) Scan the QR menu",
      desc: "Customers open your digital menu instantly on their phone without printing anything new.",
    },
    {
      icon: IoRestaurantOutline,
      title: "2) Browse and customize",
      desc: "Show categories, item notes, and clear descriptions so customers feel confident ordering.",
    },
    {
      icon: FaWhatsapp,
      title: "3) Place the order on WhatsApp",
      desc: "Orders are delivered through WhatsApp Business for fast, familiar communication.",
    },
    {
      icon: MdOutlinePlace,
      title: "4) Delivery details with maps",
      desc: "Share your address and get delivery handled quickly with accurate location information.",
    },
  ];

  return (
    <Section id="how-it-works">
      <Inner>
        <Header>
          <Title>How it works</Title>
          <Subtitle>
            A simple flow for restaurants: scan, order, and deliver—built to reduce wait time and
            speed up service.
          </Subtitle>
        </Header>

        <StepsGrid>
          <StepCards>
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <StepCard key={idx}>
                  <IconWrap>
                    <Icon />
                  </IconWrap>
                  <StepText>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDesc>{step.desc}</StepDesc>
                  </StepText>
                </StepCard>
              );
            })}
          </StepCards>

          <SideCard>
            <SideTitle>Get your QR menu live</SideTitle>
            <SideBullet>• Launch dine-in and delivery in one setup</SideBullet>
            <SideBullet>• Keep everything updated from your admin panel</SideBullet>
            <SideBullet>• Receive orders on WhatsApp</SideBullet>
            <CTAButton type="button" onClick={() => onPrimaryCta && onPrimaryCta()}>
              Talk to us on WhatsApp
            </CTAButton>
          </SideCard>
        </StepsGrid>
      </Inner>
    </Section>
  );
}

