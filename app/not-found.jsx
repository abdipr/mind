export default function NotFound() {
  return (
    <html lang="id">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 700 }}>404</h1>
          <p style={{ fontSize: '1.25rem', color: '#666', marginTop: '0.5rem' }}>
            Page not found
          </p>
          <a href="/id" style={{ marginTop: '1rem', color: '#0070f3', textDecoration: 'underline' }}>
            ← Back to home
          </a>
        </div>
      </body>
    </html>
  )
}
