export const getAllCourses = async (queryParams = "") => {
  try {
    // Fetch the API base URL from environment variables (default to localhost if not set)
    const baseUrl =
      process.env.NEXT_PUBLIC_API_ROUTE_URL || "http://localhost:3000";

    // Construct the full API URL
    const apiUrl = `${baseUrl}/courses${queryParams ? `?${queryParams}` : ""}`;

    // Make the fetch request
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Optional: For fresh data in SSR
    });

    // If response is not okay, throw an error with the error message from the API
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to fetch courses");
    }

    // Parse the response data
    const data = await res.json();
    return data;
  } catch (error) {
    // Log the error message
    console.error("Fetch error:", error.message);

    // Return an empty array in case of error
    return [];
  }
};

export const extractCourseFilters = (courses) => {
  const categoryMap = new Map();
  const tags = new Set();
  const levels = new Set();
  const durations = new Set();
  const ratings = new Set();

  courses.forEach((course) => {
    // Unique category by ID
    if (course.category && course.category.id) {
      categoryMap.set(course.category.id, course.category);
    }

    // Unique tags
    if (Array.isArray(course.tags)) {
      course.tags.forEach((tag) => tags.add(tag));
    }

    // Unique levels
    if (course.level) levels.add(course.level);

    // Unique durations
    if (course.duration) durations.add(course.duration);

    // Unique ratings
    if (Array.isArray(course.reviews)) {
      course.reviews.forEach((review) => {
        if (review.rating) ratings.add(review.rating);
      });
    }
  });

  return {
    categories: Array.from(categoryMap.values()),
    tags: Array.from(tags),
    levels: Array.from(levels),
    durations: Array.from(durations),
    ratings: Array.from(ratings),
  };
};
