interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * Renders a JSON-LD <script> block for structured data.
 * Place inside page or layout Server Components — never in Client Components.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
