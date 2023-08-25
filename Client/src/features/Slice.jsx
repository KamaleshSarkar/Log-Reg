import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { register,logIn } from "../Api/Api";


//For LogIn//
export const login = createAsyncThunk("/getLogIn", async ({formValue,navigate}) => {
    try {
      const response = await logIn(formValue);
      if (response) {
        console.log("LogIn Sucessfull");
        navigate('/home')
        return response.data;
      }
    } catch (error) {
      console.error("Error:", error.message);
      throw new Error(error.message);
    }
  });

  //For Registration//
export const registration = createAsyncThunk(
    "/getRegistration",
    async ({formData,navigate}) => {
    try {
        const response = await register(formData);
      console.log(response);
        if (response) {
          console.log("Registered successfully");
          navigate("/");
          return response.data;
        }
      } catch (error) {
        console.error("Error:", error.message);
        throw new Error(error.message);
      }
    }
  );
  export const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      error: "",
      loading: false,
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
    },
    extraReducers: {
      [logIn.pending]: (state, action) => {
        state.loading = true;
      },
      [logIn.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      },
      [logIn.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
  
      [register.pending]: (state, action) => {
        state.loading = true;
      },
      [register.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      },
      [register.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
    },
  });
  
  export const { setUser } = authSlice.actions;
  export default authSlice.reducer;
  