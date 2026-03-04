const SITE_URL = process.env.SITE_URL || "https://www.kypbioingenieria.com";

export async function getServerSideProps({ res }) {
  const content = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.write(content);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}