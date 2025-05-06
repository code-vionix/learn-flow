export const getAllCourses = async (queryObj = {}) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_ROUTE_URL || "http://localhost:3000";
    const url = new URL(`${baseUrl}/courses`);

    // Convert queryObj to URLSearchParams
    Object.entries(queryObj).forEach(([key, value]) => {
      if (value) {
        url.searchParams.append(key, value);
      }
    });

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // ensure fresh data
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to fetch courses");
    }

    const data = await res.json();
    console.log("Fetched courses:", data); // 🔍 Log the fetched course data
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return [];
  }
};

  
  
  export const extractCourseFilters = (courses) => {
    const categories = new Set();
    const tags = new Set();
    const levels = new Set();
    const durations = new Set();
    const ratings = new Set();
  
    courses.forEach((course) => {
      if (course.category) categories.add(course.category);
  
      if (course.tags && Array.isArray(course.tags)) {
        course.tags.forEach((tag) => tags.add(tag));
      }
  
      if (course.level) levels.add(course.level);
  
      if (course.duration) durations.add(course.duration);
  
      if (course.reviews && Array.isArray(course.reviews) && course.reviews.length > 0) {
        course.reviews.forEach((review) => {
          if (review.rating && !ratings.has(review.rating)) {
            ratings.add(review.rating);
          }
        });
      }
    });
  
    return {
      categories: Array.from(categories),
      tags: Array.from(tags),
      levels: Array.from(levels),
      durations: Array.from(durations),
      ratings: Array.from(ratings),
    };
  };
  
  