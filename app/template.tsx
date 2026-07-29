import { PageTransition } from "@/components/PageTransition";

/**
 * `template.tsx` remounts on every navigation, driving the warm-brown route
 * wipe and the incoming content reveal.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
