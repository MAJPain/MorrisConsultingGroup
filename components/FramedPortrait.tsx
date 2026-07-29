import { cn } from "@/lib/utils";
import { Portrait } from "@/components/Portrait";

type FramedPortraitProps = React.ComponentProps<typeof Portrait> & {
  /** Direction the thin brown frame is offset toward. */
  frameSide?: "left" | "right";
  wrapperClassName?: string;
};

/**
 * A portrait with a thin warm-brown frame offset by 8px — the founder /
 * team-page treatment. The frame is decorative and offset behind the image.
 */
export function FramedPortrait({
  frameSide = "right",
  wrapperClassName,
  ...portrait
}: FramedPortraitProps) {
  return (
    <div className={cn("relative", wrapperClassName)}>
      {/* Offset brown frame */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 border border-warm-brown",
          frameSide === "right"
            ? "translate-x-2 translate-y-2"
            : "-translate-x-2 translate-y-2"
        )}
      />
      <div className="relative">
        <Portrait {...portrait} />
      </div>
    </div>
  );
}
