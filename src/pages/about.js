import React, {useState} from 'react'
import styles from '../styles/About.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

import { Container } from '@material-ui/core'

export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="About">
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Container>
                <h1 className={styles.About__title}>
                    <code>ABOUT THIS APP</code>
                </h1>
                <div className={styles.About__info}>
                    <code>⬤ DICHOTHUE-R07 web-app is a site for people who want to rent someone go to market for theirs.</code> <br></br>
                    <code>⬤ Nguyễn Lê Ngọc Tần - 18120553</code> <br></br>
                    <code>⬤ Nguyễn Văn Trị - 18120614</code> <br></br>
                    <code>⬤ Phạm Văn Minh Phương - 18120227</code> <br></br>
                    <code>⬤ Hoàng Công Sơn - 18120534</code> <br></br>
                    <code>⬤ Ksor Âu - 18120281</code> <br></br>
                    <code>⬤ Lê Hữu Thanh - 18120560</code> <br></br>
                    <code>⬤ Nguyễn Thanh Thi - 18120570</code> <br></br>
                    <code>⬤ Latest update: January 3rd, 2022.</code> <br></br>
                </div>
                <br></br>
            </Container>
        </div>
    )
}