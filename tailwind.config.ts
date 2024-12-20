import type { Config } from "tailwindcss"

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary400: " #F2A945",
                primary500: " #F78410",
                primary600: "#E07516",
            },
        },
    },
    plugins: [],
} satisfies Config
