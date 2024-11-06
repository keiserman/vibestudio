// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import DecapCMS from "astro-decap-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    DecapCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          {
            name: "projects",
            label: "Projects",
            folder: "src/content/projects",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Title" },
              { name: "description", widget: "string", label: "Description" },
            ],
          },
        ],
      },
    }),
  ],
});
