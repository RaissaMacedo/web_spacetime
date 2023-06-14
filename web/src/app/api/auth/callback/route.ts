/* eslint-disable import/no-duplicates */
import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // searchParams são todos parametros vindo na url
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const redirectTo = request.cookies.get('redirectTo')?.value
  const registerResponse = await api.post('/register', {
    code,
  })
  const { token } = registerResponse.data
  // se existir informacao REDIRECTTO manda p essa pagina se n  redirecionando para rota raiz
  const redirectURL = redirectTo ?? new URL('/', request.url)
  const cookieExpireInSeconds = 60 * 60 * 24 * 30
  // salvando token nos cookies
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpireInSeconds}`,
    },
  })
}
