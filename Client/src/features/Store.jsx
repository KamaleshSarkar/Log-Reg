import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Slice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
