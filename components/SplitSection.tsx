import { cn } from "@/lib/utils";

type SplitSectionProps = {
  image: React.ReactNode;
  children: React.ReactNode;
  /** Which side the image sits on at desktop widths. */
  imageSide?: "left" | "right";
  className?: string;
  /** Vertical alignment of the two columns. */
  align?: "start" | "center";
};

/**
 * Reusable two-column editorial layout: a media column and a prose column,
 * arranged asymmetrically on a 12-column grid. The image side is
 * configurable so consecutive sections can flip.
 */
export function SplitSection({
  image,
  children,
  imageSide = "left",
  className,
  align = "center",
}: SplitSectionProps) {
  const imageLeft = imageSide === "left";

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-8 lg:gap-x-16",
        align === "center" ? "md:items-center" : "md:items-start",
        className
      )}
    >
      <div
        className={cn(
          "md:col-span-6",
          imageLeft ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-7"
        )}
      >
        {image}
      </div>

      <div
        className={cn(
          "md:col-span-5",
          imageLeft
            ? "md:order-2 md:col-start-8"
            : "md:order-1 md:col-start-1 md:row-start-1"
        )}
      >
        {children}
      </div>
    </div>
  );
}
