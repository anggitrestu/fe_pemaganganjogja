import { NextResponse } from 'next/server';
import { verifyToken } from '../helpers/middleware';

export default function middleware(req) {
  const url = req.url;

  console.log(req.url);
  const { token } = req.cookies;
  const valid = verifyToken(token);

  if (
    valid?.data?.role === 'super-admin' &&
    (url.includes('/login') || url.includes('/x/y/register'))
  ) {
    return NextResponse.redirect('/admin');
  }

  if (
    valid?.data?.role === 'admin-company' &&
    (url.includes('/login') || url.includes('/x/y/register'))
  ) {
    return NextResponse.redirect('/dashboard');
  }
}
