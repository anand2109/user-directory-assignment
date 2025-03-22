import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/api";

export const getUsers = createAsyncThunk("users/fetchUsers", async () => {
  const data = await fetchUsers();
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 10,
    sortOrder: "asc",
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});

export const { setPage, setSortOrder } = userSlice.actions;
export default userSlice.reducer;
