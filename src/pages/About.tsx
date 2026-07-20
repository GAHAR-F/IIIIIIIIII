import React, { useState } from 'react';
import { 
  FaUsers, 
  FaChalkboardTeacher, 
  FaShieldAlt, 
  FaLaptop, 
  FaPaintBrush, 
  FaRocket, 
  FaAward, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaUserTie,
  FaSchool,
  FaArrowRight,
  FaImages,
  FaHeart,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('history');

  // Data for the "Why Choose Our School" cards
  const reasons = [
    { icon: <FaChalkboardTeacher />, title: 'Expert Teachers', description: 'Experienced educators dedicated to student success.' },
    { icon: <FaShieldAlt />, title: 'Safe Environment', description: 'Secure and nurturing spaces for holistic development.' },
    { icon: <FaLaptop />, title: 'Modern Methods', description: 'Innovative pedagogies engaging every learner.' },
    { icon: <FaUsers />, title: 'Small Classes', description: 'Personalized attention for each student.' },
    { icon: <FaPaintBrush />, title: 'Creative Arts', description: 'Arts, music, and extracurriculars included.' },
    { icon: <FaRocket />, title: 'Tech Integration', description: 'Smart classrooms preparing for the future.' },
  ];

  // Achievements data
  const achievements = [
    { icon: <FaCalendarAlt />, number: '25+', label: 'Years of Excellence' },
    { icon: <FaUsers />, number: '1200+', label: 'Students' },
    { icon: <FaChalkboardTeacher />, number: '98%', label: 'Qualified Teachers' },
    { icon: <FaGraduationCap />, number: '95%', label: 'Success Rate' },
    { icon: <FaAward />, number: '12', label: 'National Awards' },
  ];

  // Core values
  const coreValues = [
    { icon: <FaHeart />, title: 'Integrity', description: 'Honesty and ethical conduct in all actions.' },
    { icon: <FaHandshake />, title: 'Respect', description: 'Valuing diversity and empathy.' },
    { icon: <FaRocket />, title: 'Excellence', description: 'Striving for high quality in all endeavors.' },
    { icon: <FaLightbulb />, title: 'Innovation', description: 'Embracing creativity and new ideas.' },
    { icon: <FaUsers />, title: 'Community', description: 'Building strong collaborative relationships.' },
    { icon: <FaGraduationCap />, title: 'Growth', description: 'Continuous learning and development.' },
  ];

  // Gallery images
  const galleryImages = [
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
  ];

  return (
    <div className="about-page" style={{ paddingBottom: '2rem' }}>
      {/* Hero Section */}
      <section style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '6rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <FaSchool /> Bright Future School
          </h1>
          <p style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '1.5rem', opacity: 0.9 }}>
            Nurturing Minds, Building Character, Shaping Tomorrow
          </p>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.85, lineHeight: '1.7' }}>
            Where every child discovers their potential in a supportive, innovative, and joyful learning community.
          </p>
        </div>
      </section>

      {/* Story Tabs Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[
              { id: 'history', label: '📜 History' },
              { id: 'mission', label: '🎯 Mission' },
              { id: 'vision', label: '🌟 Vision' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  background: activeTab === tab.id ? '#667eea' : '#f1f5f9',
                  color: activeTab === tab.id ? 'white' : '#1e293b',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontSize: '0.95rem'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{
            background: '#f8fafc',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            animation: 'fadeIn 0.3s ease-in'
          }}>
            {activeTab === 'history' && (
              <div>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.5rem' }}>Our History</h3>
                <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1rem' }}>
                  Founded in 1998 with just 25 students, Bright Future School began as a dream to provide holistic education. Over 25 years, we've grown into a leading institution serving 1,200+ students across all grade levels. Our journey reflects our commitment to educational excellence and student development.
                </p>
              </div>
            )}
            {activeTab === 'mission' && (
              <div>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Mission</h3>
                <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1rem' }}>
                  To empower every student with knowledge, skills, and values to thrive in a changing world. We foster curiosity, creativity, and lifelong learning while nurturing compassionate global citizens who contribute positively to society.
                </p>
              </div>
            )}
            {activeTab === 'vision' && (
              <div>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Vision</h3>
                <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1rem' }}>
                  To be a beacon of educational innovation and a catalyst for positive change. We envision producing exceptional leaders and innovators who excel academically, create meaningfully, and lead with integrity in their communities and professions.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f1f5f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>Our Core Values</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>The principles that guide everything we do</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {coreValues.map((value, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                borderLeft: '5px solid #667eea'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '1rem' }}>{value.icon}</div>
                <h3 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our School */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>Why Choose Bright Future?</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>What sets us apart from other schools</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {reasons.map((item, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem 1.5rem',
              borderRadius: '16px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              borderTop: '4px solid #f97316'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ fontSize: '3rem', color: '#f97316', marginBottom: '1rem' }}>
                {item.icon}
              </div>
              <h3 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal's Message */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#1e293b' }}>Principal's Message</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          padding: '3rem',
          color: 'white',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face" 
              alt="Principal"
              style={{ 
                width: '220px', 
                height: '220px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                border: '6px solid white',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
              }}
            />
            <h3 style={{ marginTop: '1.5rem', color: 'white', fontSize: '1.3rem' }}>Dr. Sarah Johnson</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '500' }}>Principal, Bright Future School</p>
          </div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.95)', lineHeight: '1.9', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "Every child is a unique gift, and our mission is to nurture their innate potential with care, respect, and excellence. At Bright Future School, we don't just teach—we inspire. We believe in creating a joyful learning environment where curiosity is celebrated, and character is built alongside knowledge. Welcome to our family."
            </p>
            <div style={{ borderTop: '2px solid rgba(255,255,255,0.3)', paddingTop: '1rem' }}>
              <p style={{ fontFamily: 'cursive', fontSize: '1.2rem', color: 'white' }}>— Dr. Sarah Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f97316', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Our Achievements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {achievements.map((item, index) => (
              <div key={index} style={{ textAlign: 'center', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{item.number}</div>
                <div style={{ opacity: 0.9, fontSize: '0.95rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>School Gallery</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem' }}>A glimpse into our vibrant school life</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {galleryImages.map((img, index) => (
            <div key={index} style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
            }}
            >
              <img src={img} alt={`Gallery ${index+1}`} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{
            padding: '0.8rem 2.5rem',
            backgroundColor: 'transparent',
            border: '2px solid #f97316',
            borderRadius: '50px',
            color: '#f97316',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }} 
          onMouseEnter={(e) => { 
            e.currentTarget.style.backgroundColor = '#f97316'; 
            e.currentTarget.style.color = 'white'; 
          }}
          onMouseLeave={(e) => { 
            e.currentTarget.style.backgroundColor = 'transparent'; 
            e.currentTarget.style.color = '#f97316'; 
          }}>
            View Full Gallery <FaImages />
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Join Our Family?</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', lineHeight: '1.7' }}>
            Give your child the gift of a bright future. Experience world-class education combined with character development and innovation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '0.9rem 2.5rem',
              backgroundColor: '#f97316',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
            >
              Enroll Now <FaArrowRight />
            </button>
            <button style={{
              padding: '0.9rem 2.5rem',
              backgroundColor: 'transparent',
              border: '2px solid white',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} 
            onMouseEnter={(e) => { 
              e.currentTarget.style.backgroundColor = 'white'; 
              e.currentTarget.style.color = '#1e293b'; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.backgroundColor = 'transparent'; 
              e.currentTarget.style.color = 'white'; 
            }}>
              Schedule a Tour
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
