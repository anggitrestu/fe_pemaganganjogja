import { NextResponse } from 'next/server';
import { verifyToken } from '../helpers/middleware';

export default function middleware(req) {
  const url = req.url;

  console.log(req.url);
  const { token } = req.cookies;
  const valid = verifyToken(token);

  if (
    valid !== false &&
    (url === `${process.env.NEXT_PUBLIC_BASE_URL}/login` ||
      url === `${process.env.NEXT_PUBLIC_BASE_URL}/x/y/register`)
  ) {
    return NextResponse.redirect('/dashboard');
  }
}
