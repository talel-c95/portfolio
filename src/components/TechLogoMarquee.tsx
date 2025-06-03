import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiPython, SiPhp,
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiDjango, SiFlask, SiLaravel,
  SiMongodb, SiMysql, SiPostgresql, SiPrisma,
  SiDocker, SiAmazonaws, SiMicrosoftazure, SiNginx,
  SiGit, SiGithub, SiFigma, SiPostman, SiVisualstudiocode, SiVercel, SiNetlify,
  SiJest,
  SiGraphql, SiStripe, SiSocketdotio
} from 'react-icons/si';

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
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
  padding: 0 1.5rem;
  flex-shrink: 0;
  font-size: 3rem;
`;

const technologies = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Sass', icon: SiSass, color: '#CC6699' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Prisma', icon: SiPrisma, color: '#5A67D8' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
  { name: 'Microsoft Azure', icon: SiMicrosoftazure, color: '#0078D4' },
  { name: 'Nginx', icon: SiNginx, color: '#269539' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
  { name: 'Jest', icon: SiJest, color: '#C21325' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
  { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
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
          duration: 40, // Adjusted duration for potentially wider logos
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
          <LogoItem key={index}> {React.createElement(tech.icon, { color: tech.color })} </LogoItem>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default TechLogoMarquee; 