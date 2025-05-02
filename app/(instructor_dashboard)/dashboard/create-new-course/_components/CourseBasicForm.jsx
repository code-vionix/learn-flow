"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
import { useDispatch } from "react-redux";
import { setCourse } from "@/store/slice/courseCreateSlice";
import { useSelector } from "react-redux";
export function CourseBasicForm() {
  const courseData = useSelector((state) => state.course.courseBasicData);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: courseData || {}, // ← use redux state here
  });

  const [submitType, setSubmitType] = useState("next");
  const dispatch = useDispatch();

  const watchTitle = watch("title");
  const watchSubtitle = watch("subtitle");

  const onSubmit = (data) => {
    if (submitType === "save") {
      console.log("Save:", data);
      dispatch(setCourse(data)); // Save to redux state
      // add save logic here (API call / local save)
    } else if (submitType === "preview") {
      console.log("Save & Preview:", data);
      dispatch(setCourse(data)); // Save to redux state
      // add save and preview logic here
    } else {
      console.log("Save & Next (Submit):", data);
      dispatch(setCourse(data)); // Save to redux state
      // add final submit logic here (move to next step)
    }
  };

  const handleCancel = () => {
    console.log("Cancelled");
    // reset form or navigate away
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
            onClick={() => {
              setSubmitType("save");
              handleSubmit(onSubmit)();
            }}
          >
            Save
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-primary-50 text-primary-500 border-primary-100 hover:bg-primary-100"
            onClick={() => {
              setSubmitType("preview");
              handleSubmit(onSubmit)();
            }}
          >
            Save & Preview
          </Button>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitType("next");
          handleSubmit(onSubmit)();
        }}
        className="space-y-6"
      >
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
              {...register("subtitle")}
            />
            <span className="absolute right-3 top-2 text-xs text-gray-400">
              {watchSubtitle?.length || 0}/120
            </span>
          </div>
        </div>

        {/* Category & Sub-category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Course Category</Label>
            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={errors.category ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && (
              <p className="text-sm text-red-500">Category is required.</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Course Sub-category</Label>
            <Controller
              name="subCategory"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="game">Game Development</SelectItem>
                    <SelectItem value="database">Database Design</SelectItem>
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

        {/* Language / Subtitles / Level / Duration */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Language */}
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

          {/* Subtitle Language */}
          <div className="space-y-2">
            <Label>Subtitle Language (Optional)</Label>
            <Controller
              name="subtitleLanguage"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
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
          </div>

          {/* Course Level */}
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
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="all">All Levels</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.level && (
              <p className="text-sm text-red-500">Level is required.</p>
            )}
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label>Duration</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Duration"
                type="number"
                className="flex-1"
                {...register("duration")}
              />
              <Controller
                name="durationUnit"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
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
          </div>
        </div>

        {/* Footer Buttons */}
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
