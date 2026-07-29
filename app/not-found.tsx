import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-bone-white">
      <div className="container">
        <p className="eyebrow mb-8">— 404 / NOT FOUND</p>
        <h1 className="max-w-[16ch] text-editorial font-medium tracking-tight text-deep-blue">
          This page could not be found.
        </h1>
        <p className="mt-8 max-w-prose font-body text-lg leading-relaxed text-ink/70">
          The page you were looking for may have been moved, or perhaps it never
          existed. Let us return you to firmer ground.
        </p>
        <div className="mt-10">
          <ArrowLink href="/">Return home</ArrowLink>
        </div>
      </div>
    </section>
  );
}
