import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const addBookmark = () => {
    if (url && title) {
      setBookmarks([...bookmarks, { url, title }]);
      setUrl('');
      setTitle('');
    }
  };

  const removeBookmark = (index) => {
    setBookmarks(bookmarks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Bookmark Manager</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Bookmark Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="Bookmark URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={addBookmark}>Add Bookmark</button>
      </div>
      <ul className="bookmark-list">
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title}
            </a>
            <button onClick={() => removeBookmark(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default App;
