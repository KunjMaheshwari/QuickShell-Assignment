import React from "react";

const generateAvatarColor = (name) => {
  const hash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const color = `hsl(${hash % 360}, 70%, 70%)`;
  return color;
};

const getInitials = (name) => {
  const parts = name.split(" ");
  return parts.length > 1
    ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    : `${parts[0][0]}`.toUpperCase();
};

const UserAvatar = ({ name }) => {
  const avatarColor = generateAvatarColor(name);
  const initials = getInitials(name);

  return (
    <div className="avatar" style={{ backgroundColor: avatarColor }}>
      {initials}
    </div>
  );
};

export default UserAvatar;
