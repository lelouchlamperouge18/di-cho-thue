import styles from '../styles/Contact.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import React, {useState} from 'react'
import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="Contact">
            <Head>
                <title>Contact Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 style={{"text-align": "center", "padding-top": "20"}}>
                Thông tin liên hệ - chi tiết Project
            </h1>

            <Container className={styles.listBtn}>
            <Button variant="contained" href="https://github.com/lelouchlamperouge18/di-cho-thue.git" className={styles.btn}>
                Front-end
            </Button> 
            &emsp;&emsp;
            <Button variant="contained" href="#contained-buttons" className={styles.btn}>
                Back-end
            </Button>
            &emsp;&emsp;
            <Button variant="contained" href="https://drive.google.com/drive/folders/1UxN5I-rxP0-TEFb2-FgeJ0BIc1KFKQtu?usp=sharing" className={styles.btn}>
                Drive quá trình
            </Button>
            
            </Container>
        </div>
    )
}