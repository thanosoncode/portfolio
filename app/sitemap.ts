import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.thanosjs.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.thanosjs.com/experience",
      lastModified: new Date(),
    },
    {
      url: "https://www.thanosjs.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://www.thanosjs.com/contact",
      lastModified: new Date(),
    },
  ];
}
