export async function GET() {
  const baseUrl = "https://time-to-drive.com";
  const pages = [
    { url: "", priority: 1.0 },
    { url: "contact", priority: 0.8 },
    { url: "nosServices", priority: 0.8 },
    { url: "repriseVehicule", priority: 0.8 },
    { url: "depotVente", priority: 0.8 },
    { url: "politique-confidentialite", priority: 0.5 }
  ];

  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `<url>
          <loc>${baseUrl}/${page.url}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page.priority}</priority>
        </url>`;
      })
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
}
