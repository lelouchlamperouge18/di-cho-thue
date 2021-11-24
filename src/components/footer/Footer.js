import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div style={{"background-color": "#666666"}}>
            <p style={{"text-align": "center", "color": "white"}}>
                Here is the footer of the website
                <br></br>
                ©Group R07 - PTUDHTTTHD - University of Science, VNUHCM
            </p>
        </div>
    )
}