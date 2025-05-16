export const getAllCourses = async () => {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_ROUTE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures fresh data for SSR
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to fetch courses");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
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

// get instructor by courseId

export const getCourseDataByCourseId = async (dataName, courseId) => {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_ROUTE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/courses/${courseId}/${dataName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures fresh data for SSR
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to fetch courseData");
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error.massage);
  }
};
