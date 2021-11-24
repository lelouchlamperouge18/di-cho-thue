import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import {FaBars} from 'react-icons/fa'

import { signIn, signOut, useSession } from 'next-auth/client';

export default function Navbar({ toggle }) {
    const [session, loading] = useSession();

    return (
        <nav className={styles.myNavBar}>
            <div className={styles.myNavbarContainer}> 
                <Link href="/">
                    <a className={styles.myNavbarLogo}>ĐI CHỢ THUÊ APP R07</a>
                </Link>
                <div className={styles.mobileIcon} onClick={toggle}>
                    <FaBars />
                </div>
                <div className={styles.navMenu}>
                    <ul>
                        <li>
                            <Link href="/about" onClick={toggle}><a className={styles.navLink}>About</a></Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={toggle}><a className={styles.navLink}>Contact</a></Link>
                        </li>
                        {!session && (
                            <li>
                            <Link
                                href="/api/auth/signin"
                                onClick={(e) => {
                                    e.preventDefault();
                                    signIn();
                                }}
                            >
                                <a className={styles.navLink}> Log In </a>
                            </Link>
                            </li>
                        )}
                        {session && (
                            <>
                            <span className="email" style={{"color": "white"}}>{session.user.email}</span>
                            <li>
                            <Link
                                href="/api/auth/signout"
                                onClick={(e) => {
                                    e.preventDefault();
                                    signOut();
                                }}
                            >
                                <a className={styles.navLink}> Sign Out </a>
                            </Link>
                            </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}