import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseBasicData: {},
  courseAdvancedData: {},
  activeTab: "basic",
};

const courseCreateSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.courseBasicData = action.payload;
    },
    setCourseAdvancedData: (state, action) => {
      state.courseAdvancedData = action.payload;
    },
    setActiveTab: (state, action) => {
      console.log(action.payload);
      state.activeTab = action.payload;
    },
  },
});

export const { setCourse, setActiveTab, setCourseAdvancedData } =
  courseCreateSlice.actions;
export default courseCreateSlice.reducer;
