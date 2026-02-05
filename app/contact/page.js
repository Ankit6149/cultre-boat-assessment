"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import FadeIn from "../_lib/FadeIn";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // FormData structure
  // {
  //   name: string,
  //   email: string,
  //   message: string
  // }

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        reset();
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <section className="px-8 md:px-16 py-32 ">
      <FadeIn>
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Have a project in mind or just want to say hello? Fill out the form
            below, and we’ll get back to you as soon as possible.
          </p>
        </div>
      </FadeIn>

      {/* Form */}
      <FadeIn delay={0.2}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full p-3 rounded border ${
                  errors.name ? "border-red-500" : "border-charcoal-300"
                } bg-offwhite-50 text-charcoal-900`}
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full p-3 rounded border ${
                  errors.email ? "border-red-500" : "border-charcoal-300 "
                } bg-offwhite-50 text-charcoal-900`}
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={6}
                {...register("message", { required: "Message is required" })}
                className={`w-full p-3 rounded border ${
                  errors.message ? "border-red-500" : "border-charcoal-300 "
                } bg-offwhite-50 text-charcoal-900`}
              />
              {errors.message && (
                <p className="text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-full bg-charcoal-900 text-offwhite-100 hover:bg-charcoal-700 hover:text-gold-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-500 mt-4">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 opacity-90">
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <p>Email: hello@cultreboat.com</p>
            <p>Phone: +91 1234 567 890</p>
            <p>Address: 123 Brand St, Creative City</p>
            <p className="mt-4">We usually reply within 24–48 hours.</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
