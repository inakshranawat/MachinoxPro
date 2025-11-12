import fs from 'fs';
import path from 'path';

// Automatically scan and get all static pages from your project
export async function getAllStaticPages() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com';
  const pagesDirectory = path.join(process.cwd(), 'app'); // For App Router
  // If using Pages Router, use: path.join(process.cwd(), 'pages');
  
  const pages = [];

  function scanDirectory(dir, basePath = '') {
    try {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          // Skip special Next.js directories
          if (['api', '_app', '_document', '_error', '[...', 'admin'].some(skip => file.startsWith(skip))) {
            return;
          }
          scanDirectory(filePath, `${basePath}/${file}`);
        } else if (file === 'page.js' || file === 'page.jsx' || file === 'page.tsx') {
          // Found a page file
          let route = basePath || '/';
          // Clean up the route
          route = route.replace(/\/page$/, '');
          if (!route.startsWith('/')) route = '/' + route;
          
          pages.push({
            url: `${baseUrl}${route}`,
            lastModified: new Date().toISOString(),
            changeFrequency: route === '/' ? 'daily' : 'weekly',
            priority: route === '/' ? 1.0 : 0.8
          });
        }
      });
    } catch (error) {
      console.error('Error scanning directory:', error);
    }
  }

  scanDirectory(pagesDirectory);
  return pages;
}

// Automatically get all blog posts from your API/database
export async function getAllBlogPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourwebsite.com';
  
  try {
    // Fetch from your blog API endpoint
    const res = await fetch(`${baseUrl}/api/blogs`, { 
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return [];
    }
    
    const blogs = await res.json();
    
    return blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || blog.createdAt).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
      type: 'blog'
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getAllSitemapUrls() {
  const [staticPages, blogPosts] = await Promise.all([
    getAllStaticPages(),
    getAllBlogPosts()
  ]);
  
  return [...staticPages, ...blogPosts];
}