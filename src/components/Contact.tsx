import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: #64ffda;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;

  svg {
    color: #64ffda;
    font-size: 1.25rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #ffffff;
  font-size: 1rem;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const SubmitButton = styled(motion.button)`
  background: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      console.log('Attempting to send email with EmailJS');
      console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
      console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
      );
      console.log('Email sent successfully!');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactInfo>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I am currently available for freelance work or full-time positions worldwide. If you are interested in working together or have any questions, feel free to reach out!
          </motion.p>
          <ContactDetails>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaEnvelope />
              <span>talelzamouri19@gmail.com</span>
            </ContactItem>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaPhone />
              <span>+21625137085</span>
            </ContactItem>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt />
              <span>Mohamed Ali St., Rades, Tunisia</span>
            </ContactItem>
          </ContactDetails>
        </ContactInfo>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status === 'success' && <p style={{ color: '#64ffda', marginTop: '1rem' }}>Message sent successfully!</p>}
            {status === 'error' && <p style={{ color: 'red', marginTop: '1rem' }}>Failed to send message. Please try again.</p>}
          </ContactForm>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 