import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ProjectsGridWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);

  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }

  &:hover {
    transform: scale(1.03) translateY(-8px);
    box-shadow: 0 6px 24px rgba(100,255,218,0.10);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #2d2d2d;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 180px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  h3 {
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
    }
  }

  p {
    color: #8892b0;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 1.2rem;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 1.2rem;
  }
`;

const Tech = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const ProjectLink = styled(motion.a)`
  color: #ffffff;
  font-size: 1.25rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  &:hover {
    color: #64ffda;
  }
`;

const NavButton = styled(motion.button)`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border: none;
  padding: 0.75rem 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 1.5rem;
  }

  &:hover {
    background: #64ffda;
    color: #222;
  }
`;

const PrevButton = styled(NavButton)`
  left: -3.5rem;

  @media (max-width: 768px) {
    left: -2.5rem;
  }
`;

const NextButton = styled(NavButton)`
  right: -3.5rem;

  @media (max-width: 768px) {
    right: -2.5rem;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;
const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? '#64ffda' : '#233554')};
  transition: background 0.3s;
  cursor: pointer;
`;

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const projects = [
    {
      title: 'Wassalha',
      type: 'Mobile Application',
      description: [
        'Developed an AI solution to validate product legality, integrating with Express and React Native.',
        'Created a sponsorship process with modern verification (ID card, real-time selfie, link card) with secure process for adding user to our sponsorships and secure their data.',
        'Integrated secure payment processing for users in Tunisia, utilizing modern security protocols.'
      ],
      github: 'https://github.com/thesis-rbk/Wassalha',
      date: 'Mars 2025 – Present'
    },
    {
      title: 'DishDash',
      type: 'Web Application',
      description: [
        'Managed project timelines, reducing delivery times by 30%.',
        'Spearheaded the adoption of cutting-edge engineering software, improving project accuracy by 15%.',
        'Collaborated with cross-functional teams, enhancing project success rates by 10%.'
      ],
      github: 'https://github.com/dash-dash-dash2/dash-dash',
      date: 'Jan 2025 – Present'
    },
    {
      title: 'Game Zone',
      type: 'Web Application',
      description: [
        'Developed a full-stack game platform with secure game upload and execution system.',
        'Implemented game categorization, file management, and automatic game deployment using Node.js.',
        'Created a robust backend system handling game file processing, ZIP extraction, and npm package management.'
      ],
      github: 'https://github.com/rbk-game-zone/game-zone',
      date: 'Jan 2025 – Feb 2025'
    },
    {
      title: 'Mushroom Kingdom',
      type: '3D Multiplayer Game',
      description: [
        'Developed a 3D multiplayer game with real-time player interactions and synchronized game state.',
        'Modernized legacy codebase by updating deprecated dependencies and implementing modern game development practices.',
        'Implemented multiplayer networking, 3D character controls, and interactive game environments.'
      ],
      github: 'https://github.com/talel-c95/game',
      date: 'Feb 2025 – Mar 2025'
    }
  ];
  const totalProjects = projects.length;
  const projectsPerPage = 3;

  // Get the 3 visible projects in a circular way
  const currentProjects = Array.from({ length: projectsPerPage }, (_, i) =>
    projects[(startIndex + i) % totalProjects]
  );

  const paginate = (dir: number) => {
    setDirection(dir);
    setStartIndex((prev) => (prev + dir + totalProjects) % totalProjects);
  };

  return (
    <ProjectsSection id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ color: '#64ffda', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 700 }}
      >
        Academic Projects
      </motion.h2>
      <ProjectsGridWrapper>
        {totalProjects > projectsPerPage && (
          <PrevButton
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </PrevButton>
        )}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <ProjectsGrid
            key={startIndex}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.15 }}
          >
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(100,255,218,0.15)' }}
              >
                <ProjectContent>
                  <h3 style={{ color: '#00b4d8', marginBottom: 0 }}>{project.title}</h3>
                  <div style={{ color: '#8892b0', fontSize: '1rem', marginBottom: '0.5rem' }}>{project.type} <span style={{ float: 'right', fontSize: '0.95rem', color: '#64ffda' }}>{project.date}</span></div>
                  <ul style={{ color: '#ffffff', marginBottom: '1.2rem', paddingLeft: '1.2rem' }}>
                    {project.description.map((desc, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>{desc}</li>
                    ))}
                  </ul>
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
        {totalProjects > projectsPerPage && (
          <NextButton
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next"
          >
            <FaChevronRight />
          </NextButton>
        )}
      </ProjectsGridWrapper>
      <Dots>
        {projects.map((_, idx) => (
          <Dot
            key={idx}
            $active={idx === startIndex}
            onClick={() => { setStartIndex(idx); setDirection(1); }}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </Dots>
    </ProjectsSection>
  );
};

export default Projects; 