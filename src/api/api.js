import { API_URL } from "../utils/constants";

export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  // Map data to required format
  return data?.users?.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    phone: user.phone,
    website: user.company?.address?.city || "N/A",
    address: `${user.address?.address}, ${user.address?.city}, ${user.address?.country}`,
    image: user.image,
  }));
};
