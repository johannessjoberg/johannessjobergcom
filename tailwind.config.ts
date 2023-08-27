import type { Config } from "tailwindcss"
import { radixThemePreset } from "radix-themes-tw"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...radixThemePreset.theme,
    lineHeight: {
      "11": "3.2rem",
    },
  },
  plugins: [],
}
export default config
