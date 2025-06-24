import React, { useState } from 'react';
import './Contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            subject,
            message
        };

        console.log("Yuborilgan ma'lumotlar:", formData);
        alert("Ma'lumotlar muvaffaqiyatli yuborildi!");

        // Formani tozalash
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className='Contact'>
            <div className='hpcont'>
                <h2>Contact</h2>
                <span>Home / Pages / <strong>Contact</strong></span>
            </div>
            <div className='crtsnd'>
                <div className='crt-left'>
                    {/* Manzil, aloqa ma'lumotlari */}
                    <div className='grid-card'>
                        <div>
                            <i class="bi bi-geo-alt"></i>
                        </div>
                        <h2>Address</h2>
                        <ul>
                            <li>A108 Adam Street,</li>
                            <li>New York, NY 535022</li>
                        </ul>
                    </div>
                    <div className='grid-card'>
                        <div>
                            <i class="bi bi-telephone"></i>
                        </div>
                        <h2>Call Us</h2>
                        <ul>
                            <li>+1 5589 55488 55</li>
                            <li>+1 6678 254445 41</li>
                        </ul>
                    </div>
                    <div className='grid-card'>
                        <div>
                            <i class="bi bi-envelope"></i>
                        </div>
                        <h2>Email Us</h2>
                        <ul>
                            <li>info@example.com</li>
                            <li>contact@example.com</li>
                        </ul>
                    </div>
                    <div className='grid-card'>
                        <div>
                            <i class="bi bi-clock"></i>
                        </div>
                        <h2>Open Hours</h2>
                        <ul>
                            <li>Monday - Friday</li>
                            <li>9:00AM - 05:00PM</li>
                        </ul>
                    </div>
                </div>
                <div className='crt-right'>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li className='dispflx'>
                                <ul>
                                    <li>
                                        <input
                                            placeholder='Your Name'
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </li>
                                    <li>
                                        <input
                                            placeholder='Your Email'
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <input
                                    placeholder='Subject'
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder='Message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </li>
                        </ul>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
