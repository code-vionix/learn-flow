"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setActiveTab,
  setCourseAdvancedData,
} from "@/store/slice/courseCreateSlice";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Play, Plus, Upload, X } from "lucide-react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useUpdateCourseMutation } from "@/store/api/courseApi";

export default function CourseAdvanceForm() {
  const courseAdvancedData = useSelector(
    (state) => state.course.courseAdvancedData
  );
  const courseBasicData = useSelector((state) => state.course.courseBasicData);
  const [updateCourse] = useUpdateCourseMutation();

  const dispatch = useDispatch();
  const imageInputRef = useRef(null); // create a ref for the file input
  const videoInputRef = useRef(null); // create a ref for the file input

  const handleVideoClick = () => {
    // Trigger the file input's click event
    videoInputRef.current?.click();
  };

  const handleImageClick = () => {
    // Trigger the file input's click event
    imageInputRef.current?.click();
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      whatYouWillLearn: [{ description: "" }],
      targetAudience: [{ description: "" }],
      courseRequirements: [{ description: "" }],
    },
  });

  // Update form values when courseAdvancedData changes
  useEffect(() => {
    if (courseAdvancedData) {
      reset({
        description: courseAdvancedData.description || "",
        whatYouWillLearn:
          courseAdvancedData.learnings?.length > 0
            ? courseAdvancedData.learnings
            : [{ description: "" }],
        targetAudience:
          courseAdvancedData.targetAudiences?.length > 0
            ? courseAdvancedData.targetAudiences
            : [{ description: "" }],
        courseRequirements:
          courseAdvancedData.PreRequirement?.length > 0
            ? courseAdvancedData.PreRequirement
            : [{ description: "" }],
      });
    } else {
      reset({
        description: "",
        whatYouWillLearn: [{ description: "" }],
        targetAudience: [{ description: "" }],
        courseRequirements: [{ description: "" }],
      });
    }
  }, [courseAdvancedData, reset]);

  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [thumbnail, setThumbnail] = useState(
    courseAdvancedData?.thumbnail || null
  );
  const [trailer, setTrailer] = useState(null);

  const {
    fields: whatYouWillLearnFields,
    append: appendWhatYouWillLearn,
    remove: removeWhatYouWillLearn,
  } = useFieldArray({
    control,
    name: "whatYouWillLearn",
  });

  const {
    fields: targetAudienceFields,
    append: appendTargetAudience,
    remove: removeTargetAudience,
  } = useFieldArray({
    control,
    name: "targetAudience",
  });

  const {
    fields: courseRequirementsFields,
    append: appendCourseRequirements,
    remove: removeCourseRequirements,
  } = useFieldArray({
    control,
    name: "courseRequirements",
  });

  // Handlers
  const handleSave = (data) => {
    dispatch(setCourseAdvancedData(data));
  };
  const handleSaveAndPreview = (data) => {
    dispatch(setCourseAdvancedData(data));
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Add text fields
    formData.append("description", data.description);

    // Add nested arrays
    data.whatYouWillLearn.forEach((item, index) => {
      formData.append(
        `whatYouWillLearn[${index}][description]`,
        item.description
      );
    });

    data.targetAudience.forEach((item, index) => {
      formData.append(
        `targetAudience[${index}][description]`,
        item.description
      );
    });

    data.courseRequirements.forEach((item, index) => {
      formData.append(
        `courseRequirements[${index}][description]`,
        item.description
      );
    });

    // Append files (must be File objects from input type="file")
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    if (trailer) {
      formData.append("trailer", trailer);
    }

    /**-------------------------------------------- */

    try {
      if (courseBasicData?.id) {
        // If courseData has an id, update the course
        const result = await updateCourse({
          course: formData,
          id: courseBasicData?.id,
        }).unwrap();
        dispatch(setCourseAdvancedData(result));
        dispatch(setActiveTab("curriculum"));
      }
    } catch (err) {
      console.error("Failed to add course:", err);
    }
  };
  // Image and Video Handlers
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTrailer(file);
      setVideoPreview(file.name);
    }
  };
  const handlePrevious = () => {
    dispatch(setActiveTab("basic"));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Advance Informations</h2>
        <div className="space-x-2">
          <Button
            variant="outline"
            className="bg-primary-50 text-primary-500 border-primary-100 hover:bg-primary-100"
            onClick={handleSubmit(handleSave)}
          >
            Save
          </Button>
          <Button
            variant="outline"
            className="bg-primary-50 text-primary-500 border-primary-100 hover:bg-primary-100"
            onClick={handleSubmit(handleSaveAndPreview)}
          >
            Save & Preview
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Course Thumbnail and Trailer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Thumbnail */}
          <div className="space-y-2">
            <Label>Course Thumbnail</Label>
            <div className="border border-gray-300 rounded-md p-4">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden flex-shrink-0">
                  {imagePreview ? (
                    <Image
                      width={96} // Size of the image, fits the container size
                      height={96} // Size of the image, fits the container size
                      src={imagePreview}
                      alt="Thumbnail Preview"
                      className="object-cover" // Keeps aspect ratio and fills the container
                    />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    Upload your course Thumbnail here.{" "}
                    <span className="font-medium text-gray-700">
                      Important guidelines:
                    </span>
                    1200x800 pixels,
                    <span className="font-medium text-gray-700"></span> or 12:8
                    Ratio. Supported
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    <span className="font-medium text-gray-700">
                      format: .jpg, .jpeg, or .png
                    </span>{" "}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-primary-500 mt-2 border-primary-500 hover:bg-primary-50"
                    onClick={handleImageClick} // Use handleImageClick to trigger the input click
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      ref={imageInputRef} // Attach the ref to the input element
                    />
                    Upload Image <Upload />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Trailer */}
          <div className="space-y-2">
            <Label>Course Trailer</Label>
            <div className="border border-gray-300 rounded-md p-4">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden flex-shrink-0">
                  {videoPreview ? (
                    <p className="text-sm text-gray-500">{videoPreview}</p>
                  ) : (
                    <Play className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-3">
                    Students who watch a well-made promo video are 5X more
                    likely to enroll in your course. We&apos;ve seen that
                    statistic go up to 10X for exceptionally awesome videos.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleVideoClick}
                    size="sm"
                    className="text-primary-500 border-primary-500 mt-2 hover:bg-primary-50"
                  >
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                      className="hidden"
                      ref={videoInputRef}
                    />
                    Upload Video <Upload />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label>Course Description</Label>
          <Textarea
            placeholder="Enter your course description"
            className="min-h-[120px]"
            {...register("description")}
          />
        </div>

        {/* What You Will Learn */}
        <FormListSection
          title="What you will learn in this course"
          fields={whatYouWillLearnFields}
          append={appendWhatYouWillLearn}
          remove={removeWhatYouWillLearn}
          register={register}
          name="whatYouWillLearn"
          maxItems={8}
        />

        {/* Target Audience */}
        <FormListSection
          title="Target Audience"
          fields={targetAudienceFields}
          append={appendTargetAudience}
          remove={removeTargetAudience}
          register={register}
          name="targetAudience"
          maxItems={5}
        />

        {/* Requirements */}
        <FormListSection
          title="Course requirements"
          fields={courseRequirementsFields}
          append={appendCourseRequirements}
          remove={removeCourseRequirements}
          register={register}
          name="courseRequirements"
          maxItems={5}
        />

        <div className="flex justify-between pt-4">
          <Button onClick={handlePrevious} type="button" variant="outline">
            Previous
          </Button>
          <Button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white"
          >
            Save & Next
          </Button>
        </div>
      </form>
    </div>
  );
}

function FormListSection({
  title,
  fields,
  append,
  remove,
  register,
  name,
  maxItems,
}) {
  const MAX_ITEMS = maxItems;
  const canAddMore = fields.length < MAX_ITEMS;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>
          {title}{" "}
          <span className="text-xs">
            ({fields.length}/{MAX_ITEMS})
          </span>
        </Label>
        {canAddMore && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-primary-500 hover:text-primary-600 hover:bg-transparent p-0 h-auto flex items-center gap-1"
            onClick={() => append({ description: "" })}
          >
            <Plus className="h-3 w-3" />
            Add more
          </Button>
        )}
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="flex items-start gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 font-medium flex-shrink-0 mt-1">
            {index + 1}
          </div>
          <div className="flex-1">
            <Input
              placeholder={
                name === "whatYouWillLearn"
                  ? "What will students learn in this course?"
                  : name === "targetAudience"
                  ? "Who is this course for?"
                  : "What do students need to know?"
              }
              {...register(`${name}.${index}.description`)}
              className="border-gray-300"
            />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-gray-600 flex-shrink-0 mt-1"
            onClick={() => remove(index)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
