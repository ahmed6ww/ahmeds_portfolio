import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className=" max-w-2xl mx-auto text-gray-500">
            Exploring the intersection of AI and practical applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* AI Assistant Project */}
          <div className="group relative">
            <div className="absolute -inset-px   rounded-xl opacity-20 blur-sm transition-all duration-500 group-hover:opacity-40"></div>
            <div className="relative h-full bg-card border border-gray-200  rounded-xl p-6 ring-1 ring-gray-900/5">
              <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 relative">
                <Image
                  src=""
                  alt="AI Assistant Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Intelligent AI Assistant
                </h3>
                <p className=" text-sm text-gray-500">
                  A sophisticated AI assistant powered by LangChain and CrewAI,
                  capable of complex task automation and natural conversations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">
                    LangChain
                  </span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs">
                    CrewAI
                  </span>
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-500 rounded-full text-xs">
                    FastAPI
                  </span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Vector Search Engine */}
          <div className="group relative">
            <div className="absolute -inset-px rounded-xl opacity-20 blur-sm transition-all duration-500 group-hover:opacity-40"></div>
            <div className="relative h-full bg-card rounded-xl border border-gray-200  p-6 ring-1 ring-gray-900/5">
              <div className="aspect-video mb-6  overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-600/10 relative">
                <Image
                  src=""
                  alt="Vector Search Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Semantic Search Engine
                </h3>
                <p className=" text-sm text-gray-500">
                  Advanced vector search engine using Pinecone and ChromaDB for
                  intelligent document retrieval and analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs">
                    Pinecone
                  </span>
                  <span className="px-2 py-1 bg-teal-500/10 text-teal-500 rounded-full text-xs">
                    ChromaDB
                  </span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">
                    LangGraph
                  </span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* AI Analytics Dashboard */}
          <div className="group relative">
            <div className="absolute -inset-px  rounded-xl opacity-20 blur-sm transition-all duration-500 group-hover:opacity-40"></div>
            <div className="relative h-full bg-card rounded-xl border border-gray-200  p-6 ring-1 ring-gray-900/5">
              <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-orange-500/10 to-red-600/10 relative">
                <Image
                  src=""
                  alt="Analytics Dashboard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">AI Analytics Platform</h3>
                <p className=" text-sm text-gray-500" >
                  Real-time analytics dashboard for AI model performance
                  monitoring and data visualization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded-full text-xs">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-rose-500/10 text-rose-500 rounded-full text-xs">
                    LangSmith
                  </span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
