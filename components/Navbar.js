import Link from 'next/link'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <Link href='/'>Home</Link>
            <Link href='/news'>News</Link>
            <Link href='/about'>About</Link>
        </div>
    )
}
