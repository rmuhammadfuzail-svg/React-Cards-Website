function ProfileCard({
  name,
  bio,
  avatar,
  isFollowed,
  onToggleFollow
}) {
  return (
    <div className="card">
      <img src={avatar} alt={name} />

      <h2>{name}</h2>

      <p>{bio}</p>

      <button onClick={onToggleFollow}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;