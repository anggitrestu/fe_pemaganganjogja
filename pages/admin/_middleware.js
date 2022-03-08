import { NextResponse } from 'next/server';
import { verifyToken } from '../../helpers/middleware';

export default function middleware(req) {
  const { token } = req.cookies;
  const valid = verifyToken(token);

  if (valid === false || valid?.data?.role !== 'super-admin') {
    return NextResponse.redirect('/login');
  }
}
