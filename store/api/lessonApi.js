import { apiSlice } from "./apiSlice";
import { courseApi } from "./courseApi";

export const lessonApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLesson: builder.query({
      query: () => `/lesson`,
      providesTags: ["lessons"],
    }),
    getLessonById: builder.query({
      query: (id) => `/lesson/${id}`,
      providesTags: ["lesson"],
    }),
    addNewLesson: builder.mutation({
      query: (lesson) => {
        return {
          url: "/lesson",
          method: "POST",
          body: lesson,
        };
      },
      invalidatesTags: ["lessons"],
      async onQueryStarted(
        { courseId, moduleId, title },
        { dispatch, queryFulfilled }
      ) {
        const tempId = `temp-${Date.now()}`;
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.push({
                id: tempId,
                title: title,
                moduleId: moduleId,
                contentType: null,
              });
          })
        );
        try {
          const { data: newModule } = await queryFulfilled;

          // ✅ Commit real data after fulfilled
          dispatch(
            courseApi.util.updateQueryData(
              "getCourseById",
              courseId,
              (draft) => {
                const index = draft.modules.findIndex((m) => m.id === moduleId);
                if (index !== -1) {
                  draft.modules[index].lessons[index] = newModule;
                }
              }
            )
          );
        } catch {
          patchCourse.undo();
        }
      },
    }),
    updateLesson: builder.mutation({
      query: (lesson) => {
        return {
          url: `/lesson/${lesson.lessonId}`,
          method: "PATCH",
          body: lesson,
        };
      },
      invalidatesTags: ["lessons", "lesson"],
      async onQueryStarted(
        { courseId, moduleId, title, lessonId },
        { dispatch, queryFulfilled }
      ) {
        const tempId = `temp-${Date.now()}`;
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.find((l) => l.id === lessonId).title = title;
          })
        );
        try {
          const { data: newModule } = await queryFulfilled;

          // ✅ Commit real data after fulfilled
          dispatch(
            courseApi.util.updateQueryData(
              "getCourseById",
              courseId,
              (draft) => {
                const index = draft.modules.findIndex((m) => m.id === moduleId);
                if (index !== -1) {
                  draft.modules[index].lessons[index] = newModule;
                }
              }
            )
          );
        } catch {
          patchCourse.undo();
        }
      },
    }),
    deleteLesson: builder.mutation({
      query: (lesson) => {
        return {
          url: `/lesson/${lesson.lessonId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["lessons"],
      async onQueryStarted(
        { courseId, moduleId, lessonId },
        { dispatch, queryFulfilled }
      ) {
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules.find((m) => m.id === moduleId).lessons = draft.modules
              .find((m) => m.id === moduleId)
              .lessons.filter((l) => l.id !== lessonId);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchCourse.undo();
        }
      },
    }),
    updateVideoUrl: builder.mutation({
      query: ({ lessonId, videoUrl }) => {
        return {
          url: `/lesson/${lessonId}`,
          method: "PATCH",
          body: { videoUrl },
        };
      },
      invalidatesTags: ["lessons", "lesson"],
      async onQueryStarted(
        { courseId, moduleId, lessonId, videoUrl },
        { dispatch, queryFulfilled }
      ) {
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.find((l) => l.id === lessonId).videoUrl = videoUrl;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchCourse.undo();
        }
      },
    }),
    updateDescription: builder.mutation({
      query: ({ lessonId, description }) => {
        return {
          url: `/lesson/${lessonId}`,
          method: "PATCH",
          body: { content: description },
        };
      },
      invalidatesTags: ["lessons", "lesson"],
      async onQueryStarted(
        { courseId, moduleId, lessonId, description },
        { dispatch, queryFulfilled }
      ) {
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.find((l) => l.id === lessonId).content = description;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchCourse.undo();
        }
      },
    }),
    updateAttachment: builder.mutation({
      query: ({ lessonId, attachment, moduleId }) => {
        return {
          url: `/lesson/attachment`,
          method: "POST",
          body: { file: attachment, moduleId, lessonId, name: "attachment" },
        };
      },
      invalidatesTags: ["lessons", "lesson"],
      async onQueryStarted(
        { courseId, moduleId, lessonId, attachment },
        { dispatch, queryFulfilled }
      ) {
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.find((l) => l.id === lessonId).attachment = attachment;
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.find((l) => l.id === lessonId).name = "attachment";
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchCourse.undo();
        }
      },
    }),
    updateNote: builder.mutation({
      query: ({ lessonId, title, note }) => {
        return {
          url: `/lesson/note`,
          method: "POST",
          body: { title, content: note, lessonId },
        };
      },
      invalidatesTags: ["lessons", "lesson"],
      async onQueryStarted(
        { courseId, moduleId, lessonId, title, note },
        { dispatch, queryFulfilled }
      ) {
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.find((l) => l.id === lessonId).note.title = title;
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.find((l) => l.id === lessonId).note.content = note;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchCourse.undo();
        }
      },
    }),
    updateCaptions: builder.mutation({
      query: ({ lessonId, caption }) => {
        return {
          url: `/lesson/${lessonId}`,
          method: "PATCH",
          body: { caption },
        };
      },
      invalidatesTags: ["lessons", "lesson"],
      async onQueryStarted(
        { courseId, moduleId, lessonId, caption },
        { dispatch, queryFulfilled }
      ) {
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules
              .find((m) => m.id === moduleId)
              .lessons.find((l) => l.id === lessonId).caption = caption;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchCourse.undo();
        }
      },
    }),
    uploadFile: builder.mutation({
      query: (formData) => {
        return {
          url: `upload`,
          method: "POST",
          body: formData,
          formData: true,
        };
      },
    }),
    uploadFiles: builder.mutation({
      query: (formData) => {
        return {
          url: `upload/multiple`,
          method: "POST",
          body: formData,
          formData: true,
        };
      },
    }),
  }),
});

export const {
  useGetAllLessonQuery,
  useGetLessonByIdQuery,
  useAddNewLessonMutation,
  useUpdateLessonMutation,
  useDeleteLessonMutation,
  useUpdateVideoUrlMutation,
  useUpdateDescriptionMutation,
  useUpdateAttachmentMutation,
  useUpdateNoteMutation,
  useUpdateCaptionsMutation,
  useUploadFileMutation,
  useUploadFilesMutation,
} = lessonApi;
