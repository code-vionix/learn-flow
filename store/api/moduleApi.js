import { apiSlice } from "./apiSlice";
import { courseApi } from "./courseApi"; // ✅ import the courseApi

export const moduleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllModule: builder.query({
      query: () => `/module`,
      providesTags: ["modules"],
    }),
    getModuleById: builder.query({
      query: (id) => `/module/${id}`,
      providesTags: ["module"],
    }),
    getModuleByCourseId: builder.query({
      query: (id) => `/module`,
      providesTags: ["module"],
      transformResponse: (response) =>
        response.filter(
          (module) => module.courseId === "6824ed550c4ec6f31296c8f1"
        ),
    }),
    addNewModule: builder.mutation({
      query: (module) => {
        return {
          url: "/module",
          method: "POST",
          body: module,
        };
      },
      invalidatesTags: ["modules", "courses"],
      async onQueryStarted(
        { courseId, title, moduleId },
        { dispatch, queryFulfilled }
      ) {
        const tempId = `temp-${Date.now()}`;
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules.push({
              id: tempId,
              title: title,
              moduleId: moduleId,
              lessons: [],
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
                const index = draft.modules.findIndex((m) => m.id === tempId);
                if (index !== -1) {
                  draft.modules[index] = newModule;
                } else {
                  draft.modules.push(newModule);
                }
              }
            )
          );
        } catch {
          patchCourse.undo();
        }
      },
    }),
    updateModule: builder.mutation({
      query: ({ moduleId, title }) => {
        return {
          url: `/module/${moduleId}`,
          method: "PATCH",
          body: { title },
        };
      },
      invalidatesTags: ["modules", "module", "courses"],
      async onQueryStarted(
        { courseId, moduleId, title },
        { dispatch, queryFulfilled }
      ) {
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules = draft.modules.map((module) => {
              if (module.id === moduleId) {
                module.title = title;
              }
              return module;
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
                  draft.modules[index] = newModule;
                } else {
                  draft.modules.push(newModule);
                }
              }
            )
          );
        } catch {
          patchCourse.undo();
        }
      },
    }),
    deleteModule: builder.mutation({
      query: ({ courseId, moduleId }) => {
        return {
          url: `/module/${moduleId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["modules", "courses"],
      async onQueryStarted(
        { courseId, moduleId },
        { dispatch, queryFulfilled }
      ) {
        const patchCourse = dispatch(
          courseApi.util.updateQueryData("getCourseById", courseId, (draft) => {
            draft.modules = draft.modules.filter(
              (module) => module.id !== moduleId
            );
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchCourse.undo();
        }
      },
    }),
  }),
});

export const {
  useGetAllModuleQuery,
  useGetModuleByIdQuery,
  useGetModuleByCourseIdQuery,
  useAddNewModuleMutation,
  useUpdateModuleMutation,
  useDeleteModuleMutation,
} = moduleApi;
