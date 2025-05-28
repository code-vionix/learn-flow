import { getCourseDataByCourseId } from "@/utils/courses";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch modules
export const fetchModules = createAsyncThunk(
  "coursePlayer/fetchModules",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await getCourseDataByCourseId("modules", courseId);
      return { courseId, modules: response.data || [] };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  courseId: null,
  modules: [],
  currentModuleId: null,
  currentLessonId: null,
  videoProgress: {}, // { lessonId: { watchedDuration, totalDuration } }
  loading: false,
  error: null,
};

const coursePlayerSlice = createSlice({
  name: "coursePlayer",
  initialState,
  reducers: {
    setCurrentLesson: (state, action) => {
      const { moduleId, lessonId } = action.payload;
      const selectedModule = state.modules.find((m) => m.id === moduleId);
      const lesson = selectedModule?.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        lesson.isFinished = true;
        state.currentModuleId = moduleId;
        state.currentLessonId = lessonId;
      }
    },

    goToNextLesson: (state) => {
      const modIndex = state.modules.findIndex(
        (m) => m.id === state.currentModuleId
      );
      if (modIndex === -1) return;

      const lessonIndex = state.modules[modIndex].lessons.findIndex(
        (l) => l.id === state.currentLessonId
      );
      if (lessonIndex === -1) return;

      const isLastLesson =
        lessonIndex === state.modules[modIndex].lessons.length - 1;

      if (isLastLesson) {
        const isLastModule = modIndex === state.modules.length - 1;
        if (!isLastModule) {
          const nextMod = state.modules[modIndex + 1];
          state.currentModuleId = nextMod.id;
          state.currentLessonId = nextMod.lessons[0].id;
        }
      } else {
        const nextLesson = state.modules[modIndex].lessons[lessonIndex + 1];
        state.currentLessonId = nextLesson.id;
      }
    },

    setVideoProgress: (state, action) => {
      const { lessonId, watchedDuration, totalDuration } = action.payload;
      state.videoProgress[lessonId] = {
        watchedDuration,
        totalDuration,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchModules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchModules.fulfilled, (state, action) => {
        const { courseId, modules } = action.payload;
        state.courseId = courseId;
        state.modules = modules;

        if (modules.length > 0) {
          state.currentModuleId = modules[0].id;
          if (modules[0].lessons.length > 0) {
            state.currentLessonId = modules[0].lessons[0].id;
          }
        }

        state.loading = false;
      })
      .addCase(fetchModules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentLesson, goToNextLesson, setVideoProgress } =
  coursePlayerSlice.actions;

// Updated selector: get current lesson from currentModuleId & currentLessonId
export const selectCurrentLesson = (state) => {
  const { modules, currentModuleId, currentLessonId } = state.coursePlayer;
  if (!modules.length || !currentModuleId || !currentLessonId) return null;

  const currentModule = modules.find((m) => m.id === currentModuleId);
  if (!currentModule) return null;

  return currentModule.lessons.find((l) => l.id === currentLessonId) || null;
};

export default coursePlayerSlice.reducer;
