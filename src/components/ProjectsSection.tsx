import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Brand Identity System",
    description: "A complete visual identity for a modern fintech startup, including logo, typography, and color systems.",
    tags: ["Branding", "Design"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack web application with product management, payments, and real-time inventory tracking.",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracker with personalized workout plans and progress analytics.",
    tags: ["Mobile", "UI/UX"],
  },
  {
    title: "Data Dashboard",
    description: "Interactive analytics dashboard visualizing complex datasets with real-time filtering and export.",
    tags: ["Data Viz", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    description: "Minimalist personal portfolio with smooth animations, dark mode, and CMS integration.",
    tags: ["Web", "Design"],
  },
  {
    title: "AI Content Tool",
    description: "Smart writing assistant that helps teams generate, edit, and optimize content at scale.",
    tags: ["AI", "SaaS"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-xl text-card-foreground">{project.title}</h3>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
    </div>
    <div className="mt-5 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="bg-background px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Portfolio
      </p>
      <h2 className="font-display text-3xl text-foreground sm:text-4xl">
        Selected Projects
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
