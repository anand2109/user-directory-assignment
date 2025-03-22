import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.image} alt={user.name} className="user-image" />
      <h3 className="user-name">{user.name}</h3>
      <p className="user-detail">
        Email: <span aria-label="user-email">{user.email}</span>
      </p>
      <p className="user-detail">
        Phone: <span>{user.phone}</span>
      </p>
      <p className="user-detail">
        Location: <span>{user.address}</span>
      </p>
      <Link to={`/user/${user.id}`}>View Details</Link>
    </div>
  );
};

export default UserCard;
