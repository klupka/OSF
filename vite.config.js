import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
    theme: {
        extend: {
            fontFamily: {
                monocode: ["Monocode", "sans-serif"],
                oxanium: ["Oxanium", "sans-serif"],
            },
        },
    },
});
