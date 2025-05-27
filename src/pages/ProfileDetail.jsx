import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Profiles.css';

const mockProfiles = [
  {
    id: 1, name: 'Alice', jobTitle: 'Frontend Developer', department: 'Engineering',
    email: 'alice.johnson@example.com', phone: '123-456-7890',
    url: 'https://randomuser.me/api/portraits/women/65.jpg',
    recentPosts: [
      { id: 'p1', title: 'Launching our new UI library', date: '2025-05-10' },
      { id: 'p2', title: 'CSS Grid vs. Flexbox deep dive', date: '2025-04-28' }
    ],
    activity: [
      { id: 'a1', desc: "Commented on Bob's post", time: '2 hours ago' },
      { id: 'a2', desc: 'Joined Engineering Slack channel', time: '1 day ago' }
    ]
  },
  { id: 2, name: 'Bob', jobTitle: 'Backend Developer', department: 'Engineering', email: 'bob.smith@example.com', phone: '321-654-0987', url: 'https://randomuser.me/api/portraits/men/43.jpg' },
  { id: 3, name: 'Evans', jobTitle: 'HR Manager', department: 'Human Resources', email: 'claire.evans@example.com', phone: '456-789-0123', url: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 4, name: 'David', jobTitle: 'Product Manager', department: 'Product', email: 'david.lee@example.com', phone: '567-890-1234', url: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: 5, name: 'Wilson', jobTitle: 'UX Designer', department: 'Design', email: 'emma.wilson@example.com', phone: '678-901-2345', url: 'https://randomuser.me/api/portraits/women/52.jpg' },
  { id: 6, name: 'Frank', jobTitle: 'DevOps Engineer', department: 'IT', email: 'frank.harris@example.com', phone: '789-012-3456', url: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 7, name: 'Grace', jobTitle: 'Marketing Specialist', department: 'Marketing', email: 'grace.kim@example.com', phone: '890-123-4567', url: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { id: 8, name: 'Henry', jobTitle: 'Data Scientist', department: 'Data', email: 'henry.zhao@example.com', phone: '901-234-5678', url: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: 9, name: 'Thompson', jobTitle: 'Technical Writer', department: 'Documentation', email: 'ivy.thompson@example.com', phone: '012-345-6789', url: 'https://randomuser.me/api/portraits/women/15.jpg' },
  { id: 10, name: 'Jack', jobTitle: 'QA Engineer', department: 'Quality Assurance', email: 'jack.miller@example.com', phone: '987-654-3210', url: 'https://randomuser.me/api/portraits/men/16.jpg' },
];

export default function ProfileDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = mockProfiles.find(p => p.id === parseInt(id));

  if (!profile) {
    return (
      <div className="detail-page">
        <h2>Profile not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-panel">
        <img className="avatar-large" src={profile.url} alt={profile.name} />
        <h2>{profile.name}</h2>
        <p><strong>Title:</strong> {profile.jobTitle}</p>
        <p><strong>Department:</strong> {profile.department}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>

        {profile.recentPosts && profile.recentPosts.length > 0 && (
          <div className="section">
            <h3>Recent Posts</h3>
            <ul>
              {profile.recentPosts.map(post => (
                <li key={post.id}>
                  {post.title} <em>({post.date})</em>
                </li>
              ))}
            </ul>
          </div>
        )}

        {profile.activity && profile.activity.length > 0 && (
          <div className="section">
            <h3>Recent Activity</h3>
            <ul>
              {profile.activity.map(act => (
                <li key={act.id}>
                  {act.desc} — <small>{act.time}</small>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
