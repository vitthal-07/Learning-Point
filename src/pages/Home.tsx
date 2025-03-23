import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center gap-8 pt-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Unlock Your Learning <br />
          <span className="text-primary">Potential</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Discover a world of knowledge with our comprehensive courses and expert-led tutorials.
        </p>
        <Button size="lg" asChild>
          <Link to="/courses">
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-4 p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Expert-Led Courses</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals with our carefully curated courses.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Community Learning</h3>
            <p className="text-muted-foreground">
              Join a vibrant community of learners and share knowledge.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-6">
            <div className="rounded-full bg-primary/10 p-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-muted-foreground">
              Get help whenever you need it with our dedicated support team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}