"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions";
import { useActionState, useOptimistic } from "react";
import { useEffect } from "react";

type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

const initialState: FormState = {
  success: false,
  message: " ",
};

export function Contact() {

  const [state, formAction, isPending] = useActionState(
    submitContactForm, 
    initialState
  );
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    (currentState, optimisticValue: FormState) => ({
      ...currentState,
      ...optimisticValue,
    })
  );

  const handleSubmit =  (formData: FormData) => {
    addOptimistic({ success: false, message: "Sending message...", errors: {} })
    formAction(formData)
  }

  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    }
  }, [state.success]);

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Get In Touch</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto animate-ping"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
             just want to say hi
             
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 ">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer">
                    <span className="text-lg text-primary hover:rotate-10">✉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">UnisMj6@email.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg text-primary hover:rotate-10">📞</span>
               
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+212 700116243</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">                 
                </div>
              </div>
            </div>

            <Card className="p-4 sm:p-6">
              <form
                id="contact-form"
                // action={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className={
                        optimisticState.errors?.name ? "border-red-500" : ""
                      }
                      required
                    />
                    {optimisticState.errors?.name && (
                      <p className="text-sm text-red-500">
                        {optimisticState.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=" your@email.com"
                      className={
                        optimisticState.errors?.email ? "border-red-500" : ""
                      }
                      required
                    />
                    {optimisticState.errors?.email && (
                      <p className="text-sm text-red-500">
                        {optimisticState.errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder=" Your message..."
                    rows={5}
                    className={
                      optimisticState.errors?.message ? "border-red-500" : ""
                    }
                    required
                  />
                  {optimisticState.errors?.message && (
                    <p className="text-sm text-red-500">
                      {optimisticState.errors.message}
                    </p>
                  )}
                </div>

                {optimisticState.message && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      optimisticState.success
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {optimisticState.message}
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Sending..." : "Send Message"}

                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-border text-center text-muted-foreground">
        <p>&copy; 2025 Younes Majad . website with Next.js .</p>
      </div>
    </section>
  );
}
