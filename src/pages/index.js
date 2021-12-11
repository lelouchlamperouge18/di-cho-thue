import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import HomeIntro from '../components/home-intro/HomeIntro'
import ThongKe from '../components/thongke/ThongKe'
import KiemTraThongTin from '../components/kiemtrathongtin/KiemTraThongTin'
import Footer from '../components/footer/Footer'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ĐI CHỢ THUÊ R07</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Container>
        <HomeIntro />
        <h1>THỐNG KÊ</h1>
        <br></br>
        <ThongKe />
        <br></br>
        <h1>KIỂM TRA THÔNG TIN</h1>
        <br></br>
        <KiemTraThongTin />
      </Container>
      <Footer />
    </div>
  )
}
