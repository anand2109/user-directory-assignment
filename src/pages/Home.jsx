import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setPage, setSortOrder } from "../features/users/userSlice";
import UserCard from "../components/UserCard";
import "../styles/App.css";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

const Home = () => {
  const dispatch = useDispatch();
  const { list, loading, error, currentPage, itemsPerPage, sortOrder } =
    useSelector((state) => state.users);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <ErrorState />;

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;

  // Filtered and sorted list
  const filteredList = list
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const currentUsers = filteredList.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="home-container">
      <h1 className="title">User Directory</h1>
      {/* Search Input */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="sorting-btns">
          <button onClick={() => dispatch(setSortOrder("asc"))}>
            Sort A-Z
          </button>
          <button onClick={() => dispatch(setSortOrder("desc"))}>
            Sort Z-A
          </button>
        </div>
      </div>

      {/* User List */}
      <div className="user-list">
        {currentUsers.length > 0 ? (
          currentUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users found matching the search.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {[...Array(Math.ceil(filteredList.length / itemsPerPage)).keys()].map(
          (num) => (
            <button
              className={`pagination-btn ${
                currentPage === num + 1 ? "active" : ""
              }`}
              key={num + 1}
              onClick={() => dispatch(setPage(num + 1))}
            >
              {num + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
