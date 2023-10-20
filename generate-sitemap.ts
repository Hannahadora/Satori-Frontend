const fs = require('fs');
const builder = require('xmlbuilder');

const placeholderUrls = [
  'http://satori.ng/about-us',
  'http://satori.ng/blog',
  'http://satori.ng/contact-us',
  'http://satori.ng/faqs',
  // Add more placeholder URLs for unreleased pages
];

const xml = builder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
xml.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

placeholderUrls.forEach(url => {
  const urlElement = xml.ele('url');
  urlElement.ele('loc', url);
  urlElement.ele('lastmod', new Date().toISOString());
});

const xmlString = xml.end({ pretty: true });

fs.writeFileSync('sitemap.xml', xmlString, 'utf8');

console.log('Sitemap with placeholder URLs generated and saved as sitemap.xml');
