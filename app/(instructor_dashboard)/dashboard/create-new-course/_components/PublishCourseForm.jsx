"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGetInstructorListQuery } from "@/store/api/instructorApi";
import { useGetCourseByIdQuery } from "@/store/api/courseApi";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import useEffect
import { useSelector } from "react-redux"; // useDispatch was imported but not used

// Import useForm and other necessary functions from react-hook-form
import { useForm } from "react-hook-form";
import { useUpdateCourseMutation } from "@/store/api/courseApi";
import { setCourseData } from "@/store/slice/courseCreateSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const PublishCourseForm = () => {
  // Local state for search input and selected users display
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  // selectedUsers will store the *full objects* needed for display (avatar, name, etc.)
  const [selectedUsers, setSelectedUsers] = useState([]);
  const courseId = useSelector((state) => state.course.courseId);
  const { data: courseData } = useGetCourseByIdQuery(courseId);
  // Fetch instructor data
  const { data, isLoading, isError } = useGetInstructorListQuery();
  const [updateCourse, { isLoading: updateCourseLoading }] =
    useUpdateCourseMutation();
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      welcomeMessage: courseData?.welcomeMessage,
      congratulationsMessage: courseData?.congratulationsMessage,
      instructors:
        courseData?.CourseInstructor?.map(
          (instructor) => instructor.instructorId
        ) || [], // Initialize instructors as an empty array of IDs
      price: courseData?.price || 0, // Default value for price
      discount: courseData?.discountPercentage || 0, // Default value for discount
    },
  });
  useEffect(() => {
    console.log("courseData", courseData);
    setValue("welcomeMessage", courseData?.welcomeMessage);
    setValue("congratulationsMessage", courseData?.congratulationsMessage);

    setValue("price", courseData?.price);
    setValue("discount", courseData?.discountPercentage);
    if (data && courseData?.CourseInstructor?.length > 0) {
      setValue(
        "instructors",
        courseData?.CourseInstructor?.map(
          (instructor) => instructor.instructorId
        )
      );
      const selectedUsersData = courseData?.CourseInstructor?.map(
        (instructor) =>
          data?.data?.find((item) => item.id === instructor.instructorId)
      );
      console.log("selectedUsersData", selectedUsersData);
      setSelectedUsers(selectedUsersData);
    }
  }, [courseData, setValue, data]);
  // Watch the instructors field (optional, but can be useful)
  const formInstructors = watch("instructors");

  const availableInstructors = data?.data || [];

  const filteredUsers = availableInstructors?.filter(
    (instructor) =>
      (instructor?.user?.firstName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
        instructor?.name?.toLowerCase().includes(search.toLowerCase())) &&
      !selectedUsers.some((selected) => selected?.id === instructor?.id)
  );

  // --- Handlers for selecting/removing instructors ---

  // When a user is selected from the search results
  const handleSelectUser = (instructor) => {
    // Add the selected instructor object to our local display state
    setSelectedUsers((prev) => {
      const newSelectedUsers = [...prev, instructor];
      setValue(
        "instructors",
        newSelectedUsers.map((item) => item.id)
      );
      return newSelectedUsers;
    });
    // Clear the search input
    setSearch("");
  };

  // When a user is removed from the selected list
  const handleRemoveUser = (instructorIdToRemove) => {
    // Filter out the user from our local display state by the instructor object's ID
    setSelectedUsers((prev) => {
      const newSelectedUsers = prev.filter(
        (instructor) => instructor.id !== instructorIdToRemove
      );
      setValue(
        "instructors",
        newSelectedUsers.map((item) => item.id)
      );
      return newSelectedUsers;
    });
  };

  const onSubmit = async (formData) => {
    console.log("Form Data Submitted:", formData);
    await updateCourse({
      id: courseId,
      course: formData,
    }).unwrap();

    dispatch(setCourseData());
    router.push("/my-courses-list");
  };

  const handleSaveAndPreview = (formData) => {
    console.log("Form Data Submitted:", formData);
    updateCourse({
      id: courseId,
      course: formData,
    });
  };

  const handleSave = (formData) => {
    console.log("Form Data Submitted:", formData);
    updateCourse({
      id: courseId,
      course: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Wrap the form with the handler */}
      <div className="md:px-8 px-2 flex items-center justify-between mb-6 border-b pb-4">
        <h1 className="text-xl font-semibold">Publish Course</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            type="button" // Use type="button" to prevent form submission if not intended
            className="bg-white hover:bg-primary-500 duration-200 hover:text-white"
            onClick={handleSubmit(handleSave)}
          >
            Save
          </Button>
          <Button
            variant="outline"
            type="button" // Use type="button"
            className="!bg-primary-100 text-primary-500 hover:text-white hover:!bg-primary-500 duration-200"
            onClick={handleSubmit(handleSaveAndPreview)}
          >
            Save & Preview
          </Button>
        </div>
      </div>
      <div className="space-y-6 md:px-8 px-2">
        <div>
          <h2 className="text-base font-medium mb-4">Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="welcomeMessage" className="text-sm font-medium">
                Welcome Message
              </label>
              <Textarea
                id="welcomeMessage"
                placeholder="Enter course starting message here..."
                className="min-h-[120px] resize-none"
                {...register("welcomeMessage")} // Register the input with RHF
              />
              {/* {errors.welcomeMessage && <p className="text-red-500">Welcome message is required</p>} Add validation feedback */}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="congratulationsMessage"
                className="text-sm font-medium"
              >
                Congratulations Message
              </label>
              <Textarea
                id="congratulationsMessage"
                placeholder="Enter your course completed message here..."
                className="min-h-[120px] resize-none"
                {...register("congratulationsMessage")} // Register the input with RHF
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium mb-4">Add Instructor</h2>
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name"
              className="pl-9"
            />
            {search && filteredUsers && filteredUsers.length > 0 && (
              <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-60 overflow-y-auto">
                {filteredUsers.map((instructor) => (
                  <li
                    key={instructor.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-3"
                    onClick={() => handleSelectUser(instructor)}
                  >
                    <div className="relative w-8 h-8">
                      {instructor.imageUrl ? (
                        <Image
                          src={instructor.imageUrl}
                          alt="Instructor avatar"
                          fill // Use fill for better image handling
                          className="rounded-full object-cover border"
                        />
                      ) : (
                        // Fallback or placeholder if no avatar
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-600">
                          {instructor.name?.charAt(0) || "N/A"}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{instructor.name}</p>
                      <p className="text-xs text-gray-500">{instructor.role}</p>
                    </div>
                  </li>
                ))}
                {/* Show loading/error state for the search dropdown */}
                {isLoading && (
                  <li className="px-4 py-2 text-gray-500">Loading...</li>
                )}
                {isError && (
                  <li className="px-4 py-2 text-red-500">
                    Error fetching instructors.
                  </li>
                )}
              </ul>
            )}
            {/* Optional: Show message if search is active but no results found */}
            {search &&
              filteredUsers &&
              filteredUsers.length === 0 &&
              !isLoading &&
              !isError && (
                <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow">
                  <li className="px-4 py-2 text-gray-500">
                    No instructors found matching &quot;{search}&quot;.
                  </li>
                </ul>
              )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 mt-4">
            {selectedUsers.map((instructor) => (
              <div
                key={instructor.id}
                className="flex justify-between items-center gap-2 bg-gray-100 p-4 rounded-md"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10">
                    {instructor.imageUrl ? (
                      <Image
                        src={instructor.imageUrl}
                        alt="Instructor imageUrl"
                        fill
                        className="rounded-full object-cover border"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg text-gray-600">
                        {instructor.name?.charAt(0) || "N/A"}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{instructor.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {instructor.role}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 ml-2 text-red-500 hover:bg-red-100 hover:text-red-600" // Added color to close button
                  onClick={() => handleRemoveUser(instructor.id)} // Pass the instructor object's ID
                  type="button" // Prevent form submission when removing
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          {/* Display validation error for instructors if needed */}
          {/* {errors.instructors && <p className="text-red-500">Please select at least one instructor.</p>} */}
        </div>

        {/* Price and Discount Section */}
        <div>
          <h2 className="text-base font-medium mb-4">Price & Discount</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">
                Price
              </label>
              <Input
                id="price"
                type="number"
                placeholder="Enter course price"
                step="0.01" // Allow decimal inputs for price
                {...register("price", { valueAsNumber: true })} // Register as number
              />
              {/* {errors.price && <p className="text-red-500">Valid price is required.</p>} Add validation feedback */}
            </div>
            <div className="space-y-2">
              <label htmlFor="discount" className="text-sm font-medium">
                Discount
              </label>
              <Input
                id="discount"
                type="number"
                placeholder="Enter course discount"
                step="0.01" // Allow decimal inputs for discount
                {...register("discount", { valueAsNumber: true })} // Register as number
              />
              {/* {errors.discount && <p className="text-red-500">Valid discount is required.</p>} Add validation feedback */}
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-8 px-2 flex justify-between items-center mt-10">
        <Button variant="outline" type="button">
          {" "}
          {/* Use type="button" if this button navigates or does not submit */}
          Prev Step
        </Button>
        <Button
          type="submit" // This button submits the form
          className="bg-primary-500 hover:bg-primary-600"
          disabled={isLoading} // Optionally disable while data is loading
        >
          {isLoading ? "Loading..." : "Submit For Review"}
        </Button>
      </div>
    </form>
  );
};

export default PublishCourseForm;
