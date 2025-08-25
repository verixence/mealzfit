import { generateStructuredData } from "@/lib/seo";

export function StructuredData() {
  const { organization, localBusiness } = generateStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />
    </>
  );
}