import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({ base: "/random-decision-picker/", build: { sourcemap: false }, plugins: [react()] });
