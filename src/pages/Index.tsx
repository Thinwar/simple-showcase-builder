import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <>
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Decorative accent circle */}
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-15%] left-[-5%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Welcome
        </p>
        <h1 className="font-display text-5xl leading-tight tracking-tight text-foreground sm:text-7xl">
          Warren Ndegwa Thinwa
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
          Designer, developer &amp; creative thinker crafting digital experiences that matter.
        </p>
        <div className="mt-10">
          <Button size="lg" className="gap-2 rounded-full px-8 text-base" asChild>
            <a href="#projects">
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
    <ProjectsSection />
    </>
  );
};

export default Index;
