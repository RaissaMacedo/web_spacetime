import { NextRequest, NextResponse } from 'next/server'
const signURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  // verificar se o usuario esta logado:
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20`,
      },
    })
  }
  // siga
  return NextResponse.next()
}
// quais endereços da minha aplicação é obrigado logar para acessar
export const config = {
  matcher: '/memories/:path*',
}
