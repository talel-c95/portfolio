import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCertificate, FaLanguage, FaCode, FaServer, FaGamepad, FaTachometerAlt } from 'react-icons/fa';
import { SiNodedotjs, SiExpress, SiFastapi, SiPhp, SiSequelize, SiMongodb, SiPrisma, SiSocketdotio, SiJquery, SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiExpo, SiRedux, SiDocker, SiGithubactions, SiGit, SiAmazonaws, SiFirebase, SiSupabase, SiJest, SiMocha, SiChai, SiPostman } from 'react-icons/si';
import { DiMysql, DiPostgresql } from 'react-icons/di';
import { TbBrandGraphql } from 'react-icons/tb';
import { BsFiletypeSql } from 'react-icons/bs';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 7rem 2rem 4rem 2rem;
  background: linear-gradient(120deg, #1a1a1a 60%, #00b4d8 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 6rem 1rem 2rem 1rem;
  }
`;

const GlassCard = styled.div`
  background: rgba(30, 41, 59, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  display: flex;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
  border: 1.5px solid rgba(100,255,218,0.12);

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Profile = styled.div`
  background: linear-gradient(135deg, #232526 60%, #00b4d8 100%);
  flex: 1 1 320px;
  min-width: 320px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 2rem 2rem;
  color: #fff;
  border-right: 1.5px solid rgba(100,255,218,0.12);

  @media (max-width: 900px) {
    max-width: 100%;
    border-right: none;
    border-bottom: 1.5px solid rgba(100,255,218,0.12);
    padding: 2rem 1rem;
  }
`;

const AnimatedAvatarRing = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
const AvatarGlow = styled.div`
  position: absolute;
  top: -10px; left: -10px;
  width: 150px; height: 150px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #64ffda, #00b4d8, #64ffda 100%);
  filter: blur(12px);
  z-index: 0;
  animation: spin 4s linear infinite;
  opacity: 0.7;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
const AvatarImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #232526;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProfileTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 400;
  color: #64ffda;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProfileContact = styled.div`
  font-size: 1rem;
  color: #b0c4d4;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const ProfileSocial = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.2s;
  &:hover { color: #64ffda; }
`;

const ProfileLocation = styled.div`
  color: #b0c4d4;
  font-size: 0.98rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProfilePhone = styled.div`
  color: #b0c4d4;
  font-size: 0.98rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Content = styled.div`
  flex: 2 1 600px;
  padding: 3rem 2.5rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  color: #64ffda;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const Summary = styled(motion.p)`
  font-size: 1.15rem;
  color: #e0e6ed;
  line-height: 1.8;
  margin-bottom: 2.2rem;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SubSection = styled.div`
  margin-bottom: 2.5rem;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const BadgeList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

const Badge = styled.a`
  background: rgba(100,255,218,0.10);
  border-radius: 14px;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #64ffda;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.15rem 0.4rem;
  }

  &:hover {
    background: #64ffda;
    color: #232526;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #64ffda 60%, #00b4d8 100%);
  color: #232526;
  font-weight: 600;
  padding: 0.7rem 2rem;
  border-radius: 30px;
  font-size: 1.05rem;
  margin-top: 1.2rem;
  box-shadow: 0 2px 12px 0 rgba(100,255,218,0.10);
  transition: background 0.3s, color 0.3s, transform 0.2s;

  @media (max-width: 768px) {
    padding: 0.6rem 1.8rem;
    font-size: 0.95rem;
  }

  &:hover {
    background: linear-gradient(90deg, #00b4d8 60%, #64ffda 100%);
    color: #fff;
    transform: translateY(-2px) scale(1.04);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <GlassCard>
        <Profile>
          <AnimatedAvatarRing>
            <AvatarGlow />
            <AvatarImg src="https://avatars.githubusercontent.com/u/10424744?v=4" alt="Talel Zamouri" />
          </AnimatedAvatarRing>
          <ProfileName>Talel Zamouri</ProfileName>
          <ProfileTitle>Full Stack Developer</ProfileTitle>
          <ProfileContact>
            <div><FaEnvelope style={{marginRight: 6}}/> talelzamouri19@gmail.com</div>
          </ProfileContact>
          <ProfilePhone><FaPhone /> +21625137085</ProfilePhone>
          <ProfileSocial>
            <SocialIcon href="https://github.com/talel-c95" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/talel-zamouri-a75b27362/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
          </ProfileSocial>
          <ProfileLocation><FaMapMarkerAlt /> Mohamed Ali St., Rades, Tunisia</ProfileLocation>
        </Profile>
        <Content>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </SectionTitle>
          <Summary
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A Full Stack Developer with hands-on experience in building scalable and maintainable applications. Skilled in both frontend and backend development, with a focus on optimizing performance, scalability, and user experience. Passionate about staying updated with emerging technologies and continuously improving development practices.
          </Summary>
          <SubSection>
            <SubTitle><FaCode /> Technical Skills</SubTitle>
            <List>
              <ListItem><b>Backend:</b> <BadgeList>
                <Badge href="https://nodejs.org/" target="_blank"><SiNodedotjs /> Node.js</Badge>
                <Badge href="https://expressjs.com/" target="_blank"><SiExpress /> Express</Badge>
                <Badge href="https://fastapi.tiangolo.com/" target="_blank"><SiFastapi /> FastAPI</Badge>
                <Badge href="https://www.php.net/" target="_blank"><SiPhp /> PHP</Badge>
                <Badge href="https://sequelize.org/" target="_blank"><SiSequelize /> Sequelize</Badge>
                <Badge href="https://mongoosejs.com/" target="_blank"><SiMongodb /> Mongoose</Badge>
                <Badge href="https://www.prisma.io/" target="_blank"><SiPrisma /> Prisma</Badge>
                <Badge href="https://socket.io/" target="_blank"><SiSocketdotio /> Socket.io</Badge>
                <Badge href="https://restfulapi.net/" target="_blank"><FaServer /> RESTful APIs</Badge>
                <Badge href="https://graphql.org/" target="_blank"><TbBrandGraphql /> GraphQL</Badge>
                <Badge href="https://jwt.io/" target="_blank"><FaServer /> JWT</Badge>
                <Badge href="https://oauth.net/" target="_blank"><FaServer /> OAuth</Badge>
                <Badge href="https://supabase.com/docs/guides/auth" target="_blank"><SiSupabase /> Supabase Auth</Badge>
                <Badge href="https://www.npmjs.com/package/bcrypt" target="_blank"><FaServer /> bcrypt</Badge>
                <Badge href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank"><FaServer /> WebSockets</Badge>
                <Badge href="https://phaser.io/" target="_blank"><FaGamepad /> Phaser</Badge>
                <Badge href="https://jquery.com/" target="_blank"><SiJquery /> jQuery</Badge>
              </BadgeList></ListItem>
              <ListItem><b>Frontend:</b> <BadgeList>
                <Badge href="https://react.dev/" target="_blank"><SiReact /> React</Badge>
                <Badge href="https://reactnative.dev/" target="_blank"><SiReact /> React Native</Badge>
                <Badge href="https://nextjs.org/" target="_blank"><SiNextdotjs /> Next.js</Badge>
                <Badge href="https://vuejs.org/" target="_blank"><SiVuedotjs /> Vue.js</Badge>
                <Badge href="https://www.typescriptlang.org/" target="_blank"><SiTypescript /> TypeScript</Badge>
                <Badge href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><SiJavascript /> JavaScript (ES6+)</Badge>
                <Badge href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><SiHtml5 /> HTML</Badge>
                <Badge href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><SiCss3 /> CSS</Badge>
                <Badge href="https://tailwindcss.com/" target="_blank"><SiTailwindcss /> Tailwind</Badge>
                <Badge href="https://getbootstrap.com/" target="_blank"><SiBootstrap /> Bootstrap</Badge>
                <Badge href="https://expo.dev/" target="_blank"><SiExpo /> Expo</Badge>
                <Badge href="https://redux.js.org/" target="_blank"><SiRedux /> Redux</Badge>
                <Badge href="https://docs.pmnd.rs/zustand/getting-started/introduction" target="_blank"><FaCode /> Zustand</Badge>
                <Badge href="https://react.dev/reference/react/Context" target="_blank"><FaCode /> Context API</Badge>
              </BadgeList></ListItem>
              <ListItem><b>Database:</b> <BadgeList>
                <Badge href="https://www.mysql.com/" target="_blank"><DiMysql /> MySQL</Badge>
                <Badge href="https://www.postgresql.org/" target="_blank"><DiPostgresql /> PostgreSQL</Badge>
                <Badge href="https://www.mongodb.com/" target="_blank"><SiMongodb /> MongoDB</Badge>
                <Badge href="https://en.wikipedia.org/wiki/SQL" target="_blank"><BsFiletypeSql /> SQL</Badge>
                <Badge href="https://en.wikipedia.org/wiki/NoSQL" target="_blank"><SiMongodb /> NoSQL</Badge>
              </BadgeList></ListItem>
              <ListItem><b>DevOps & Tools:</b> <BadgeList>
                <Badge href="https://www.docker.com/" target="_blank"><SiDocker /> Docker</Badge>
                <Badge href="https://docs.github.com/en/actions" target="_blank"><SiGithubactions /> CI/CD (GitHub Actions)</Badge>
                <Badge href="https://git-scm.com/" target="_blank"><SiGit /> Git</Badge>
                <Badge href="https://aws.amazon.com/" target="_blank"><SiAmazonaws /> AWS</Badge>
                <Badge href="https://firebase.google.com/" target="_blank"><SiFirebase /> Firebase</Badge>
                <Badge href="https://supabase.com/" target="_blank"><SiSupabase /> Superbase</Badge>
                <Badge href="https://jestjs.io/" target="_blank"><SiJest /> Jest</Badge>
                <Badge href="https://mochajs.org/" target="_blank"><SiMocha /> Mocha</Badge>
                <Badge href="https://www.chaijs.com/" target="_blank"><SiChai /> Chai</Badge>
                <Badge href="https://www.postman.com/" target="_blank"><SiPostman /> Postman</Badge>
                <Badge href="https://www.thunderclient.com/" target="_blank"><FaServer /> Thunder Client</Badge>
                <Badge href="https://web.dev/performance/" target="_blank"><FaTachometerAlt /> Performance Optimization</Badge>
              </BadgeList></ListItem>
              <ListItem><b>Cloud & Infrastructure:</b> <BadgeList>
                <Badge href="https://aws.amazon.com/" target="_blank"><SiAmazonaws /> AWS</Badge>
                <Badge href="https://firebase.google.com/" target="_blank"><SiFirebase /> Firebase</Badge>
                <Badge href="https://supabase.com/" target="_blank"><SiSupabase /> Superbase</Badge>
              </BadgeList></ListItem>
              <ListItem><b>Testing & Debugging:</b> <BadgeList>
                <Badge href="https://jestjs.io/" target="_blank"><SiJest /> Unit & Integration Testing</Badge>
                <Badge href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank"><FaCode /> Test-Driven Development (TDD)</Badge>
                <Badge href="https://www.postman.com/api-testing/" target="_blank"><SiPostman /> API Testing</Badge>
              </BadgeList></ListItem>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle><FaLanguage /> Languages</SubTitle>
            <BadgeList>
              <Badge>English</Badge>
              <Badge>French</Badge>
              <Badge>Italian</Badge>
              <Badge>Arabic</Badge>
            </BadgeList>
          </SubSection>
          <SubSection>
            <SubTitle><FaCertificate /> Certifications</SubTitle>
            <BadgeList>
              <Badge href="https://credsverse.com/credentials/9b93a8d8-8e30-4de4-8fcd-4e7c899dfbb5?preview=1" target="_blank" rel="noopener noreferrer">Bootcamp - Full Stack JavaScript Web Development (Sep 2024 – Mar 2025)</Badge>
            </BadgeList>
          </SubSection>
        </Content>
      </GlassCard>
    </AboutSection>
  );
};

export default About; 