import { defineConfig } from "astro/config";
import { METADATA } from "./src/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: METADATA.SITE_URL,
  integrations: [tailwind(), sitemap()],
});
