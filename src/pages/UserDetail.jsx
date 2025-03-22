import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserById = async (userId) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser({
        id: data?.id,
        name: `${data?.firstName} ${data?.lastName}`,
        email: data.email,
        phone: data.phone,
        address: `${data?.address.address}, ${data?.address.city}, ${data?.address.country}`,
        image: data?.image,
        bloodGroup: data?.bloodGroup,
        company: {
          department: "Engineering",
          name: "Dooley, Kozey and Cronin",
          title: "Sales Manager",
          address: `${data?.company.address?.address}, ${data?.company?.address.city}, ${data?.company?.address.country}`,
        },
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  // Fetch user only if it's not already loaded
  useEffect(() => {
    if (!user) {
      fetchUserById(id);
    }
  }, [id]);

  useEffect(() => {
    if (error) {
      const redirectTimeout = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [error, navigate]);

  if (loading) return <Loader />;
  if (error) return <ErrorState userDetail={true} />;

  return (
    <div className="user-detail-container">
      <h1>User Detail</h1>
      <div className="user-details">
        <img src={user.image} alt={user.name} className="user-image" />
        <h2 className="user-name">{user.name}</h2>
        <p className="user-detail">
          Email: <span>{user.email}</span>
        </p>
        <p className="user-detail">
          Phone: <span>{user.phone}</span>
        </p>
        <p className="user-detail">
          Location: <span>{user.address}</span>
        </p>
        <p className="user-detail">
          Blood Group: <span>{user.bloodGroup}</span>
        </p>
        <p className="user-detail">
          Company: <span>{user.company.name}</span>
        </p>
        <p className="user-detail">
          Department: <span>{user.company.department}</span>
        </p>
        <p className="user-detail">
          Company Address: <span>{user.company.address}</span>
        </p>
      </div>

      <Link to={`/`}>Go Back</Link>
    </div>
  );
};

export default UserDetail;
