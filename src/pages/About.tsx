// const About = () => {
//   return (
//     <div className="about-page">
//       <h1>About Us</h1>
//       <p>
//         Detailed description of the school: history, mission, vision,
//         and facilities.
//       </p>
//     </div>
//   )
// }

// export default About



import React from 'react';
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
  FaImages
} from 'react-icons/fa';

const About = () => {
  // Data for the "Why Choose Our School" cards
  const reasons = [
    { icon: <FaChalkboardTeacher />, title: 'Qualified Teachers', description: 'Experienced and passionate educators dedicated to student success.' },
    { icon: <FaShieldAlt />, title: 'Safe Learning Environment', description: 'A secure and nurturing space where students feel valued and protected.' },
    { icon: <FaLaptop />, title: 'Modern Teaching Methods', description: 'Innovative pedagogical approaches that engage and inspire learners.' },
    { icon: <FaUsers />, title: 'Small Class Sizes', description: 'Personalized attention to meet each student\'s unique learning needs.' },
    { icon: <FaPaintBrush />, title: 'Creative Activities', description: 'Arts, music, and extracurriculars to develop well-rounded individuals.' },
    { icon: <FaRocket />, title: 'Technology Integration', description: 'Smart classrooms and digital tools to prepare students for the future.' },
  ];

  // Achievements data
  const achievements = [
    { icon: <FaCalendarAlt />, number: '25+', label: 'Years of Excellence' },
    { icon: <FaUsers />, number: '1200+', label: 'Students Enrolled' },
    { icon: <FaChalkboardTeacher />, number: '98%', label: 'Qualified Teachers' },
    { icon: <FaGraduationCap />, number: '95%', label: 'Graduation Rate' },
    { icon: <FaAward />, number: '12', label: 'National Awards' },
  ];

  // Gallery images (placeholders)
  const galleryImages = [
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ 
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
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '1px' }}>
            <FaSchool style={{ marginRight: '0.5rem' }} /> Bright Future School
          </h1>
          <p style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '1.5rem', opacity: 0.9 }}>
            Nurturing Minds, Building Character, Shaping Tomorrow
          </p>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.85 }}>
            Where every child discovers their potential in a supportive, innovative, and joyful learning community.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '0.8rem 2.5rem',
              backgroundColor: '#f97316',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s',
              boxShadow: '0 4px 15px rgba(249,115,22,0.4)'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}>
              Enroll Now
            </button>
            <button style={{
              padding: '0.8rem 2.5rem',
              backgroundColor: 'transparent',
              border: '2px solid white',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#1e293b'; }}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>Our Story</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>Building a legacy of excellence since 1998</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#f97316', marginBottom: '1rem' }}>📜 History</h3>
            <p style={{ color: '#334155', lineHeight: '1.7' }}>Founded in 1998 with just 25 students, Bright Future School began as a dream to provide holistic education. Over 25 years, we've grown into a premier institution known for academic excellence and character development.</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#f97316', marginBottom: '1rem' }}>🎯 Mission</h3>
            <p style={{ color: '#334155', lineHeight: '1.7' }}>To empower every student with knowledge, skills, and values to thrive in a changing world, fostering curiosity, creativity, and a lifelong love for learning.</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#f97316', marginBottom: '1rem' }}>🌟 Vision</h3>
            <p style={{ color: '#334155', lineHeight: '1.7' }}>To be a beacon of educational innovation, producing compassionate leaders who contribute positively to society and excel in their chosen paths.</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', gridColumn: 'span 1' }}>
            <h3 style={{ color: '#f97316', marginBottom: '1rem' }}>💎 Core Values</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#334155', lineHeight: '2' }}>
              <li>✔️ Integrity & Honesty</li>
              <li>✔️ Respect & Empathy</li>
              <li>✔️ Excellence & Perseverance</li>
              <li>✔️ Creativity & Curiosity</li>
              <li>✔️ Community & Collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Our School */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f1f5f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>Why Choose Our School</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>What sets us apart</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {reasons.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                textAlign: 'center',
                transition: 'transform 0.3s',
                borderBottom: '4px solid #f97316'
              }}>
                <div style={{ fontSize: '3rem', color: '#f97316', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
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
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          padding: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face" 
              alt="Principal"
              style={{ 
                width: '200px', 
                height: '200px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                border: '6px solid #f97316',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}
            />
            <h3 style={{ marginTop: '1rem', color: '#1e293b' }}>Dr. Sarah Johnson</h3>
            <p style={{ color: '#f97316', fontWeight: '500' }}>Principal, Bright Future School</p>
          </div>
          <div>
            <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1.05rem', fontStyle: 'italic' }}>
              "Every child is a unique gift, and our mission is to nurture their innate potential with care, 
              respect, and excellence. At Bright Future School, we don't just teach—we inspire. We believe in 
              creating a joyful learning environment where curiosity is celebrated, and character is built 
              alongside knowledge. Welcome to our family."
            </p>
            <div style={{ marginTop: '1.5rem', borderTop: '2px dashed #e2e8f0', paddingTop: '1rem' }}>
              <p style={{ fontFamily: 'cursive', fontSize: '1.3rem', color: '#1e293b' }}>— Dr. Sarah Johnson</p>
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
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <div style={{ fontSize: '2.2rem', fontWeight: '700' }}>{item.number}</div>
                <div style={{ opacity: 0.9 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>Gallery Preview</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem' }}>A glimpse into our vibrant school life</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {galleryImages.map((img, index) => (
            <div key={index} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}>
              <img src={img} alt={`Gallery ${index+1}`} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
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
          }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#f97316'; e.target.style.color = 'white'; }}>
            View Full Gallery <FaImages />
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Join Our Family?</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
            Give your child the gift of a bright future. Schedule a visit or enroll today!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '0.9rem 2.5rem',
              backgroundColor: '#f97316',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}>
              Enroll Now <FaArrowRight />
            </button>
            <button style={{
              padding: '0.9rem 2.5rem',
              backgroundColor: 'transparent',
              border: '2px solid white',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#1e293b'; }}>
              Visit Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
