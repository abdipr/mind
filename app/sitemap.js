export default function sitemap() {
  const baseUrl = 'https://mind.abdi.cc'
  
  // Halaman-halaman utama
  const routes = [
    '',
    '/id',
    '/en',
    '/id/life/principles',
    '/id/life/mistakes',
    '/id/thinking/mental-models',
    '/id/thinking/decision-making',
    '/id/tech/fundamentals',
    '/id/tech/workflow',
    '/en/life/principles',
    '/en/life/mistakes',
    '/en/thinking/mental-models',
    '/en/thinking/decision-making',
    '/en/tech/fundamentals',
    '/en/tech/workflow',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
