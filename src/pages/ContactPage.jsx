import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Styled Components */
const Wrapper = styled.section`
  padding: 2rem;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 80%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 80%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  width: 80%;
  padding: 0.8rem;
  margin-top: 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;



const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handlesubmit = async(e) => {
        e.preventDefault();
        if (!name.trim()) {
            alert('Please enter your name');
            return
        } else if (!email.trim()) {
            alert('Please enter your email');
            return
        } else if (!message.trim()) {
            alert('Please enter your message');
            return
        } else {
            // alert('Your message has been submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
        }
        try {
            const response = await fetch('https://formspree.io/f/meoqwqdo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            })
            if (response.ok) {
                alert('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
              } else {
                alert('Failed to send your message. Please try again.');
              }
            }
            catch (error) {
                console.error('Error:', error);
                alert('Failed to send your message. Please try again later.');
              
            };
    
    }
    // const Wrapper = styled.section``;
    return (
        <>
            <div className='bg-gray-900 w-full h-20 p-6 text-4xl underline text-white text-center'>
                <h1 className='cursor:pointer active:scale-90'><Link to='/'>HotelWorld</Link></h1>
            </div>
            <Wrapper>
                <h2 className='text-center text-4xl p-6'>Feel Free To Contact Us</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4015.0227557262283!2d72.83062251094208!3d18.921668156725115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e1!3m2!1sen!2sin!4v1733558076340!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                {/* Contact Form */}
                <FormContainer>
                    <h3 className="text-center text-2xl mb-4">Get in Touch</h3>
                    <Input type="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}


                    />

                    <Input type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextArea
                        rows="5"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required

                    />

                    <Button onClick={handlesubmit}>Submit</Button>
                </FormContainer>
            </Wrapper>
        </>
    );
}

export default ContactPage;