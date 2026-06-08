import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Ali",
      bio: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?img=1",
      isFollowed: false,
    },
    {
      id: 2,
      name: "Ahmed",
      bio: "React Learner",
      avatar: "https://i.pravatar.cc/150?img=2",
      isFollowed: true,
    },
    {
      id: 3,
      name: "Sara",
      bio: "UI Designer",
      avatar: "https://i.pravatar.cc/150?img=3",
      isFollowed: false,
    },
  ]);

  const toggleFollow = (id) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === id
          ? {
              ...profile,
              isFollowed: !profile.isFollowed,
            }
          : profile
      )
    );
  };

  useEffect(() => {
    console.log("Follow status updated");
  }, [profiles]);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <h1>Dynamic Profile Card App</h1>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-container">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            bio={profile.bio}
            avatar={profile.avatar}
            isFollowed={profile.isFollowed}
            onToggleFollow={() =>
              toggleFollow(profile.id)
            }
          />
        ))}
      </div>

    </div>
  );
}

export default App;