import styles from '../styles/Contact.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import React, {useState} from 'react'

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
                CONTACT PAGE
            </h1>
        </div>
    )
}