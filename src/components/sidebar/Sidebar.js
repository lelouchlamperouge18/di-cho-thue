import React from 'react'
import Link from 'next/link'
import styles from './Sidebar.module.css'
import {FaTimes} from 'react-icons/fa'

export default function Sidebar({ isOpen, toggle }) {
    return (
        <div className={isOpen? styles.mySidebarContainer : styles.mySidebarContainerHide} isOpen={isOpen} onClick={toggle}> 
            <div onClick={toggle}>
                <FaTimes className={styles.closeIcon}/>
            </div>
            <div className={styles.sideMenu}>
                    <ul>
                        <li>
                            <Link href="/about" onClick={toggle}><a className={styles.sideLink}>About</a></Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={toggle}><a className={styles.sideLink}>Contact</a></Link>
                        </li>
                        <li>
                            <Link href="/sign-in" onClick={toggle}><a className={styles.navLink}>Sign In</a></Link>
                        </li>
                        <li>
                            <Link
                                href="/api/auth/signin"
                                onClick={(e) => {
                                    toggle;
                                    e.preventDefault();
                                    signIn();
                                }}
                            >
                                <a className={styles.sideLink}> Log In </a>
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}