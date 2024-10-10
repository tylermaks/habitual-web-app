import Link from 'next/link';

export default function MainNav(){ 
    return(
        <nav className="flex items-center justify-between w-full py-4"> 
            <p>Logo</p>
            <ul className="flex items-center gap-24"> 
                <li>
                    <Link href="/about">About</Link> 
                </li>
                <li>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li> 
                    <Link href="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}