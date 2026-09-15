import { coursework } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

/** CV section: "Relevant Coursework - Coursera". */
export function CourseworkList() {
  return (
    <ul className="space-y-3">
      {coursework.map((course, i) => (
        <Reveal as="li" key={course.title} delay={0.03 * i}>
          <div className="grid gap-x-4 gap-y-0.5 sm:grid-cols-[6.5rem_1fr]">
            <span className="label !text-[0.625rem] sm:pt-1">Coursera</span>
            <div>
              <p className="text-[0.95rem] text-ink">{course.title}</p>
              <p className="mt-0.5 text-[0.8rem] text-muted">{course.issuer}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
