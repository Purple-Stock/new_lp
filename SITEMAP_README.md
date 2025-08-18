# Sitemap Configuration

This project includes a comprehensive sitemap setup for better SEO and search engine discovery.

## Files Created

### 1. `app/sitemap.ts`
Main sitemap file that generates a single sitemap for the entire application. This is the primary sitemap that will be available at `/sitemap.xml`.

### 2. `app/robots.ts`
Robots.txt file that helps search engines discover your sitemap and provides crawling instructions.

## Configuration

### Environment Variables

Create a `.env.local` file in your project root and add:

```bash
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

If no environment variable is set, it defaults to `https://purplestock.com`.

### Base URL

Update the base URL in your environment file to match your actual domain. This URL is used in:
- Sitemap URLs
- Robots.txt sitemap reference
- All internal links in the sitemap

## Sitemap Structure

The sitemap includes **32 URLs** total:

### Static Routes
- Homepage (`/`) - Priority: 1.0, Change Frequency: Daily
- Articles page (`/artigos`) - Priority: 0.8, Change Frequency: Weekly
- Industries page (`/industrias`) - Priority: 0.8, Change Frequency: Weekly
- Pricing page (`/precos`) - Priority: 0.7, Change Frequency: Monthly
- Glossary page (`/glossario`) - Priority: 0.6, Change Frequency: Monthly
- Free barcode page (`/codigo-de-barras-gratis`) - Priority: 0.7, Change Frequency: Monthly
- Coming soon page (`/coming-soon`) - Priority: 0.5, Change Frequency: Monthly

### Feature Routes (10 URLs)
All feature pages under `/features/` with Priority: 0.7, Change Frequency: Monthly:
- analytics-reporting
- barcoding
- clothing-manufacturing
- equipment-management
- factory-management
- inventory-app
- inventory-control
- purchase-sales
- qr-code-management
- warehouse-control

### Resource Routes (4 URLs)
All resource pages under `/recursos/` with Priority: 0.7, Change Frequency: Monthly:
- codigo-de-barras
- controle-de-almoxarifado
- gerenciamento-equipamentos-qr-code
- gestao-de-estoque

### Industry Routes (9 URLs)
All industry-specific pages under `/industrias/[slug]` with Priority: 0.7, Change Frequency: Monthly:
- retail
- manufacturing
- logistics
- food
- pharmaceutical
- automotive
- construction
- technology
- audiovisual

### Article Routes (2 URLs)
All blog articles under `/artigos/[slug]` with Priority: 0.6, Change Frequency: Monthly:
- como-usar-qr-code-controle-estoque
- organizar-almoxarifado-qr-code

## URLs Generated

Your sitemap will be available at:
- `/sitemap.xml` - Main sitemap (currently 32 URLs)

## Testing

After setting up:

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000/sitemap.xml` to see your sitemap
3. Visit `http://localhost:3000/robots.txt` to see your robots file

## Search Engine Submission

Once deployed, submit your sitemap to search engines:

- **Google Search Console**: Submit `https://yourdomain.com/sitemap.xml`
- **Bing Webmaster Tools**: Submit `https://yourdomain.com/sitemap.xml`

## Maintenance

### Adding New Routes

When you add new pages, update the appropriate arrays in `app/sitemap.ts`:

```typescript
// For new features
const featureRoutes = [
  // ... existing features
  'new-feature',
].map(feature => ({
  url: `${baseUrl}/features/${feature}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}))
```

### Adding New Articles

Articles are automatically included from the `content/artigos/` directory. Just add new `.md` files there and they'll appear in the sitemap.

### Updating Priorities

Adjust the priority values based on your SEO strategy:
- 1.0: Most important pages (homepage)
- 0.8-0.9: Important category pages
- 0.6-0.7: Regular content pages
- 0.5: Less important pages

## Future Expansion

When your application grows beyond 50,000 URLs (Google's limit per sitemap), you can implement the `generateSitemaps` function:

```typescript
// app/sitemap/[id]/sitemap.ts
export async function generateSitemaps() {
  // Calculate number of sitemaps needed
  const totalUrls = await getTotalUrlCount()
  const sitemapsNeeded = Math.ceil(totalUrls / 50000)
  
  return Array.from({ length: sitemapsNeeded }, (_, i) => ({ id: i }))
}
```

## Performance Considerations

- The sitemap is generated at build time for static sites
- For dynamic sites, it's generated on-demand
- Currently optimized for 32 URLs (well under the 50,000 limit)
- The sitemap automatically includes `lastModified` dates for better crawling

## Troubleshooting

### Sitemap Not Generating
- Check that your environment variables are set correctly
- Ensure all import paths are correct
- Verify that the `getAllArticles` function works properly

### URLs Not Appearing
- Check that the route arrays include all your pages
- Verify that dynamic routes are properly configured
- Ensure markdown files have the correct frontmatter

### Robots.txt Issues
- Verify the sitemap URL in robots.txt matches your actual sitemap URL
- Check that the base URL is correct

## Current Status

✅ **Working**: Main sitemap at `/sitemap.xml` with 32 URLs
✅ **Working**: Robots.txt at `/robots.txt`
✅ **Working**: All static and dynamic routes included
✅ **Working**: Proper priorities and change frequencies set
✅ **Working**: Automatic article inclusion from markdown files
