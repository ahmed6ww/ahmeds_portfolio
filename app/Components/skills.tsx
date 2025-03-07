import {
  Code,
  Brain,
  Database,
  Sparkles,
  Code2,
  Network,
  GitGraph,
  Settings,
  Boxes,
} from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-accent/5">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Technical Expertise
            <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Next.js */}
          <div className="group relative ">

            <div className="relative  border-gray-300  h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-black/10">
                  <Code2 className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold">Next.js</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Building high-performance React applications with server-side
                rendering and static generation
              </p>
            </div>
          </div>

          {/* React.js */}
          <div className="group relative">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4 ">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Code className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold">React.js</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Creating interactive user interfaces with component-based
                architecture
              </p>
            </div>
          </div>

          {/* TailwindCSS */}
          <div className="group relative">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Sparkles className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold">TailwindCSS</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Crafting modern and responsive designs with utility-first CSS
                framework
              </p>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="group relative ">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-600/10">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">PostgreSQL</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Managing robust and scalable relational databases for enterprise
                applications
              </p>
            </div>
          </div>

          {/* LangChain */}
          <div className="group relative">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Brain className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold">LangChain</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Building complex AI applications with composable components and
                LLM integrations
              </p>
            </div>
          </div>

          {/* LangGraph */}
          <div className="group relative">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <GitGraph className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold">LangGraph</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Orchestrating sophisticated AI agents and workflows with
                graph-based architectures
              </p>
            </div>
          </div>

          {/* LangSmith */}
          <div className="group relative">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <Settings className="h-6 w-6 text-violet-500" />
                </div>
                <h3 className="text-xl font-semibold">LangSmith</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Monitoring and optimizing LLM applications for production
                environments
              </p>
            </div>
          </div>

          {/* CrewAI */}
          <div className="group relative">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Boxes className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold">CrewAI</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Developing collaborative AI agent systems for complex task
                automation
              </p>
            </div>
          </div>

          {/* Pinecone */}
          <div className="group relative">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Database className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold">Pinecone</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Implementing vector similarity search for efficient AI data
                retrieval
              </p>
            </div>
          </div>

          {/* Neo4j */}
          <div className="group relative">
            <div className="relative border-gray-300 h-full bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Network className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold">Neo4j</h3>
              </div>
              <p className="text-muted-foreground text-gray-500">
                Building graph databases for complex relationship modeling in AI
                systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
