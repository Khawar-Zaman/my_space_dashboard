/* ProfileCard.js */

import React, { useState } from 'react';

const ProfileCard = ({ name, bio: initialBio, avatar, links }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(initialBio);

  const handleSave = () => {
    // In a full app, you'd send this bio update to a backend
    console.log("New bio saved:", bio);
    setIsEditing(false);
  };

  return (
    <div className="card profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <h2>{name}</h2>
      {isEditing ? (
        <div>
          <textarea 
            value={bio} 
            onChange={(e) => setBio(e.target.value)}
            rows="4"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p>{bio}</p>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit Bio'}
      </button>
      <div className="profile-links">
        {links.map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;