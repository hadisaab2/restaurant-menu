import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const Bone = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.06) 25%,
    rgba(0,0,0,0.10) 37%,
    rgba(0,0,0,0.06) 63%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s infinite linear;
  border-radius: ${props => props.$r || '8px'};
  width: ${props => props.$w || '100%'};
  height: ${props => props.$h || '16px'};
  flex-shrink: 0;
`;

const CardShell = styled.div`
  background: var(--theme-card-bg, #fff);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const CardImg = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: rgba(0,0,0,0.06);
`;

const CardBody = styled.div`
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const GridWrap = styled.div`
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export function ProductListSkeleton({ count = 6 }) {
  return (
    <GridWrap>
      {Array.from({ length: count }).map((_, i) => (
        <CardShell key={i}>
          <CardImg><Bone $r="0" $h="100%" /></CardImg>
          <CardBody>
            <Bone $h="14px" $w="80%" />
            <Bone $h="11px" $w="55%" />
            <Bone $h="13px" $w="40%" $r="6px" />
          </CardBody>
        </CardShell>
      ))}
    </GridWrap>
  );
}
