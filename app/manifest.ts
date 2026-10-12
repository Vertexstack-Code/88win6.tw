import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.title,
    short_name: SITE.name,
    description: SITE.description,
    lang: SITE.locale,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8fc",
    theme_color: "#0d1a38",
    icons: [
      { src: "/images/brand/logo-270.png", sizes: "270x270", type: "image/png" },
      { src: "/images/brand/logo-full.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
