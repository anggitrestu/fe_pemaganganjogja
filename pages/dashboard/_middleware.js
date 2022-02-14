import { NextResponse } from 'next/server';
import { verifyToken } from '../../helpers/middleware';

export default function middleware(req) {
  console.log(req.url);
  const { token } = req.cookies;
  const valid = verifyToken(token);

  if (valid === false) {
    return NextResponse.redirect('/login');
  }
}
