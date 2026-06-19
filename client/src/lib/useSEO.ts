import { useEffect } from "react";
import { SITE } from "@/data/site";

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({ title, description, path = "/", ogImage, ogType = "website" }: SEOOptions) {
  useEffect(() => {
    const fullUrl = `${SITE.baseUrl}${path}`;
    const image = ogImage ? `${SITE.baseUrl}${ogImage}` : `${SITE.baseUrl}${SITE.defaultOgImage}`;

    document.title = title;
    setMeta("name", "title", title);
    setMeta("name", "description", description);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:type", ogType);

    setMeta("property", "twitter:title", title);
    setMeta("property", "twitter:description", description);
    setMeta("property", "twitter:image", image);
    setMeta("property", "twitter:url", fullUrl);

    setCanonical(fullUrl);
  }, [title, description, path, ogImage, ogType]);
}
