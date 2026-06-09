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
  {
    id: 4,
    name: "Fatima",
    bio: "Web Developer",
    avatar: "https://i.pravatar.cc/150?img=4",
    isFollowed: false,
  },
  {
    id: 5,
    name: "Hassan",
    bio: "JavaScript Expert",
    avatar: "https://i.pravatar.cc/150?img=5",
    isFollowed: true,
  },
  {
    id: 6,
    name: "Ayesha",
    bio: "Graphic Designer",
    avatar: "https://i.pravatar.cc/150?img=6",
    isFollowed: false,
  },
  {
    id: 7,
    name: "Usman",
    bio: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=7",
    isFollowed: false,
  },
  {
    id: 8,
    name: "Zain",
    bio: "MERN Stack Student",
    avatar: "https://i.pravatar.cc/150?img=8",
    isFollowed: true,
  },
  {
    id: 9,
    name: "Maryam",
    bio: "Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=9",
    isFollowed: false,
  },
  {
    id: 10,
    name: "Bilal",
    bio: "React Developer",
    avatar: "https://i.pravatar.cc/150?img=10",
    isFollowed: false,
  },
  {
    id: 11,
    name: "Hamza",
    bio: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=11",
    isFollowed: true,
  },
  {
    id: 12,
    name: "Noor",
    bio: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=12",
    isFollowed: false,
  },
  {
    id: 13,
    name: "Abdullah",
    bio: "Python Programmer",
    avatar: "https://i.pravatar.cc/150?img=13",
    isFollowed: false,
  },
  {
    id: 14,
    name: "Iqra",
    bio: "Frontend Intern",
    avatar: "https://i.pravatar.cc/150?img=14",
    isFollowed: true,
  },
  {
    id: 15,
    name: "Talha",
    bio: "Software Student",
    avatar: "https://i.pravatar.cc/150?img=15",
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