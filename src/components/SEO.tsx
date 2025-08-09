import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

const DEFAULT_TITLE = "Muchanga Kiragu — Kikuyu Constituency MP 2027 | Mungu mbele (Ngai mbere) — God First";
const DEFAULT_DESCRIPTION = "Official campaign site for Muchanga Kiragu, running for Kikuyu Constituency MP 2027. Mungu mbele • Ngai mbere • God First.";
const DEFAULT_IMAGE = "/favicon.ico";

const SEO = ({ title, description, image, canonical }: SEOProps) => {
  useEffect(() => {
    const t = title || DEFAULT_TITLE;
    const d = description || DEFAULT_DESCRIPTION;
    const img = image || DEFAULT_IMAGE;
    const canon = canonical || (typeof window !== "undefined" ? window.location.href : undefined);

    document.title = t;

    const setMeta = (selector: string, attr: "content" | "href", value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!el) {
        if (attr === "href") {
          el = document.createElement("link");
          (el as HTMLLinkElement).rel = "canonical";
          document.head.appendChild(el);
        } else {
          el = document.createElement("meta");
          document.head.appendChild(el);
        }
      }
      if (selector.includes('meta[name="description"')) {
        (el as HTMLMetaElement).setAttribute("name", "description");
      }
      if (selector.includes('meta[property="og:title"')) {
        (el as HTMLMetaElement).setAttribute("property", "og:title");
      }
      if (selector.includes('meta[property="og:description"')) {
        (el as HTMLMetaElement).setAttribute("property", "og:description");
      }
      if (selector.includes('meta[property="og:image"')) {
        (el as HTMLMetaElement).setAttribute("property", "og:image");
      }
      if (selector.includes('meta[name="twitter:card"')) {
        (el as HTMLMetaElement).setAttribute("name", "twitter:card");
      }
      if (selector.includes('meta[name="twitter:image"')) {
        (el as HTMLMetaElement).setAttribute("name", "twitter:image");
      }
      (el as any).setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", d);
    setMeta('meta[property="og:title"]', "content", t);
    setMeta('meta[property="og:description"]', "content", d);
    setMeta('meta[property="og:image"]', "content", img);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:image"]', "content", img);
    if (canon) setMeta('link[rel="canonical"]', "href", canon);
  }, [title, description, image, canonical]);

  return null;
};

export default SEO;
