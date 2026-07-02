import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Comp = Tag as any;
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[6px]"
      } ${className}`}
    >
      {children}
    </Comp>
  );
}
