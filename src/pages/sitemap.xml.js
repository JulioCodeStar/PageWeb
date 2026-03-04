const SITE_URL = process.env.SITE_URL || "https://www.kypbioingenieria.com";
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || "";

// Tus colecciones reales (según tu axios):
const COLLECTIONS = [
  { api: "/api/blogs" },
  { api: "/api/services" },
  { api: "/api/jobs" },
];

async function fetchStrapi(url) {
  const res = await fetch(url, {
    headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Strapi ${res.status} en ${url} :: ${txt.slice(0, 120)}`);
  }

  return res.json();
}

async function fetchAllFromCollection(apiPath) {
  const pageSize = 100;
  let page = 1;
  let pageCount = 1;
  const entries = [];

  while (page <= pageCount) {
    const url =
      `${STRAPI_URL}${apiPath}` +
      `?fields[0]=slug&fields[1]=updatedAt` +
      `&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    const json = await fetchStrapi(url);

    const data = json?.data || [];
    for (const item of data) {
      const slug = item?.attributes?.slug; // OJO: en tu caso es "/blog/xxx" o "/servicios/xxx"
      const updatedAt = item?.attributes?.updatedAt;

      if (!slug) continue;

      const path = slug.startsWith("/") ? slug : `/${slug}`; // seguridad
      entries.push({
        loc: `${SITE_URL}${path}`,
        lastmod: updatedAt ? new Date(updatedAt).toISOString() : null,
      });
    }

    pageCount = json?.meta?.pagination?.pageCount || 1;
    page++;
  }

  return entries;
}

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toXml(entries, comment = "") {
  const body = entries
    .map((e) => {
      const last = e.lastmod ? `<lastmod>${esc(e.lastmod)}</lastmod>` : "";
      return `<url><loc>${esc(e.loc)}</loc>${last}</url>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    (comment ? `<!-- ${esc(comment)} -->` : "") +
    body +
    `</urlset>`
  );
}

export async function getServerSideProps({ res }) {
  const now = new Date().toISOString();

  // Tus URLs fijas (agrega más si quieres)
  const staticEntries = [
    { loc: `${SITE_URL}/`, lastmod: now },
    { loc: `${SITE_URL}/servicios/protesis-de-pierna`, lastmod: now },
    { loc: `${SITE_URL}/servicios/protesis-bionicas`, lastmod: now },
    { loc: `${SITE_URL}/servicios/protesis-esteticas`, lastmod: now },
    {
      loc: `${SITE_URL}/servicios/protesis-de-pierna/protesis-transfemoral`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-de-pierna/protesis-transtibial`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-de-pierna/desarticulado-cadera`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-de-pierna/protesis-chopart`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-de-pierna/protesis-syme`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-de-pierna/desarticulado-de-rodilla`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-bionicas/protesis-bionica-de-mano-parcial`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-esteticas/mano-completa-estetica`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-esteticas/falange-total`,
      lastmod: now,
    },
    {
      loc: `${SITE_URL}/servicios/protesis-esteticas/protesis-de-oido`,
      lastmod: now,
    },
    { loc: `${SITE_URL}/nosotros`, lastmod: now },
    { loc: `${SITE_URL}/contacto`, lastmod: now },
    { loc: `${SITE_URL}/blog`, lastmod: now },
  ];

  try {
    if (!STRAPI_URL)
      throw new Error("Falta STRAPI_URL en variables de entorno");

    const dynamicLists = await Promise.all(
      COLLECTIONS.map((c) => fetchAllFromCollection(c.api)),
    );

    // Unificar y quitar duplicados
    const all = [...staticEntries, ...dynamicLists.flat()];
    const uniq = [];
    const seen = new Set();

    for (const e of all) {
      if (seen.has(e.loc)) continue;
      seen.add(e.loc);
      uniq.push(e);
    }

    const xml = toXml(uniq);
    res.setHeader("Content-Type", "text/xml");
    res.write(xml);
    res.end();
  } catch (err) {
    // Si falla, al menos devuelve estáticas y te deja pista del error
    const xml = toXml(staticEntries, `Sitemap sin Strapi: ${err.message}`);
    res.setHeader("Content-Type", "text/xml");
    res.write(xml);
    res.end();
  }

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
