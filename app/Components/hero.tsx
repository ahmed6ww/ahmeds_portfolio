import React from "react";
import {
  ArrowRight,
 
  Github,
  Linkedin,


} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex min-h-screen  items-center justify-center p-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, Im{" "}
              <span className="bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
                Ahmed
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg  text-gray-500 sm:text-xl">
              AI Engineer crafting intelligent solutions through code.
              Specializing in machine learning, deep learning, and AI systems
              development.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row ">
            <Link
                href="./resume.pdf"
                download
              className="inline-flex bg-black text-gray-100 items-center justify-center rounded-lg  px-6 py-3 text-sm font-medium  transition-colors hover:bg-primary/90"
            >
              See Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            {/* <Link
              href="./resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg border border-gray-300  bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              See Resume
            </Link> */}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/ahmed6ww"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 transition-colors hover:bg-accent"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/ahmed9ww"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 transition-colors hover:bg-accent"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
