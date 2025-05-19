import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseBasicData: {},
  courseAdvancedData: {},
  activeTab: "basic",
  category: [],
  courseId: "",
  activeLecture: { sectionId: null, lectureId: null, moduleId: null },
  activeModule: { sectionId: null, moduleId: null },
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
    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },
    setActiveLecture: (state, action) => {
      state.activeLecture = action.payload;
    },
    setActiveModule: (state, action) => {
      state.activeModule = action.payload;
    },
  },
});

export const {
  setBasicCourse,
  setActiveTab,
  setCourseAdvancedData,
  setCourseId,
  setActiveLecture,
  setActiveModule,
} = courseCreateSlice.actions;
export default courseCreateSlice.reducer;
