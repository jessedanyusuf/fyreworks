import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "header";
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  as = "div",
  ...rest
}: ScrollRevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  if (reduce) {
    return <Component {...rest}>{children}</Component>;
  }

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
