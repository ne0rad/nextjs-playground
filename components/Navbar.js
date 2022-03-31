import Link from 'next/link'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <Link href='/'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/news'>NEWS</Link>
        </div>
    )
}
