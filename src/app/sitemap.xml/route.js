import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  try {
    const allUrls = [];
    
    // Scan static pages
    const appDirectory = path.join(process.cwd(), 'src', 'app');
    
    function scanDirectory(dir, route = '') {
      try {
        if (!fs.existsSync(dir)) return;
        
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            // Skip these directories including admin
            if (['api', 'components', 'lib', 'utils', '_', 'admin'].some(skip => file.startsWith(skip))) {
              return;
            }
            if (file.startsWith('[')) {
              return;
            }
            scanDirectory(filePath, route + '/' + file);
          } else if (file === 'page.js' || file === 'page.jsx' || file === 'page.tsx') {
            let pageRoute = route || '/';
            
            // Skip admin routes from sitemap.xml
            if (pageRoute.includes('/admin')) {
              return;
            }
            
            allUrls.push({
              url: `${baseUrl}${pageRoute}`,
              lastModified: new Date().toISOString(),
              changeFrequency: pageRoute === '/' ? 'daily' : 'weekly',
              priority: pageRoute === '/' ? 1.0 : 0.8
            });
          }
        });
      } catch (error) {
        console.error('Error scanning directory:', dir, error);
      }
    }
    
    scanDirectory(appDirectory);
    
    // Fetch blogs directly from API
    try {
      const blogsRes = await fetch(`${baseUrl}/api/blogs`, { 
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (blogsRes.ok) {
        const data = await blogsRes.json();
        const blogs = data.blogs || [];
        
        console.log(`Found ${blogs.length} blogs for sitemap.xml`);
        
        blogs.forEach(blog => {
          allUrls.push({
            url: `${baseUrl}/blogs/${blog.slug}`,
            lastModified: new Date(blog.date).toISOString(),
            changeFrequency: 'weekly',
            priority: 0.7
          });
        });
      } else {
        console.error('Failed to fetch blogs:', blogsRes.status);
      }
    } catch (blogError) {
      console.error('Error fetching blogs for sitemap:', blogError);
    }
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap.xml:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}