import "./Profile.css";

function Profile() {
  const user = {
    name: "Celine dion",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/C%C3%A9line_Dion_2012.jpg",
    imageSize: 90,
  };

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`photo of` + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}

export default Profile;
