"use server";
const baseUrl =
  process.env.NEXT_PUBLIC_API_ROUTE_URL || "http://localhost:3000";

export const popularInstructors = async () => {
  try {
    const res = await fetch(`${baseUrl}/instructors/popular-instructor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures fresh data for SSR
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to fetch instructors");
    }

    const data = await res.json();
    console.log(data);
    return formatResponse(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
    return [];
  }
};

export const topInstructors = async () => {
  try {
    const res = await fetch(`${baseUrl}/instructors/top-instructor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures fresh data for SSR
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to fetch instructors");
    }

    const data = await res.json();
    console.log(data);
    return formatResponse(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
    return [];
  }
};

export const instructorsOfThisMonth = async () => {
  try {
    const res = await fetch(`${baseUrl}/instructors/top-instructor-of-month`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to fetch instructors");
    }

    const data = await res.json();
    console.log(data);
    return formatResponse(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
    return [];
  }
};

function formatResponse(data) {
  return data.map((data) => {
    return {
      name: data.user.firstname + " " + data.user.lastname,
      image: data.user.imageUrl,
      bio: data.bio,
      rating: data.rating,
      students: data.students,
    };
  });
}
