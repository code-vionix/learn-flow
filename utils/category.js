export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE_URL}/category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // optional: for SSR freshness
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to fetch categories");
    }

    const data = await res.json();
    return data; // assuming the response contains category array
  } catch (error) {
    console.error("Fetch category error:", error.message);
    return []; // return empty list on error
  }
};
