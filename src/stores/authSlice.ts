import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define types for user and state
interface User {
  id: string;
  name: string;
  email: string;
  token: string; 
}


interface UserData {
  name?: string; 
  email: string; 
  password: string 
}


interface AuthState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  data: null,
  loading: false,
  error: null,
};


export const registerUser = createAsyncThunk('auth/registerUser', async ({name, email, password }: UserData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', {name, email, password });
      return response.data; 
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Something went wrong');
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser',async (userData: UserData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', userData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

// Create slice
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    // You can add other actions for logging out or resetting the state
    logout: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register user async thunk states
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.data = action.payload; // Store user info in state
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Store error message if registration fails
      })
      // Login user async thunk states
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.data = action.payload; // Store user info and token after login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Store error message if login fails
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
