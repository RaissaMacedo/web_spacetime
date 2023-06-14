import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
  // redirecionando para rota raiz
  const redirectURL = new URL('/', request.url)
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0`,
    },
  })
}
