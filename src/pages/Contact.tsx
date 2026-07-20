import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+251-11-XXX-XXXX', '+251-09-XX-XX-XXXX'],
      color: '#3b82f6'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@brightfuture.edu.et', 'admissions@brightfuture.edu.et'],
      color: '#ec4899'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['Addis Ababa, Ethiopia', 'Street Name, Building #XX'],
      color: '#f97316'
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: ['Mon-Fri: 8:00 AM - 4:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      color: '#10b981'
    }
  ];

  return (
    <div className="contact-page" style={{ paddingBottom: '2rem' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>Get In Touch</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {contactInfo.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                borderTop: `4px solid ${item.color}`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ fontSize: '2.5rem', color: item.color, marginBottom: '1rem' }}>
                {item.icon}
              </div>
              <h3 style={{ color: '#1e293b', marginBottom: '0.5rem', fontSize: '1.3rem' }}>{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} style={{ color: '#64748b', marginBottom: '0.3rem' }}>{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section style({ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          {/* Form */}
          <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ color: '#1e293b', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Send Us a Message</h2>
            {submitted && (
              <div style={{
                background: '#d1fae5',
                color: '#047857',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1e293b', fontWeight: '600' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#f97316'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1e293b', fontWeight: '600' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#f97316'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1e293b', fontWeight: '600' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#f97316'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1e293b', fontWeight: '600' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#f97316'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  backgroundColor: '#f97316',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s, transform 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

          {/* Location & Social */}
          <div>
            <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', marginBottom: '2rem' }}>
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.95rem'
              }}>
                📍 Google Map Integration
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
              <h3 style={{ color: '#1e293b', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { icon: <FaFacebook />, label: 'Facebook', color: '#3b5998' },
                  { icon: <FaTelegram />, label: 'Telegram', color: '#0088cc' },
                  { icon: <FaInstagram />, label: 'Instagram', color: '#E1306C' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: social.color,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      cursor: 'pointer'
                    }}
                    title={social.label}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: '#f1f5f9', padding: '4rem 2rem', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', color: '#1e293b', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { q: 'What are the school hours?', a: 'School hours are 8:00 AM to 3:30 PM, Monday through Friday.' },
              { q: 'How can I apply for admission?', a: 'Visit our admissions page to download forms and submit applications online.' },
              { q: 'What is the admission process?', a: 'The process includes application, entrance exam, and parent interview.' },
              { q: 'Are scholarships available?', a: 'Yes, we offer merit-based and need-based scholarships. Contact admissions.' }
            ].map((faq, i) => (
              <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: '#f97316', marginBottom: '0.5rem' }}>Q: {faq.q}</h4>
                <p style={{ color: '#64748b' }}>A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
