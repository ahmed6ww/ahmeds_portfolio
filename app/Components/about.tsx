import { Brain, Code2 } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-accent/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl -rotate-6"></div>
            <Image
              src="/ahmed.webp"
              alt="Ahmed's profile"
              width={600}
              height={800}
              className="rounded-2xl object-cover shadow-xl relative z-10"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg  text-gray-500">
              Full-Stack Next.js Developer specializing in end-to-end web
              application development. Procient in leveraging Next.js for
              building performant frontend interfaces and scalable backend
              systems, including API routes, server-side rendering (SSR), and
              server actions. Skilled in database design with PostgreSQL (hosted
              on Neon) and data modeling using Drizzle and Prisma ORMs.
              Experienced in enabling LLM integrations using Pinecone and Milvus
              vector databases. Deploy applications seamlessly via Vercel and
              Azure (using Docker containers), and automate workows with GitHub
              Actions CI/CD. Combines frontend craftsmanship (using shadcn,
              ChakraUI, NextUI, and Framer Motion) with robust backend
              architecture to deliver full-stack solutions optimized for speed,
              security, and scalability
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col items-center p-4 rounded-lg bg-background shadow-sm">
                <Code2 className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Full Stack Next.js</h3>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-background shadow-sm">
                <Brain className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">AI Integrations</h3>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold ">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Langchain",
                  "Crewai",
                  "RAG",
                  "PostgreSQL",
                  "Pinecone",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full  bg-gray-200 text-primary text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
