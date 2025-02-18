import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitemapService {

  constructor() { }

  generateSitemap(routes: string[]): string {
    const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    const footer = `</urlset>`;
    const body = routes.map(route => `
    <url>
        <loc>https://watagtechnologies.com${route}</loc>
        <lastmod>2025-02-18</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>`).join('\n');
    return header + body + footer;
  
}
}