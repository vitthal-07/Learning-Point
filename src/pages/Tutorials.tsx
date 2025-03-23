import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Tutorials() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);
  const [currentTutorialIndex, setCurrentTutorialIndex] = useState(0);

  if (!course) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Course not found</h1>
        <Button onClick={() => navigate("/courses")}>Back to Courses</Button>
      </div>
    );
  }

  const currentTutorial = course.tutorials[currentTutorialIndex];

  const handlePrevious = () => {
    if (currentTutorialIndex > 0) {
      setCurrentTutorialIndex(currentTutorialIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentTutorialIndex < course.tutorials.length - 1) {
      setCurrentTutorialIndex(currentTutorialIndex + 1);
    }
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>
        </div>

        <div className="aspect-video w-full">
          <iframe
            src={currentTutorial.videoUrl}
            title={currentTutorial.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{currentTutorial.title}</h2>
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentTutorialIndex === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous Lesson
          </Button>
          <span className="text-muted-foreground">
            Lesson {currentTutorialIndex + 1} of {course.tutorials.length}
          </span>
          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentTutorialIndex === course.tutorials.length - 1}
          >
            Next Lesson <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}