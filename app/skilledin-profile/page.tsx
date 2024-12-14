// pages/profile.tsx

import React from 'react';
import styles from './profile.module.css';

// Type definitions for user data and project
interface Project {
  name: string;
  status: number;
}

interface User {
  fullName: string;
  email: string;
  phone: string;
  mobile: string;
  address: string;
  projects: Project[];
}

const Profile: React.FC = () => {
  const user: User = {
    fullName: 'Kenneth Valdez',
    email: 'fip@jukmuh.al',
    phone: '(239) 816-9029',
    mobile: '(320) 380-4539',
    address: 'Bay Area, San Francisco, CA',
    projects: [
      { name: 'Web Design', status: 70 },
      { name: 'Website Markup', status: 60 },
      { name: 'One Page', status: 90 },
      { name: 'Mobile Template', status: 50 },
      { name: 'Backend API', status: 40 }
    ]
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img src="/profile-avatar.png" alt="Profile Picture" className={styles.avatar} />
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>{user.fullName}</h2>
          <p className={styles.email}>{user.email}</p>
          <p className={styles.phone}>{user.phone}</p>
          <p className={styles.mobile}>{user.mobile}</p>
          <p className={styles.address}>{user.address}</p>
        </div>
      </div>
      <div className={styles.projects}>
        <h3 className={styles.projectsTitle}>Project Status</h3>
        {user.projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <p className={styles.projectName}>{project.name}</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: `${project.status}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
