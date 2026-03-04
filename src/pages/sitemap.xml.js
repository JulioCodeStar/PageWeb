const SITE_URL = process.env.SITE_URL || "https://www.kypbioingenieria.com";
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || "";

async function fetchStrapi(url) {
  const res = await fetch(url, {
    headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
  });
  if (!res.ok) throw new Error(`Strapi error ${res.status} en ${url}`);
  return res.json();
}

async function fetchAllFromCollection(apiPath, mapToPathFn) {
  // Strapi v4 REST pagination
  const pageSize = 100;
  let page = 1;
  let pageCount = 1;

  const urls = [];

  while (page <= pageCount) {
    const url =
      `${STRAPI_URL}${apiPath}` +
      `?fields[0]=slug&fields[1]=updatedAt` +
      `&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    const json = await fetchStrapi(url);

    const data = json?.data || [];
    for (const item of data) {
      const slug = item?.attributes?.slug;
      const updatedAt = item?.attributes?.updatedAt;
      if (!slug) continue;

      urls.push({
        loc: `${SITE_URL}${mapToPathFn(slug)}`,
        lastmod: updatedAt ? new Date(updatedAt).toISOString() : null,
      });
    }

    pageCount = json?.meta?.pagination?.pageCount || 1;
    page++;
  }

  return urls;
}

function escapeXml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildSitemapXml(entries) {
  const body = entries
    .map((e) => {
      const loc = escapeXml(e.loc);
      const lastmod = e.lastmod ? `<lastmod>${escapeXml(e.lastmod)}</lastmod>` : "";
      return `<url><loc>${loc}</loc>${lastmod}</url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    body +
    `</urlset>`;
}

export async function getServerSideProps({ res }) {
  try {
    if (!STRAPI_URL) throw new Error("Falta STRAPI_URL en .env.local");

    // 1) URLs fijas (agrega las que quieras)
    const now = new Date().toISOString();
    const staticEntries = [
      { loc: `${SITE_URL}/`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-de-pierna`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-bionicas`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-esteticas`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-de-pierna/protesis-transfemoral`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-de-pierna/protesis-transtibial`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-de-pierna/desarticulado-cadera`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-de-pierna/protesis-chopart`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-de-pierna/protesis-syme`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-de-pierna/desarticulado-de-rodilla`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-bionicas/protesis-bionica-de-mano-parcial`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-esteticas/mano-completa-estetica`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-esteticas/falange-total`, lastmod: now },
      { loc: `${SITE_URL}/servicios/protesis-esteticas/protesis-de-oido`, lastmod: now },
      { loc: `${SITE_URL}/nosotros`, lastmod: now },
      { loc: `${SITE_URL}/contacto`, lastmod: now },
      { loc: `${SITE_URL}/blog`, lastmod: now },
    ];

    // 2) URLs dinámicas desde Strapi
    // AJUSTA los endpoints según tus colecciones reales en Strapi:
    // ejemplos comunes: /api/blogs, /api/servicios, /api/services
    const [blogEntries, serviceEntries] = await Promise.all([
      fetchAllFromCollection("/api/blogs", (slug) => `/blog/${slug}`),
      fetchAllFromCollection("/api/services", (slug) => `/servicios/${slug}`),
    ]);

    const allEntries = [...staticEntries, ...blogEntries, ...serviceEntries];

    const xml = buildSitemapXml(allEntries);

    res.setHeader("Content-Type", "text/xml");
    res.write(xml);
    res.end();
  } catch (err) {
    // Fallback mínimo si algo falla (para no romper producción)
    const xml = buildSitemapXml([{ loc: `${SITE_URL}/`, lastmod: new Date().toISOString() }]);
    res.setHeader("Content-Type", "text/xml");
    res.write(xml);
    res.end();
  }

  return { props: {} };
}

export default function Sitemap() {
  return null;
}