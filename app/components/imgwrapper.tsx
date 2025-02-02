'use client'
import Image from 'next/image';
import pexel from '../imaages/pexel.jpg';

export default function Imgwrapper() {
    return <Image
    src={pexel}
    alt="banner image"
    width={1500} 
    height={1500} 
    // blurDataURL="data:..." automatically provided
    // placeholder="blur" // Optional blur-up while loading
  />;
  }
  