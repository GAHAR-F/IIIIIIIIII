import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';

interface StaffMember {
  id: number;
  name: string;
  position: string;
  department: string;
  photo: string;
  bio: string;
  social?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Staff = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const staffData: StaffMember[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Principal',
      department: 'Administration',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 20+ years in education.',
      social: { email: 'sarah@brightfuture.edu.et', linkedin: '#', twitter: '#' }
    },
    {
      id: 2,
      name: 'Mr. Ahmed Hassan',
      position: 'Vice Principal',
      department: 'Administration',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Dedicated to student development and well-being.',
      social: { email: 'ahmed@brightfuture.edu.et' }
    },
    {
      id: 3,
      name: 'Ms. Emily Watson',
      position: 'Math Teacher',
      department: 'Academics',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      bio: 'Passionate about making mathematics engaging.',
      social: { email: 'emily@brightfuture.edu.et', linkedin: '#' }
    },
    {
      id: 4,
      name: 'Mr. James Wilson',
      position: 'Science Teacher',
      department: 'Academics',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Inspiring young scientists through hands-on learning.',
      social: { email: 'james@brightfuture.edu.et', twitter: '#' }
    },
    {
      id: 5,
      name: 'Ms. Lalita Sharma',
      position: 'English Teacher',
      department: 'Academics',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Nurturing communication and critical thinking skills.',
      social: { email: 'lalita@brightfuture.edu.et' }
    },
    {
      id: 6,
      name: 'Mr. David Chen',
      position: 'IT Coordinator',
      department: 'Support',
      photo: 'https://images.unsplash.com/photo-1519345291346-cebdb9fc7b04?w=400&h=400&fit=crop&crop=face',
      bio: 'Bringing technology innovation to the classroom.',
      social: { email: 'david@brightfuture.edu.et', linkedin: '#' }
    }
  ];

  const departments = [
    { id: 'all', label: 'All Staff', icon: <FaChalkboardTeacher /> },
    { id: 'Administration', label: 'Administration', icon: <FaGraduationCap /> },
    { id: 'Academics', label: 'Academic', icon: <FaChalkboardTeacher /> },
    { id: 'Support', label: 'Support', icon: <FaGraduationCap /> }
  ];

  const filteredStaff = selectedCategory === 'all' 
    ? staffData 
    : staffData.filter(member => member.department === selectedCategory);

  return (
    <div className="staff-page" style={{ paddingBottom: '2rem' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>Our Dedicated Team</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Meet the passionate educators and staff members who make Bright Future School exceptional.
        </p>
      </section>

      {/* Filter Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {departments.map(dept => (
            <button
              key={dept.id}
              onClick={() => setSelectedCategory(dept.id)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                background: selectedCategory === dept.id ? '#667eea' : '#f1f5f9',
                color: selectedCategory === dept.id ? 'white' : '#1e293b',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                boxShadow: selectedCategory === dept.id ? '0 4px 15px rgba(102,126,234,0.4)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== dept.id) {
                  e.currentTarget.style.background = '#e2e8f0';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== dept.id) {
                  e.currentTarget.style.background = '#f1f5f9';
                }
              }}
            >
              {dept.icon} {dept.label}
            </button>
          ))}
        </div>
      </section>

      {/* Staff Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2.5rem',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          {filteredStaff.map(member => (
            <div
              key={member.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '250px', background: '#f1f5f9' }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))'
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <div style{{ marginBottom: '0.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    background: '#667eea',
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    {member.department}
                  </span>
                </div>

                <h3 style={{ color: '#1e293b', marginBottom: '0.25rem', fontSize: '1.2rem', fontWeight: '700' }}>
                  {member.name}
                </h3>
                <p style={{ color: '#f97316', fontWeight: '600', marginBottom: '0.75rem' }}>
                  {member.position}
                </p>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem', minHeight: '40px' }}>
                  {member.bio}
                </p>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                  {member.social?.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#f1f5f9',
                        color: '#667eea',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s',
                        textDecoration: 'none'
                      }}
                      title="Email"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#667eea';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f1f5f9';
                        e.currentTarget.style.color = '#667eea';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <FaEnvelope size={16} />
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#f1f5f9',
                        color: '#0a66c2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s',
                        textDecoration: 'none'
                      }}
                      title="LinkedIn"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0a66c2';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f1f5f9';
                        e.currentTarget.style.color = '#0a66c2';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <FaLinkedin size={16} />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a
                      href={member.social.twitter}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#f1f5f9',
                        color: '#1da1f2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s',
                        textDecoration: 'none'
                      }}
                      title="Twitter"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1da1f2';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f1f5f9';
                        e.currentTarget.style.color = '#1da1f2';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <FaTwitter size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStaff.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>No staff members found in this category.</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section style={{ marginTop: '4rem', padding: '3rem 2rem', background: '#f1f5f9', textAlign: 'center' }}>
        <h2 style={{ color: '#1e293b', marginBottom: '1rem', fontSize: '2rem' }}>Join Our Team</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Are you a passionate educator? We're always looking for talented individuals to join our growing team.
        </p>
        <button style={{
          padding: '0.9rem 2.5rem',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background 0.3s, transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5568d3'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          View Careers
        </button>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default Staff;
