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

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  padding: 2rem;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    z-index: 1;
    position: relative;

    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    max-width: 400px;
    z-index: 1;
    position: relative;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      max-width: 300px;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      max-width: 250px;
    }
  }

  @media (max-width: 768px) {
    min-height: 50vh;
    width: 100%;
    padding: 1.5rem;
  }

  &:hover {
    flex: 1.2;

    @media (max-width: 768px) {
      flex: 1;
    }
  }

  &:hover::after {
    opacity: 0;
  }
`;

const ChoosePathButton = styled(motion.button)`
  display: inline-block;
  background: linear-gradient(45deg, rgba(100, 255, 218, 0.2) 0%, rgba(0, 180, 216, 0.2) 100%);
  border: 1.5px solid rgba(100, 255, 218, 0.4);
  color: #e2e8f0;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  margin-top: 2rem;
  z-index: 1;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
    margin-top: 1.5rem;
  }

  &:hover {
    background: linear-gradient(45deg, rgba(0, 180, 216, 0.3) 0%, rgba(100, 255, 218, 0.3) 100%);
    border-color: rgba(0, 180, 216, 0.6);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

const WebDevPath = styled(PathOption)<{ backgroundImageUrl: string }>`
  background: url(${({ backgroundImageUrl }) => backgroundImageUrl}) center / cover no-repeat;
  color: rgb(161, 253, 255);

  @media (max-width: 768px) {
    background-position: center;
  }
`;

const TradingPath = styled(PathOption)<{ backgroundImageUrl: string }>`
  background: url(${({ backgroundImageUrl }) => backgroundImageUrl}) no-repeat center right;
  background-size: cover;
  color: ${TRADER_ACCENT_COLOR};

  @media (max-width: 768px) {
    background-position: center;
  }

  &:hover {
    flex: 1.2;

    @media (max-width: 768px) {
      flex: 1;
    }
  }
`;

const PathOverlay = styled.div<{ isParentHovered?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
  transition: opacity 0.3s ease;
  opacity: ${({ isParentHovered }) => (isParentHovered ? 0 : 1)};

  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.6);
  }
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
        <ChoosePathButton
          onClick={() => handlePathSelect('webdev')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Web Dev Portfolio
        </ChoosePathButton>
      </WebDevPath>
      <TradingPath
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
        <ChoosePathButton
          onClick={() => handlePathSelect('trading')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Trading Portfolio
        </ChoosePathButton>
      </TradingPath>
    </ChoosePathSection>
  );
};

export default ChoosePath;