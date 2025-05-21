export const getCourseById = async (id) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_ROUTE_URL || "http://localhost:3000";

  if (!id) {
    throw new Error("Course ID is required");
  }

  try {
    // Add timestamp to bypass browser cache
    const res = await fetch(`${baseUrl}/courses/${id}?t=${Date.now()}`);

    if (!res.ok) {
      const errorData = await res.json();
      console.log(errorData);
      throw new Error(errorData.message || "Failed to fetch course");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};
