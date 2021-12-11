import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './HomeIntro.module.css'
import logo from '../../../public/images/di-cho-thue.jpg'

export default function HomeIntro() {
    return (
        <div className={styles.homeIntro}>
            <h1 className={styles.bigHeading}>
                ỨNG DỤNG ĐI CHỢ THUÊ - R07- 18_1
            </h1>
            <h2 className={styles.smallHeading}>
                ❤️️️ University of Science ❤️ <br/>
            </h2>
            <Image src={logo} alt="logo-di-cho-thue"></Image>
            <div className={styles.btnHomeIntro}>
                <Link href="/about">
                    <a title="About us" className={styles.tryItFree}>
                        About us
                    </a>
                </Link>
                <Link href="/contact">
                    <a title="Contact" className={styles.tryInteractiveDemo}>
                        Contact
                    </a>
                </Link>
            </div>
            <p className={styles.noteHomeIntro}> No credit card required.</p>
        </div>
    )
}