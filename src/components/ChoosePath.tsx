import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TRADER_ACCENT_COLOR, TRADER_SECONDARY_COLOR } from './TraderPortfolioConcept'; // Corrected import path
import tradingBackground from '../images/im1.jpg'; // Import the trading background image
import webdevBackground from '../images/download.jpg'; // Import the webdev background image

const ChoosePathSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const PathOption = styled(motion.div)`
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    z-index: 1;
    position: relative; /* Ensure text is above overlay */
  }

  &:hover {
    flex: 1.2; /* Expand slightly on hover */
  }

  &:hover::after {
    opacity: 0; /* Remove overlay on hover */
  }
`;

const WebDevPath = styled(PathOption)<{ backgroundImageUrl: string }>`
  background: url(${({ backgroundImageUrl }) => backgroundImageUrl}) center / cover no-repeat;
  color:rgb(161, 253, 255); /* Accent color */
`;

const TradingPath = styled(PathOption)<{ backgroundImageUrl: string }>`
  background: url(${({ backgroundImageUrl }) => backgroundImageUrl}) no-repeat center right;
  background-size: cover;
  color: ${TRADER_ACCENT_COLOR}; /* Use trader accent color for text */

  &:hover {
    flex: 1.2; /* Expand slightly on hover */
  }

  /* Optional: Update background gradient or overlay color */
  /* background: linear-gradient(to left, #1a1a1a 0%, ${TRADER_SECONDARY_COLOR} 100%); */
`;

const PathOverlay = styled.div<{ isParentHovered?: boolean }>`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: 0;
  transition: opacity 0.3s ease;
  opacity: ${({ isParentHovered }) => (isParentHovered ? 0 : 1)};
`;

interface ChoosePathProps {
  onPathSelect: (path: 'webdev' | 'trading') => void;
}

const ChoosePath: React.FC<ChoosePathProps> = ({ onPathSelect }) => {
  const [isTradingHovered, setIsTradingHovered] = useState(false);
  const [isWebDevHovered, setIsWebDevHovered] = useState(false);

  const handlePathSelect = (path: 'webdev' | 'trading') => {
    console.log(`Path selected: ${path}`);
    onPathSelect(path);
  };

  return (
    <ChoosePathSection id="choose-path">
      <WebDevPath
        onClick={() => handlePathSelect('webdev')}
        onMouseEnter={() => setIsWebDevHovered(true)}
        onMouseLeave={() => setIsWebDevHovered(false)}
        backgroundImageUrl={webdevBackground}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <PathOverlay isParentHovered={isWebDevHovered} />
        <h2>Full Stack Developer</h2>
        <p>Explore my coding projects, frameworks, and technical skills.</p>
      </WebDevPath>
      <TradingPath
        onClick={() => handlePathSelect('trading')}
        onMouseEnter={() => setIsTradingHovered(true)}
        onMouseLeave={() => setIsTradingHovered(false)}
        backgroundImageUrl={tradingBackground}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <PathOverlay isParentHovered={isTradingHovered} />
        <h2>Financial Trader</h2>
        <p>See my work in quantitative analysis, trading systems, and finance.</p>
      </TradingPath>
    </ChoosePathSection>
  );
};

export default ChoosePath;