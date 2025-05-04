import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { set } from "date-fns";

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
  "course/fetchCategories",
  async () => {
    const res = await fetch(`http://localhost:3001/api/v1/category`);
    const data = await res.json();
    return data;
  }
);

const initialState = {
  courseBasicData: {},
  courseAdvancedData: {},
  activeTab: "basic",
  category: [],
  subCategory: [],
};

const courseCreateSlice = createSlice({
  name: "course",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },

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

    // manage useState in basicCourseForm
    setSubCategory: (state, action) => {
      state.subCategory = action.payload;
    },
  },
});

export const {
  setBasicCourse,
  setActiveTab,
  setCourseAdvancedData,
  setSubCategory,
} = courseCreateSlice.actions;
export default courseCreateSlice.reducer;
