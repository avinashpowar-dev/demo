import Link from 'next/link';

export default function Navigation(){
    return(
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products/iphone">Products</Link>
        </nav>
    )
}