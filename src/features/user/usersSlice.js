import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  isLoading: true,
  error: [undefined],
};

export const fetchUsers = createAsyncThunk(
  'users/getusers',
  async (name, thunkAPI) => {
    try {
      const resp = await axios('url');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Oops! Something went wrong');
    }
  },
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log('Error', action.payload);
        state.error = true;
      });
  },
});

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
