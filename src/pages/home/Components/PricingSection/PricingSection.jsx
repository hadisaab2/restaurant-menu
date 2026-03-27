import React from "react";
import styled from "styled-components";

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
  gap: 34px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 22px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div`
  padding: 26px 20px;
  border-radius: 22px;
  background: linear-gradient(135deg, #00112b 0%, #1d2856 100%);
  color: rgba(255, 255, 255, 0.96);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
`;

const PopularBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 14px;
`;

const PlanName = styled.div`
  font-size: 22px;
  font-weight: 900;
`;

const PriceRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const Price = styled.div`
  font-size: 44px;
  font-weight: 900;
  letter-spacing: -1px;
`;

const PerYear = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.82);
  font-weight: 700;
`;

const FeatureList = styled.ul`
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Feature = styled.li`
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.86);
  position: relative;
  padding-left: 18px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #ff3745;
  }
`;

const CTAButton = styled.button`
  margin-top: 22px;
  border: none;
  cursor: pointer;
  padding: 14px 18px;
  border-radius: 999px;
  background: #ff3745;
  color: white;
  font-weight: 800;
  font-size: 15px;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    background: #d8121f;
    transform: translateY(-1px);
  }
`;

const AddOnsCard = styled.div`
  padding: 22px 18px;
  border-radius: 22px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.06);
`;

const AddOnsTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: #00112b;
  margin-bottom: 14px;
`;

const AddOn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  padding: 12px 10px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background: rgba(0, 0, 0, 0.01);

  & + & {
    margin-top: 10px;
  }
`;

const AddOnName = styled.div`
  font-weight: 800;
  color: #00112b;
  font-size: 14px;
  line-height: 1.3;
`;

const AddOnPrice = styled.div`
  font-weight: 900;
  color: #00112b;
  font-size: 14px;
  white-space: nowrap;
`;

export default function PricingSection({ onPrimaryCta }) {
  const plan = {
    name: "BASIC PACKAGE",
    price: "$170.00",
    per: "yearly",
    features: [
      "QR MENU (Dine-in & Delivery)",
      "Order items (with quantity & notes)",
      "INFO PAGE (Map, Opening hours, Address, WhatsApp)",
      "Receive orders on WhatsApp (manage menu and clients)",
    ],
  };

  const addOns = [
    { name: "Whish Money integration", price: "$60.00" },
    { name: "Arabic language support", price: "$25.00" },
    { name: "Multi-branch support", price: "$35.00" },
    { name: "Promo code functionality", price: "$30.00" },
  ];

  return (
    <Section id="pricing">
      <Inner>
        <Header>
          <Title>Simple pricing for restaurants</Title>
          <Subtitle>
            Start with a complete QR menu package, then add premium features when you’re ready.
          </Subtitle>
        </Header>

        <Grid>
          <PlanCard>
            <PopularBadge>Popular</PopularBadge>
            <PlanName>{plan.name}</PlanName>
            <PriceRow>
              <Price>{plan.price}</Price>
              <PerYear>{plan.per}</PerYear>
            </PriceRow>

            <FeatureList>
              {plan.features.map((f, idx) => (
                <Feature key={idx}>{f}</Feature>
              ))}
            </FeatureList>

            <CTAButton type="button" onClick={() => onPrimaryCta && onPrimaryCta()}>
              Start your digital journey
            </CTAButton>
          </PlanCard>

          <AddOnsCard>
            <AddOnsTitle>Add-ons</AddOnsTitle>
            {addOns.map((a, idx) => (
              <AddOn key={idx}>
                <AddOnName>{a.name}</AddOnName>
                <AddOnPrice>{a.price}</AddOnPrice>
              </AddOn>
            ))}
          </AddOnsCard>
        </Grid>
      </Inner>
    </Section>
  );
}

