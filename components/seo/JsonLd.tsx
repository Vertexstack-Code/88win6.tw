/**
 * Renders a schema.org JSON-LD <script> block. Kept as a single generic
 * component so Organization, Article, FAQPage, and BreadcrumbList schemas
 * (see lib/structured-data.ts callers in each page) all serialize the same
 * safe way rather than each page hand-building a <script> tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"


      
      // JSON.stringify escapes the data itself; the replace guards against a
      // closing </script> sequence inside content fields breaking out of the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
