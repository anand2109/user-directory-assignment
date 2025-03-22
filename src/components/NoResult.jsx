import React from "react";

const Noresult = () => {
  return (
    <div className="no-result-conatiner">
      <img src="/assets/no-search-found.svg" alt="no-result" />
      <p className="no-result-text">No users found matching the search.</p>
    </div>
  );
};

export default Noresult;
