"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"; // Add this import

import Link from "next/link";
import {
  ArrowRight,
  Linkedin,
  Mail,
  User,
  MessageSquare,
  Loader2,
  Github,
} from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs
      .sendForm("service_l8ef1l5", "template_hsdlgjo", form.current, {
        publicKey: "wJJWhlueFEQUkh_HH",
      })
      .then(() => {
        toast({
          title: "Message Sent Successfully!",
          description: "I'll get back to you as soon as possible",
        });
        form.current?.reset();
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Message Failed to Send",
          description: error.message || "Please try again later",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-accent/5 ">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              Lets Work Together
            </span>
          </h2>
          <p className="text-lg  max-w-2xl mx-auto text-gray-500">
            Have a project in mind? Id love to help bring your ideas to life.
            Lets create something extraordinary together.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl bg-background/50 backdrop-blur-sm border border-gray-300 p-6 space-y-4">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <p className=" text-gray-500">
                Whether you need AI solutions, custom development, or just want
                to discuss a project, Im here to help.
              </p>
              <div className="space-y-4 pt-4 ">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-500">ahmed369ww@gmail.com</span>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/ahmed6ww"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/ahmed9ww"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <form
            className="md:col-span-3 space-y-6"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="grid sm:grid-cols-2 gap-4 ">
              <div className="space-y-2 ">
                <div className="relative ">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground " />
                  <Input
                    placeholder="Your Name"
                    name="name"
                    className="pl-10 border border-gray-300"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="pl-10 border border-gray-300"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Textarea
                  placeholder="Tell me about your project..."
                  name="message"
                  className="min-h-[150px] pl-10 resize-none border border-gray-300"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-black text-gray-100"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  Sending...
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
