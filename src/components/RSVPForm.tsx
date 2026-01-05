import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle } from "lucide-react";
import { RSVPData } from "../types";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  partySize: yup
    .number()
    .min(1, "Party size must be at least 1")
    .max(10, "Party size cannot exceed 10")
    .required("Party size is required"),
  day1Attendance: yup.boolean(),
  day2Attendance: yup.boolean(),
  dietary: yup
    .string()
    .oneOf(["none", "vegetarian", "nuts_allergy", "other"])
    .required("Please select dietary preferences"),
  dietaryOther: yup.string().when("dietary", {
    is: "other",
    then: (schema) => schema.required("Please specify dietary restrictions"),
    otherwise: (schema) => schema.notRequired(),
  }),
  notes: yup.string(),
  honeypot: yup.string().max(0, "Bot detected"), // Honeypot field
});

async function submitRSVP(data: RSVPData): Promise<void> {
  // Simulated API call - replace with actual backend integration
  console.log("RSVP submitted:", data);
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
}

export function RSVPForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<RSVPData>({
    resolver: yupResolver(schema),
    defaultValues: {
      partySize: 1,
      day1Attendance: true,
      day2Attendance: true,
      dietary: "none",
    },
  });

  const dietaryChoice = watch("dietary");

  const onSubmit = async (data: RSVPData) => {
    try {
      setIsLoading(true);
      await submitRSVP(data);
      setIsSubmitted(true);
      reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("RSVP submission failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className='text-center p-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl'
      >
        <div className='w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4'>
          <Check className='w-8 h-8 text-white' />
        </div>
        <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>
          Thank You!
        </h3>
        <p className='text-slate-600 dark:text-slate-300'>
          Your RSVP has been received. We can't wait to celebrate with you!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-2xl mx-auto space-y-6'
    >
      {/* Honeypot field - hidden from users */}
      <input
        {...register("honeypot")}
        type='text'
        tabIndex={-1}
        autoComplete='off'
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden='true'
      />

      <div className='grid md:grid-cols-2 gap-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
          >
            Full Name *
          </label>
          <input
            {...register("name")}
            type='text'
            id='name'
            className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500'
            placeholder='Your full name'
          />
          {errors.name && (
            <p className='mt-2 text-sm text-red-600 flex items-center gap-1'>
              <AlertCircle className='w-4 h-4' />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
          >
            Email Address *
          </label>
          <input
            {...register("email")}
            type='email'
            id='email'
            className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500'
            placeholder='your.email@example.com'
          />
          {errors.email && (
            <p className='mt-2 text-sm text-red-600 flex items-center gap-1'>
              <AlertCircle className='w-4 h-4' />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor='partySize'
          className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
        >
          Party Size *
        </label>
        <select
          {...register("partySize", { valueAsNumber: true })}
          id='partySize'
          className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
            <option key={size} value={size}>
              {size} {size === 1 ? "person" : "people"}
            </option>
          ))}
        </select>
        {errors.partySize && (
          <p className='mt-2 text-sm text-red-600 flex items-center gap-1'>
            <AlertCircle className='w-4 h-4' />
            {errors.partySize.message}
          </p>
        )}
      </div>

      <div>
        <legend className='text-sm font-medium text-slate-700 dark:text-slate-300 mb-4'>
          Event Attendance
        </legend>
        <div className='space-y-3'>
          <label className='flex items-center gap-3'>
            <input
              {...register("day1Attendance")}
              type='checkbox'
              className='w-5 h-5 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500'
            />
            <span className='text-slate-700 dark:text-slate-300'>
              Day 1 - Mehendi & Sangeet (October 23)
            </span>
          </label>
          <label className='flex items-center gap-3'>
            <input
              {...register("day2Attendance")}
              type='checkbox'
              className='w-5 h-5 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500'
            />
            <span className='text-slate-700 dark:text-slate-300'>
              Day 2 - Ceremony & Reception (October 24)
            </span>
          </label>
        </div>
      </div>

      <div>
        <label
          htmlFor='dietary'
          className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
        >
          Dietary Preferences *
        </label>
        <select
          {...register("dietary")}
          id='dietary'
          className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
        >
          <option value='none'>No restrictions</option>
          <option value='vegetarian'>Vegetarian only</option>
          <option value='nuts_allergy'>Nut allergy</option>
          <option value='other'>Other (please specify)</option>
        </select>
        {errors.dietary && (
          <p className='mt-2 text-sm text-red-600 flex items-center gap-1'>
            <AlertCircle className='w-4 h-4' />
            {errors.dietary.message}
          </p>
        )}
      </div>

      {dietaryChoice === "other" && (
        <div>
          <label
            htmlFor='dietaryOther'
            className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
          >
            Please specify dietary restrictions *
          </label>
          <input
            {...register("dietaryOther")}
            type='text'
            id='dietaryOther'
            className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500'
            placeholder='Please describe your dietary needs'
          />
          {errors.dietaryOther && (
            <p className='mt-2 text-sm text-red-600 flex items-center gap-1'>
              <AlertCircle className='w-4 h-4' />
              {errors.dietaryOther.message}
            </p>
          )}
        </div>
      )}

      <div>
        <label
          htmlFor='notes'
          className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
        >
          Special Notes (Optional)
        </label>
        <textarea
          {...register("notes")}
          id='notes'
          rows={4}
          className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500'
          placeholder='Any special requests or messages for the couple...'
        />
      </div>

      <button
        type='submit'
        disabled={isLoading}
        className='w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2'
      >
        {isLoading ? (
          <div className='w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin' />
        ) : (
          <>
            <Send className='w-5 h-5' />
            Submit RSVP
          </>
        )}
      </button>
    </motion.form>
  );
}
