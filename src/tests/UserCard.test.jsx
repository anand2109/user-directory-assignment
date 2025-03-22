import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserCard from "../components/UserCard";

const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

test("renders user card correctly", () => {
  render(
    <MemoryRouter>
      <UserCard user={mockUser} />
    </MemoryRouter>
  );

  expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  expect(screen.getByLabelText("user-email")).toHaveTextContent(
    "john@example.com"
  );
  expect(screen.getByText("View Details")).toBeInTheDocument();
});
