"use client";

import React, { useState } from 'react';
import styles from './profile.module.css';
import './global.css';
import 'material-icons/iconfont/material-icons.css';


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
  skills: string[];
  profileImage: string;
  projects: Project[];
}

const Profile: React.FC = () => {
  // Load user data from localStorage
  const savedUserData = localStorage.getItem('userProfile');
  const initialUser: User = savedUserData
    ? JSON.parse(savedUserData)
    : {
        fullName: 'Archit Aggarwal',
        email: 'info@skilledin.com',
        phone: '9876543210',
        mobile: '9876543210',
        address: 'Delhi, India',
        skills: ['Next-JS'],
        profileImage: '/images/Connect.jpg',
        projects: [
          { name: 'Web Design', status: 70 },
          { name: 'Website Markup', status: 60 },
          { name: 'One Page', status: 90 },
          { name: 'Mobile Template', status: 50 },
          { name: 'Backend API', status: 40 },
        ],
      };

  const [user, setUser] = useState<User>(initialUser);

  // Handle input change
  const handleChange = (field: string, value: string) => {
    setUser((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle skills change
  const handleSkillsChange = (index: number, value: string) => {
    const newSkills = [...user.skills];
    newSkills[index] = value;
    setUser({
      ...user,
      skills: newSkills,
    });
  };

  // Add new skill
  const handleAddSkill = () => {
    setUser({
      ...user,
      skills: [...user.skills, ''],
    });
  };

  // Handle profile image change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setUser({
          ...user,
          profileImage: e.target?.result as string,
        });
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  // Save user data to localStorage
  const saveToLocalStorage = (userData: User) => {
    localStorage.setItem('userProfile', JSON.stringify(userData));
  };

  // Handle saving changes
  const handleSaveChanges = () => {
    saveToLocalStorage(user);
    alert('Changes saved!');
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImageContainer}>
          <img
            src={user.profileImage}
            alt="Profile"
            className={styles.avatar}
          />
          <label htmlFor="imageInput" className={styles.imageChangeButton}>
            <span className="material-icons">edit</span>
          </label>
          <input
            type="file"
            id="imageInput"
            className={styles.imageInput}
            onChange={handleImageChange}
          />
        </div>

        <div className={styles.profileInfo}>
          <h2>
            <input
              type="text"
              value={user.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={styles.editable}
            />
            {/* <label className={styles.editIcon}>
              <span className="material-icons">edit</span>
            </label> */}
          </h2>
          <p>
            <input
              type="email"
              value={user.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={styles.editable}
            />
            {/* <label className={styles.editIcon}>
              <span className="material-icons">edit</span>
            </label> */}
          </p>
          <p>
            <input
              type="text"
              value={user.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={styles.editable}
            />
            {/* <label className={styles.editIcon}>
              <span className="material-icons">edit</span>
            </label> */}
          </p>
          <p>
            <input
              type="text"
              value={user.mobile}
              onChange={(e) => handleChange('mobile', e.target.value)}
              className={styles.editable}
            />
            {/* <label className={styles.editIcon}>
              <span className="material-icons">edit</span>
            </label> */}
          </p>
          <p>
            <input
              type="text"
              value={user.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className={styles.editable}
            />
            {/* <label className={styles.editIcon}>
              <span className="material-icons">edit</span>
            </label> */}
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        <h3>Skills</h3>
        {user.skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillsChange(index, e.target.value)}
              className={styles.editable}
            />
            {/* <label className={styles.editIcon}>
              <span className="material-icons">edit</span>
            </label> */}
          </div>
        ))}
        <button className={styles.addSkillButton} onClick={handleAddSkill}>
          Add Skill
        </button>
      </div>

      <button onClick={handleSaveChanges} className={styles.saveButton}>
        Save Changes
      </button>
    </div>
  );
};

export default Profile;