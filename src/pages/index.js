import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import HomeIntro from '../components/home-intro/HomeIntro'
import ThongKe from '../components/thongke/ThongKe'
import Footer from '../components/footer/Footer'
import XetDuyet from '../components/xetduyet/Xetduyet'
import QuanLy from '../components/quanly/QuanLy'

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
        <hr/>
        <h1>DANH MỤC XÉT DUYỆT</h1>
        <br></br>
        <XetDuyet />
        <br></br>
        <h1>DANH MỤC THỐNG KÊ</h1>
        <br></br>
        <ThongKe />
        <br></br>
        <h1>DANH MỤC QUẢN LÝ</h1>
        <br></br>
        <QuanLy />
      </Container>
      <Footer />
    </div>
  )
}
