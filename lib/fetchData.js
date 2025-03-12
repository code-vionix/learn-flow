import { promises as fs } from "fs";
import path from "path";

const fetchCourses = async () => {
  try {
    const filePath = path.join(process.cwd(), "data", "data.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return data.courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

const getInstructors = async () => {
  const courses = await fetchCourses();
  return courses.flatMap((course) => course.instructors);
};

const getUserReviews = async () => {
  const courses = await fetchCourses();
  return courses.flatMap((course) => course.user_reviews);
};

export { fetchCourses, getInstructors, getUserReviews };
