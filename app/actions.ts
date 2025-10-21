"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData : FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  }

  try {
    const validatedData = contactSchema.parse(rawData)
    // Simulate sending email (in real app, integrate with email service)
    console.log("Contact form submitted:", validatedData)
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return { success: true, message: "Thank you for your message ! I'll get back to you soon." }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form data",
        errors: error.errors.reduce(
          (acc, err) => {
            acc[err.path[0]] = err.message
            return acc
          },
          {} as Record<string, string>,
        ),
      }
    }

    return { success: false, message: "Something wrong. Please try again." }
  }
}
