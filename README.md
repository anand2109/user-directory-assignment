# 🧑‍💻 User Directory - React + Redux Application

This is a **User Directory Application** built with **React, Redux, and Vite**. The application fetches user data from the [DummyJSON API](https://dummyjson.com/users?limit=200) and displays the user list with search, sorting, pagination, and detailed user information.

---

## 🚀 **Features**

✅ Fetches 200 users from DummyJSON API\
✅ Displays a list of users with search and sort functionality\
✅ View detailed user information by clicking on "View Details"\
✅ Pagination with dynamic active button\
✅ Error handling and API re-fetch on page reload\
✅ Test coverage with Vitest and React Testing Library

---

## 📂 **Project Structure**

```
/user-directory
├── /public
│   ├── /fonts        # Font files if using locally
│   └── /index.html   # Main HTML file
├── /src
│   ├── /api
│   │   └── api.js           # Fetch API logic
│   ├── /app
│   │   └── store.js         # Redux store
│   ├── /components
│   │   ├── UserCard.jsx     # Displays user summary
│   │   └── UserDetails.jsx  # Detailed user info
│   ├── /features
│   │   └── /users
│   │       ├── userAPI.js   # API logic for fetching users
│   │       └── userSlice.js # Redux slice
│   ├── /pages
│   │   ├── Home.jsx         # Home page (list and search)
│   │   └── UserDetail.jsx   # User detail page
│   ├── /routes
│   │   └── AppRoutes.jsx    # Routes configuration
│   ├── /styles
│   │   └── App.css          # Application styles
│   ├── /tests
│   │   ├── UserCard.test.jsx    # Unit test for UserCard
│   │   └── setupTests.js    # Jest configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── /tests
│   └── testUtils.js         # Utility to wrap MemoryRouter
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ **Installation**

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/user-directory.git
```

### 2. **Navigate to the Project Directory**

```bash
cd user-directory
```

### 3. **Install Dependencies**

```bash
npm install
```

---

## 🚀 **Run the Application**

### 1. **Start the Development Server**

```bash
npm run dev
```

✅ The application will be available at:

```
http://localhost:5173
```

---

## 🧪 **Run Tests**

### 1. **Run All Tests**

```bash
npm run test
```

---

## 🔥 **Build for Production**

```bash
npm run build
```

---

## 🧐 **Testing Details**

- **Unit Tests:** Located in the `src/tests` directory.
- **Test Runner:** `Vitest` is used to run the tests.
- **React Testing Library:** Used for testing UI components.

To debug any issues with tests:

```bash
npx vitest --ui
```

---

## 🎯 **API Details**

The application fetches data from:

```
https://dummyjson.com/users?limit=200
```

✅ Each user contains the following properties:

- `id`, `firstName`, `lastName`, `email`, `phone`, `address`, `image`, etc.

---

## 📝 **Usage Instructions**

1. **Search Users:** Type in the search box to filter users by name or email.
2. **View Details:** Click on "View Details" to see detailed information about a user.
3. **Sort Data:** Use the sort buttons to sort users alphabetically (A-Z or Z-A).
4. **Pagination:** Navigate between pages using pagination controls.

---

## 🛑 **Troubleshooting**

If you encounter any issues:

- Check the console for API or network errors.
- Ensure that the API URL in `api.js` is correct.
- Run tests and check the error output.

---

## 👩‍💻 **Author**

Built by Anand Vardhan Singh
