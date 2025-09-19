// /* Notes.js */

import React, { useState, useEffect } from 'react';

const Notes = () => {
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');

  // Fetch the note when the component mounts
  useEffect(() => {
    const getNote = async () => {
      const response = await fetch('http://localhost:5001/api/note');
      const data = await response.json();
      setNote(data.text);
      setSavedNote(data.text);
    };
    getNote();
  }, []);

  const handleSave = async () => {
    await fetch('http://localhost:5001/api/note', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: note }),
    });
    setSavedNote(note);
    alert('Note saved!');
  };
  
  return (
    <div className="card notes-manager">
      <h3>My Notes</h3>
      <textarea 
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows="8"
      />
      <div className="note-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setNote('')}>Clear</button>
      </div>
    </div>
  );
};

export default Notes;