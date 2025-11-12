'use client';

import { useState, useEffect } from 'react';

export default function AdminSitemap() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSitemap();
  }, []);

  async function fetchSitemap() {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch('/api/sitemap-data');
      
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
      
      const data = await res.json();
      console.log('Fetched sitemap data:', data);
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setUrls(data);
    } catch (error) {
      console.error('Error fetching sitemap:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const filteredUrls = urls.filter(item => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'static' && item.type === 'static') ||
      (filter === 'blog' && item.type === 'blog');
    
    const matchesSearch = item.url.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const staticCount = urls.filter(item => item.type === 'static').length;
  const blogCount = urls.filter(item => item.type === 'blog').length;

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
          <div style={{ fontSize: '1.25rem' }}>Loading sitemap...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', maxWidth: '500px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>❌</div>
          <h2 style={{ color: '#dc2626', marginBottom: '1rem' }}>Error Loading Sitemap</h2>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{error}</p>
          <button 
            onClick={fetchSitemap}
            style={{ 
              width: '100%',
              background: '#3b82f6', 
              color: 'white', 
              padding: '0.75rem', 
              borderRadius: '6px', 
              border: 'none', 
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                🗺️ Website Sitemap
              </h1>
              <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                Total URLs: <strong>{urls.length}</strong> | 
                Static Pages: <strong>{staticCount}</strong> | 
                Blog Posts: <strong>{blogCount}</strong>
              </p>
            </div>
            <button 
              onClick={fetchSitemap}
              style={{ 
                background: '#3b82f6', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '6px', 
                border: 'none', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>🔄</span> Refresh
            </button>
          </div>
        </div>

        {/* Empty State */}
        {urls.length === 0 && (
          <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📭</div>
            <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginBottom: '0.5rem' }}>No URLs Found</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              Make sure you have page.js files in your src/app directory
            </p>
            <button 
              onClick={fetchSitemap}
              style={{ 
                background: '#3b82f6', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '6px', 
                border: 'none', 
                cursor: 'pointer'
              }}
            >
              Refresh Sitemap
            </button>
          </div>
        )}

        {/* Main Content */}
        {urls.length > 0 && (
          <>
            {/* Filters */}
            <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <button
                  onClick={() => setFilter('all')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    background: filter === 'all' ? '#3b82f6' : '#e5e7eb',
                    color: filter === 'all' ? 'white' : '#374151',
                    fontWeight: filter === 'all' ? '600' : '400'
                  }}
                >
                  All ({urls.length})
                </button>
                <button
                  onClick={() => setFilter('static')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    background: filter === 'static' ? '#3b82f6' : '#e5e7eb',
                    color: filter === 'static' ? 'white' : '#374151',
                    fontWeight: filter === 'static' ? '600' : '400'
                  }}
                >
                  📄 Static Pages ({staticCount})
                </button>
                <button
                  onClick={() => setFilter('blog')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    background: filter === 'blog' ? '#3b82f6' : '#e5e7eb',
                    color: filter === 'blog' ? 'white' : '#374151',
                    fontWeight: filter === 'blog' ? '600' : '400'
                  }}
                >
                  ✍️ Blog Posts ({blogCount})
                </button>
              </div>

              <input
                type="text"
                placeholder="🔍 Search URLs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
            </div>

            {/* URLs Table */}
            <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead style={{ background: '#f3f4f6' }}>
                    <tr>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>#</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>URL</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Type</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Priority</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Change Freq</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUrls.map((item, index) => (
                      <tr key={index} style={{ borderTop: '1px solid #e5e7eb' }}>
                        <td style={{ padding: '1rem', color: '#6b7280' }}>{index + 1}</td>
                        <td style={{ padding: '1rem' }}>
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: '#3b82f6', textDecoration: 'none' }}
                          >
                            {item.url}
                          </a>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            background: item.type === 'blog' ? '#dbeafe' : '#fef3c7',
                            color: item.type === 'blog' ? '#1e40af' : '#92400e',
                            fontWeight: '500'
                          }}>
                            {item.type === 'blog' ? '✍️ Blog' : '📄 Static'}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', color: '#6b7280' }}>{item.priority}</td>
                        <td style={{ padding: '1rem', color: '#6b7280' }}>{item.changeFrequency}</td>
                        <td style={{ padding: '1rem', color: '#6b7280' }}>
                          {new Date(item.lastModified).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredUrls.length === 0 && (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#6b7280' }}>
                  No URLs found matching your search.
                </div>
              )}
            </div>

            {/* XML Sitemap Link */}
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <a 
                href="/sitemap.xml" 
                target="_blank"
                style={{
                  display: 'inline-block',
                  background: '#10b981',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                📄 View sitemap.xml for Google
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}