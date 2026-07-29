import { Newsreader, Inter_Tight } from "next/font/google";

/**
 * Newsreader — display & headings. A Google serif built for on-screen
 * editorial reading: moderate contrast, quarterly-review gravity (not the
 * delicate, high-contrast register of a display Garamond). --font-display
 */
export const fontDisplay = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Inter Tight — body copy, navigation, UI, and the label/eyebrow voice
 * (set as letterspaced caps). --font-body
 */
export const fontBody = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = `${fontDisplay.variable} ${fontBody.variable}`;
