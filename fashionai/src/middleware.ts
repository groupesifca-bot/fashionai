import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret) {
    // Si pas de secret défini en prod, on bloque par sécurité
    if (process.env.NODE_ENV === 'production') {
      return new NextResponse('Unauthorized: ADMIN_SECRET is not configured', { status: 401 });
    }
    return NextResponse.next();
  }

  // Vérification basique pour les requêtes API (via header Authorization)
  if (req.nextUrl.pathname.startsWith('/api/admin')) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${adminSecret}` && authHeader !== adminSecret) {
      return new NextResponse(JSON.stringify({ success: false, error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // Pour l'interface UI /admin, utilisation de HTTP Basic Auth
  if (req.nextUrl.pathname.startsWith('/admin') && !req.nextUrl.pathname.startsWith('/api/')) {
    const basicAuth = req.headers.get('authorization');
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');
      if (pwd === adminSecret) {
        return NextResponse.next();
      }
    }
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
