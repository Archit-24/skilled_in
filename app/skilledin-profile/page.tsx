"use client";

import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import "./global.css";
import { FaEdit } from "react-icons/fa"; // Pencil icon for editing

const Profile: React.FC = () => {
  const initialProfile = {
    fullName: "Archit Aggarwal",
    headline: "Frontend Developer at TechCorp",
    location: "Delhi, India",
    about:
      "Passionate Frontend Developer with a knack for creating user-friendly and visually appealing web applications.",
    profileImage: "/images/Connect.jpg",
    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "IIT Delhi",
        year: "2020",
      },
    ],
    experience: [
      {
        role: "Frontend Developer",
        company: "TechCorp",
        duration: "Jan 2021 - Present",
      },
    ],
    skills: ["React", "Next.js", "JavaScript"],
    resources: [], // New section for uploaded resources
  };

  // const [user, setUser] = useState(() => {
  //   const savedProfile = localStorage.getItem("userProfile");
  //   const parsedProfile = savedProfile
  //     ? JSON.parse(savedProfile)
  //     : initialProfile;
  //   return {
  //     ...parsedProfile,
  //     experience: parsedProfile.experience || [],
  //     skills: parsedProfile.skills || [],
  //     resources: parsedProfile.resources || [],
  //     education: parsedProfile.education || [],
  //   };
  // });

  // const [about, setAbout] = useState(
  //   ""
  // );
  const [user, setUser] = useState(() => {
    const savedProfile = localStorage.getItem("userProfile");
    return savedProfile ? JSON.parse(savedProfile) : initialProfile;
  });

  const saveProfile = () => {
    // Save the current user state to localStorage
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("Profile updated successfully!");
  };

  const handleFieldChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (
    section: string,
    index: number,
    key: string,
    value: string
  ) => {
    const updatedSection = [...(user as any)[section]];
    updatedSection[index][key] = value;
    setUser({ ...user, [section]: updatedSection });
  };

  const handleAddItem = (section: string, newItem: any) => {
    setUser({ ...user, [section]: [...(user as any)[section], newItem] });
  };

  const handleRemoveItem = (section: string, index: number) => {
    const updatedSection = [...(user as any)[section]];
    updatedSection.splice(index, 1);
    setUser({ ...user, [section]: updatedSection });
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prev) => ({ ...prev, profileImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResourceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        handleAddItem("resources", { name: file.name, content: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.profileContainer}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.banner}></div>
        <div className={styles.profileDetails}>
          <div className={styles.profileImageContainer}>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className={styles.imageUpload}
            />
            <img
              src={user.profileImage}
              alt="Profile"
              className={styles.profileImage}
            />
            {/* <FaEdit className={styles.editIcon} /> */}
          </div>
          <div className={styles.basicInfo}>
            <input
              type="text"
              placeholder="Enter your FullName"
              value={user.fullName}
              onChange={(e) => handleFieldChange("fullName", e.target.value)}
              className={styles.editableInput}
            />
            <input
              type="text"
              placeholder="Enter your Headline"
              value={user.headline}
              onChange={(e) => handleFieldChange("headline", e.target.value)}
              className={styles.editableInput}
            />
            <input
              type="text"
              placeholder="Enter your Location"
              value={user.location}
              onChange={(e) => handleFieldChange("location", e.target.value)}
              className={styles.editableInput}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={styles.aboutSection}>
        <h3>About</h3>
        <textarea
          placeholder="Tell us about yourself"
          value={user.about}
          onChange={(e) => handleFieldChange("about", e.target.value)}
          className={styles.editableText}
        />
      </div>

      {/* Education Section */}
      <div className={styles.cardSection}>
        <h3>Education</h3>
        {(user.education || []).map((edu, index) => (
          <div key={index} className={styles.card}>
            <input
              type="text"
              placeholder="Enter your Course"
              value={edu.degree}
              onChange={(e) =>
                handleArrayChange("education", index, "degree", e.target.value)
              }
              className={styles.editableInput}
            />
            <input
              type="text"
              placeholder="Enter your University"
              value={edu.institution}
              onChange={(e) =>
                handleArrayChange(
                  "education",
                  index,
                  "institution",
                  e.target.value
                )
              }
              className={styles.editableInput}
            />
            <input
              type="text"
              placeholder="Enter your Graduation Year"
              value={edu.year}
              onChange={(e) =>
                handleArrayChange("education", index, "year", e.target.value)
              }
              className={styles.editableInput}
            />
            <button
              className={styles.deleteButton}
              onClick={() => handleRemoveItem("education", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          className={styles.addButton}
          onClick={() =>
            handleAddItem("education", {
              degree: "",
              institution: "",
              year: "",
            })
          }
        >
          Add Education
        </button>
      </div>

      {/* Experience Section */}
      <div className={styles.cardSection}>
        <h3>Experience</h3>
        {(user.experience || []).map((exp, index) => (
          <div key={index} className={styles.card}>
            <input
              type="text"
              placeholder="Enter your Job Title"
              value={exp.role}
              onChange={(e) =>
                handleArrayChange("experience", index, "role", e.target.value)
              }
              className={styles.editableInput}
            />
            <input
              type="text"
              placeholder="Enter your Company Name"
              value={exp.company}
              onChange={(e) =>
                handleArrayChange(
                  "experience",
                  index,
                  "company",
                  e.target.value
                )
              }
              className={styles.editableInput}
            />
            <input
              type="text"
              placeholder="Enter your Job Duration"
              value={exp.duration}
              onChange={(e) =>
                handleArrayChange(
                  "experience",
                  index,
                  "duration",
                  e.target.value
                )
              }
              className={styles.editableInput}
            />
            <button
              className={styles.deleteButton}
              onClick={() => handleRemoveItem("experience", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          className={styles.addButton}
          onClick={() =>
            handleAddItem("experience", { role: "", company: "", duration: "" })
          }
        >
          Add Experience
        </button>
      </div>

      {/* Skills Section */}
      <div className={styles.cardSection}>
        <h3>Skills</h3>
        {(user.skills || []).map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <input
              type="text"
              value={skill}
              onChange={(e) =>
                handleArrayChange("skills", index, "", e.target.value)
              }
              className={styles.editableInput}
            />
            <button
              className={styles.deleteButton}
              onClick={() => handleRemoveItem("skills", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          className={styles.addButton}
          onClick={() => handleAddItem("skills", "")}
        >
          Add Skill
        </button>
      </div>

      {/* Resources Section */}
      <div className={styles.cardSection}>
        <h3>Resources</h3>
        <input
          type="file"
          onChange={handleResourceUpload}
          className={styles.fileInput}
        />
        <div className={styles.resourcesList}>
          {(user.resources || []).map((resource, index) => (
            <div key={index} className={styles.resourceItem}>
              <a
                href={resource.content}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.name}
              </a>
              <button
                className={styles.deleteButton}
                onClick={() => handleRemoveItem("resources", index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className={styles.saveSection}>
        <button className={styles.saveButton} onClick={saveProfile}>
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
