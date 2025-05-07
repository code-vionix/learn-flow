"use client";
import { fetchCategories } from "@/store/slice/courseCreateSlice";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setBasicCourse } from "@/store/slice/courseCreateSlice";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useGetAllCategoryQuery } from "@/store/api/categoryApi";
import { useRouter } from "next/navigation";

export function CourseBasicForm() {
  const courseData = useSelector((state) => state.course.courseBasicData);
  const router = useRouter();
  const [sebCat, setSebCat] = useState([]);
  const dispatch = useDispatch();
  const subtitleLanguages = ["english", "spanish", "french", "german"];
  const category = useGetAllCategoryQuery();
  const courseCategory = category?.data || [];

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: courseData || {},
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  const watchTitle = watch("title");
  const watchSubtitle = watch("subtitle");

  const handleSave = (data) => {
    dispatch(setBasicCourse(data));
  };

  const handlePreview = (data) => {
    dispatch(setBasicCourse(data));
    // add preview logic here
  };

  const handleNext = async (data) => {
    const courseData = {
      teacherId: "67e130a3738e16ff755553d0",
      ...data,
    };

    try {
      const res = await fetch(`http://localhost:3001/api/v1/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      const result = await res.json();
      console.log("Response:", result);

      if (res.ok) {
        console.log("Course created successfully:", result);
        dispatch(setBasicCourse(result.data));
      } else {
        console.error("Error creating course:", result);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleCancel = () => {
    if (confirm("Are you sure you want to cancel?")) {
      dispatch(setBasicCourse({}));
      router.back();
    }
  };

  const handelSubCaregory = (value) => {
    courseCategory.map((category) => {
      if (category.id == value) {
        setSebCat(category.SubCategory);
      }
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Basic Information</h2>
        <div className="space-x-2">
          <Button
            type="button"
            variant="outline"
            className="bg-primary-50 text-primary-500 border-primary-100 hover:bg-primary-100"
            onClick={() => handleSubmit(handleSave)()}
          >
            Save
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-primary-50 text-primary-500 border-primary-100 hover:bg-primary-100"
            onClick={() => handleSubmit(handlePreview)()}
          >
            Save & Preview
          </Button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleNext)} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <div className="relative">
            <Input
              id="title"
              placeholder="Your course title"
              maxLength={80}
              {...register("title", { required: true })}
              className={errors.title ? "border-red-500" : ""}
            />
            <span className="absolute right-3 top-2 text-xs text-gray-400">
              {watchTitle?.length || 0}/80
            </span>
          </div>
          {errors.title && (
            <p className="text-sm text-red-500">Title is required.</p>
          )}
        </div>

        {/* Subtitle */}
        <div className="space-y-2">
          <Label htmlFor="subtitle">Subtitle</Label>
          <div className="relative">
            <Input
              id="subtitle"
              placeholder="Your course subtitle"
              maxLength={120}
              {...register("subtitle", { required: true })}
              className={errors.subtitle ? "border-red-500" : ""}
            />
            <span className="absolute right-3 top-2 text-xs text-gray-400">
              {watchSubtitle?.length || 0}/120
            </span>
            {errors.subtitle && (
              <p className="text-sm text-red-500">Subtitle is required.</p>
            )}
          </div>
        </div>

        {/* Category & Sub-category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Course Category</Label>
            <Controller
              name="categoryId"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    handelSubCaregory(value);
                  }}
                >
                  <SelectTrigger
                    className={errors.category ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {courseCategory?.map((category) => (
                      <SelectItem
                        onClick={() => console.log("hello")}
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.categoryId && (
              <p className="text-sm text-red-500">Category is required.</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Course Sub-category</Label>
            <Controller
              name="subCategoryId"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      sebCat?.map((subCat) => (
                        <SelectItem key={subCat.id} value={subCat.id}>
                          {subCat.name}
                        </SelectItem>
                      )) /* Render subcategories here */
                    }
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Topic */}
        <div className="space-y-2">
          <Label>Course Topic</Label>
          <Input
            placeholder="What is primarily taught in your course?"
            {...register("topic", { required: true })}
            className={errors.topic ? "border-red-500" : ""}
          />
          {errors.topic && (
            <p className="text-sm text-red-500">Topic is required.</p>
          )}
        </div>

        {/* Tools */}
        <div className="space-y-2">
          <Label> Course Tools </Label>
          {fields.map((item, index) => (
            <div key={item.id} className="flex items-center gap-2">
              <Input
                placeholder="Tool name"
                {...register(`tools.${index}`)}
                className="flex-1"
              />
              <Button
                type="button"
                variant="destructive"
                className="bg-primary-500 hover:bg-primary-600 text-white border-primary-100"
                size="icon"
                onClick={() => remove(index)}
              >
                ✕
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="ghost"
            onClick={() => append("")}
            className="mt-2 text-primary-500 border-primary-100 hover:bg-primary-100 hover:text-primary-600"
          >
            + Add Tools
          </Button>
        </div>

        {/* Language / Subtitles / Level / Duration */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Course Language</Label>
            <Controller
              name="language"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={errors.language ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.language && (
              <p className="text-sm text-red-500">Language is required.</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Subtitle Languages (Optional)</Label>
            <Controller
              name="subtitleLanguages"
              control={control}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {field.value && field.value.length > 0
                        ? `${field.value.length} selected`
                        : "Select Languages"}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-60 p-2 space-y-2">
                    {subtitleLanguages.map((lang) => (
                      <div key={lang} className="flex items-center space-x-2">
                        <Checkbox
                          id={lang}
                          className="data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500"
                          checked={field.value?.includes(lang)}
                          onCheckedChange={(checked) => {
                            const value = lang;
                            if (checked) {
                              field.onChange([...(field.value || []), value]);
                            } else {
                              field.onChange(
                                field.value.filter((item) => item !== value)
                              );
                            }
                          }}
                        />
                        <Label htmlFor={lang}>
                          {lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </Label>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>

          <div className="space-y-2">
            <Label>Course Level</Label>
            <Controller
              name="level"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={errors.level ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BIGINNER">Beginner</SelectItem>
                    <SelectItem value="INTERMEDIATE">Intermediate</SelectItem>
                    <SelectItem value="ADVANVED">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.level && (
              <p className="text-sm text-red-500">Level is required.</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Course Duration</Label>
            <div className="flex gap-2">
              <Controller
                name="duration"
                control={control}
                rules={{ required: true, min: 1 }}
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder="0"
                    min={1}
                    className={`flex-1 ${
                      errors.duration ? "border-red-500" : ""
                    }`}
                    {...field}
                  />
                )}
              />

              <Controller
                name="durationUnit"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      className={`w-28 ${
                        errors.durationUnit ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hour">Hour</SelectItem>
                      <SelectItem value="Day">Day</SelectItem>
                      <SelectItem value="Week">Week</SelectItem>
                      <SelectItem value="Month">Month</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {(errors.duration || errors.durationUnit) && (
              <p className="text-sm text-red-500">
                Both duration and unit are required.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
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
