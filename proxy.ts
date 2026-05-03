import { NextResponse } from 'next/server'

export function proxy(request) {
  const { pathname } = request.nextUrl
  
  // Jika akses root '/', arahkan paksa ke '/id'
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/id', request.url))
  }
  
  // Untuk rute lainnya, biarkan Next.js melanjutkan seperti biasa
  return NextResponse.next()
}

export const config = {
  // Hanya jalankan proxy untuk root '/'
  matcher: ['/']
}
