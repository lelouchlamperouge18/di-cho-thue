import React from 'react'
import Link from 'next/link'
import styles from './HomeIntro.module.css'

export default function HomeIntro() {
    return (
        <div className={styles.homeIntro}>
            <h1 className={styles.bigHeading}>
                ĐÂY LÀ WEBSITE ĐỒ ÁN ĐI CHỢ THUÊ CỦA NHÓM R07 MÔN PHÁT TRIỂN ỨNG DỤNG HỆ THỐNG THÔNG TIN HIỆN ĐẠI - 18_1
            </h1>
            <h2 className={styles.smallHeading}>
                University of Science <br/>
                ❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️❤️️
            </h2>
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