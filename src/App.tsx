import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronLeft } from 'react-icons/fa';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChoosePath from './components/ChoosePath';
import TraderPortfolioConcept from './components/TraderPortfolioConcept';
import TechLogoMarquee from './components/TechLogoMarquee';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 1002;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: scale(1.05);
  }
`;

const MobileNav = styled(motion.nav)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    color: #64ffda;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #64ffda;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 80%;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 1002;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: scale(1.05);
  }
`;

const NavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Hero = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  background: linear-gradient(120deg, #1a1a1a 60%, #00b4d8 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroAvatar = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: linear-gradient(135deg, #64ffda 40%, #00b4d8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #232526;
  font-weight: bold;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 3rem;
  }
`;

const AnimatedTagline = styled(motion.div)`
  font-size: 1.3rem;
  color: #b0c4d4;
  margin-bottom: 2rem;
  min-height: 2.2rem;
  letter-spacing: 0.5px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #64ffda 60%, #00b4d8 100%);
  color: #232526;
  font-weight: 600;
  padding: 0.85rem 2.2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  margin-top: 1.2rem;
  box-shadow: 0 2px 12px 0 rgba(100,255,218,0.10);
  transition: background 0.3s, color 0.3s, transform 0.2s;

  @media (max-width: 768px) {
    padding: 0.7rem 1.8rem;
    font-size: 1rem;
  }

  &:hover {
    background: linear-gradient(90deg, #00b4d8 60%, #64ffda 100%);
    color: #fff;
    transform: translateY(-2px) scale(1.04);
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  svg {
    position: absolute;
    opacity: 0.18;
    filter: blur(1px);
    animation: float 7s ease-in-out infinite alternate;
  }
  svg:nth-of-type(2) { left: 80%; top: 10%; width: 80px; animation-delay: 2s; }
  svg:nth-of-type(3) { left: 10%; top: 70%; width: 60px; animation-delay: 4s; }
  svg:nth-of-type(4) { left: 60%; top: 80%; width: 100px; animation-delay: 1s; }
  @keyframes float {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(-30px) scale(1.08); }
  }
`;

const Name = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #64ffda, #00b4d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactInfo = styled(motion.div)`
  color: #8892b0;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SocialIcon = styled(motion.a)`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  &:hover {
    color: #64ffda;
  }
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #64ffda;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .icon {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
  
  .brand {
    background: linear-gradient(90deg, #64ffda, #00b4d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Footer = styled.footer`
  width: 100%;
  background: rgba(26, 26, 26, 0.85);
  color: #b0c4d4;
  text-align: center;
  padding: 2rem 0 1rem 0;
  font-size: 1rem;
  margin-top: 4rem;
  border-top: 1.5px solid rgba(100,255,218,0.12);
`;

interface BackButtonProps {
  $isVisible: boolean;
}

const BackButton = styled(motion.button)<BackButtonProps>`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1001;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border: none;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.3s ease;

  &:hover {
    background: #64ffda;
    color: #222;
    transform: scale(1.1);
  }

  ${({ $isVisible }) => !$isVisible && 'display: none;'}
`;

function useTypewriter(words: string[], speed = 60, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) return;
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink(v => !v), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
}

function App() {
  const [selectedPath, setSelectedPath] = useState<'none' | 'webdev' | 'trading'>('none');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const typewriterText = useTypewriter([
    'Building scalable, beautiful web apps.',
    'Passionate about modern tech & design.',
    'Open to global opportunities.',
    'Let\'s create something amazing!'
  ]);

  const handlePathSelection = (path: 'webdev' | 'trading') => {
    setSelectedPath(path);
  };

  const handleGoBack = () => {
    setSelectedPath('none');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AppContainer>
      <BackButton
        onClick={handleGoBack}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        $isVisible={selectedPath !== 'none'}
        aria-label="Go back to path selection"
      >
        <FaChevronLeft />
      </BackButton>

      {selectedPath === 'webdev' && (
        <Header>
          <Logo>
            <span className="icon">👨‍💻</span>
            <span className="brand">Portfolio</span>
          </Logo>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </Header>
      )}

      {selectedPath === 'webdev' && (
        <MobileNav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}
        >
          <CloseButton
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Close mobile menu"
          >
            ✕
          </CloseButton>
          <MobileNavLink 
            href="#about" 
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </MobileNavLink>
          <MobileNavLink 
            href="#projects" 
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </MobileNavLink>
          <MobileNavLink 
            href="#contact" 
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </MobileNavLink>
        </MobileNav>
      )}

      {selectedPath === 'none' && (
        <ChoosePath onPathSelect={handlePathSelection} />
      )}

      {selectedPath === 'webdev' && (
        <>
          <Hero style={{position:'relative', overflow:'hidden'}}>
            <FloatingShapes>
              <svg width="100" height="100"><circle cx="50" cy="50" r="50" fill="#64ffda" /></svg>
              <svg width="80" height="80"><rect width="80" height="80" rx="20" fill="#00b4d8" /></svg>
              <svg width="60" height="60"><circle cx="30" cy="30" r="30" fill="#fff" /></svg>
              <svg width="100" height="100"><rect width="100" height="100" rx="40" fill="#232526" /></svg>
            </FloatingShapes>
            <HeroAvatar>
              TZ
            </HeroAvatar>
            <Name
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              TALEL ZAMOURI
            </Name>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer
            </Title>
            <AnimatedTagline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {typewriterText}
            </AnimatedTagline>
            <ContactInfo
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mohamed Ali St., Rades &bull; +21625137085 &bull; talelzamouri19@gmail.com
            </ContactInfo>
            <SocialLinks>
              <SocialIcon
                href="https://github.com/talel-c95"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/talel-zamouri-a75b27362/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href="mailto:talelzamouri19@gmail.com"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </SocialIcon>
            </SocialLinks>
            
          </Hero>

          <TechLogoMarquee />

          <About />
          <Projects />
          <Contact />

          <Footer>
            &copy; {new Date().getFullYear()} Talel Zamouri &mdash; Crafted with passion. <br />
            <a href="https://github.com/talel-c95" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="https://linkedin.com/in/talelzamouri" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </Footer>
        </>
      )}

      {selectedPath === 'trading' && (
        <TraderPortfolioConcept />
      )}
    </AppContainer>
  );
}

export default App;
