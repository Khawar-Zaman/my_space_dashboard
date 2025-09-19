/* App.js */

import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';
import Weather from './Weather';
import Quote from './Quote';
import Notes from './Notes';
// You can find a placeholder avatar online
import avatar from './images/avatar1.png'; 

function App() {
  const userProfile = {
    name: 'Alex Doe',
    bio: 'Frontend developer and lifelong learner. Passionate about creating beautiful and functional web applications.',
    avatar: avatar,
    links: [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com' },
    ],
  };

  return (
    <div className="App">
      <header>
        <h1>My Space</h1>
      </header>
      <main className="dashboard-grid">
        <ProfileCard {...userProfile} />
        <Weather />
        <Quote />
        <Notes />
      </main>
    </div>
  );
}

export default App;