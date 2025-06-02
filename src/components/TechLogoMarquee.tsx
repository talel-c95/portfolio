import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  margin: 4rem 0;
`;

const MarqueeContent = styled(motion.div)`
  display: flex;
  width: fit-content; /* Important for continuous scroll */
  align-items: center;
`;

const LogoItem = styled.div`
  padding: 0 2rem;
  flex-shrink: 0;
  color: #64ffda;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const technologies = [
  'JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'Django', 'Flask', 'PHP', 'Laravel', 'Symfony', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'SQL', 'MongoDB', 'Docker', 'AWS', 'Azure', 'Git'
];

const TechLogoMarquee: React.FC = () => {
  // Duplicate technologies for infinite loop effect
  const duplicatedTechnologies = [...technologies, ...technologies];

  const marqueeVariants = {
    animate: {
      x: ['0%', '-50%'], // Move from 0% to -50% of the total width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // Adjust duration for speed
          ease: 'linear',
        },
      },
    },
  };

  return (
    <MarqueeContainer>
      <MarqueeContent
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedTechnologies.map((tech, index) => (
          <LogoItem key={index}> {tech} </LogoItem>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default TechLogoMarquee; 