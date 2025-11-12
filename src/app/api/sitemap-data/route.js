
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  try {
    const allUrls = [];
    
    // Automatically scan src/app directory for pages
    const appDirectory = path.join(process.cwd(), 'src', 'app');
    
    function scanDirectory(dir, route = '') {
      try {
        if (!fs.existsSync(dir)) {
          console.log('Directory does not exist:', dir);
          return;
        }
        
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            // Skip these directories
            if (['api', 'components', 'lib', 'utils', '_', 'admin'].some(skip => file.startsWith(skip))) {
              return;
            }
            
            // Skip dynamic routes for now (we'll handle them separately)
            if (file.startsWith('[')) {
              return;
            }
            
            // Recursively scan subdirectories
            scanDirectory(filePath, route + '/' + file);
          } else if (file === 'page.js' || file === 'page.jsx' || file === 'page.tsx') {
            // Found a page!
            let pageRoute = route || '/';
            
            allUrls.push({
              url: `${baseUrl}${pageRoute}`,
              lastModified: new Date().toISOString(),
              changeFrequency: pageRoute === '/' ? 'daily' : 'weekly',
              priority: pageRoute === '/' ? 1.0 : 0.8,
              type: 'static'
            });
          }
        });
      } catch (error) {
        console.error('Error scanning directory:', dir, error);
      }
    }
    
    // Scan the app directory
    scanDirectory(appDirectory);
    
    // Fetch blog posts from API
    try {
      const blogsRes = await fetch(`${baseUrl}/api/blogs`, { 
        cache: 'no-store'
      });
      
      if (blogsRes.ok) {
        const data = await blogsRes.json();
        const blogs = data.blogs || []; // Your API returns { blogs: [...] }
        
        blogs.forEach(blog => {
          allUrls.push({
            url: `${baseUrl}/blogs/${blog.slug}`, // Note: /blogs/ not /blog/
            lastModified: new Date(blog.date).toISOString(),
            changeFrequency: 'weekly',
            priority: 0.7,
            type: 'blog'
          });
        });
      }
    } catch (blogError) {
      console.log('No blogs found or blog API not set up yet');
    }
    
    console.log('Found URLs:', allUrls.length);
    
    return Response.json(allUrls);
  } catch (error) {
    console.error('Error generating sitemap data:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}