import axiosInstance from "@/utils/axios";

export const fetchProfile = async (id) => {
  const response = await axiosInstance.get(`instructors/${id}`);
  return response.data;
};
