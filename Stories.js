import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Stories({ userId }) {
  const [stories, setStories] = useState([]);
  const [file, setFile] = useState(null);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/stories`).then(res => setStories(res.data));
  }, []);
  const uploadStory = () => {
    const data = new FormData();
    data.append("file", file);
    axios.post(`${process.env.REACT_APP_API_URL}/api/stories/upload`, data);
  };
  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadStory}>Add Story</button>
      <div>
        {stories.map(story => (
          <img src={story.url} alt="story" key={story._id} width={120} />
        ))}
      </div>
    </div>
  );
}