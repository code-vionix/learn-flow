import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "basic",
  activeLecture: { sectionId: null, lectureId: null, moduleId: null },
  activeModule: { sectionId: null, moduleId: null },
};

const courseUpdateSlice = createSlice({
  name: "courseUpdate",
  initialState,
  reducers: {
    setEditActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setEditActiveLecture: (state, action) => {
      state.activeLecture = action.payload;
    },
    setEditActiveModule: (state, action) => {
      state.activeModule = action.payload;
    },
    setEditCourseData: (state) => {
      state.activeTab = "basic";
      state.activeLecture = {
        sectionId: null,
        lectureId: null,
        moduleId: null,
      };
      state.activeModule = { sectionId: null, moduleId: null };
    },
  },
});

export const {
  setEditActiveTab,
  setEditActiveLecture,
  setEditActiveModule,
  setEditCourseData,
} = courseUpdateSlice.actions;
export default courseUpdateSlice.reducer;
