import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseBasicData: {},
  courseAdvancedData: {},
  activeTab: "basic",
  category: [],
};

const courseCreateSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setBasicCourse: (state, action) => {
      state.courseBasicData = action.payload;
    },
    setCourseAdvancedData: (state, action) => {
      state.courseAdvancedData = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setBasicCourse, setActiveTab, setCourseAdvancedData } =
  courseCreateSlice.actions;
export default courseCreateSlice.reducer;
