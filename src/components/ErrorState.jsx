import React from "react";

const ErrorState = ({ userDetail = false }) => {
  return (
    <div className="error-image-container">
      <img src="/assets/errorimg.webp" alt="loader" />
      <p className="error-text">
        {userDetail ? "User not found. Redirecting..." : "Error loading users!"}
      </p>
    </div>
  );
};

export default ErrorState;
