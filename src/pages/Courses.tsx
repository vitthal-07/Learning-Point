import { courses } from "@/lib/data/courses";
import CourseCard from "@/components/CourseCard";

export default function Courses() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Choose from our selection of expert-led courses and start your learning journey today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}