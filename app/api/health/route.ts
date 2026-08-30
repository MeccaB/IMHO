import { NextResponse } from 'next/server';
export function GET(){return NextResponse.json({service:'my-two-cents',status:'ok'});}
