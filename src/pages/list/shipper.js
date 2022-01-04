import styles from '../../styles/list/Shipper.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Container } from '@material-ui/core'

export default function Shipper(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const data = props.data;

    return (
        <div className="Shipper">
            <Head>
                <title>Danh sách Shipper</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 class={styles.title}>
                DANH SÁCH THÔNG TIN NGƯỜI GIAO HÀNG
            </h1>
            <Container>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Mã Shipper</b></TableCell>
                        <TableCell align="left"><b>Tên Shipper</b></TableCell>
                        <TableCell align="left"><b>Số điện thoại</b></TableCell>
                        <TableCell align="left"><b>Email</b></TableCell>
                        <TableCell align="left"><b>CMND/CCCD</b></TableCell>
                        <TableCell align="left"><b>Mã DVVC</b></TableCell>
                        <TableCell align="left"><b>Giới tính</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.MaShipper}>
                        <TableCell component="th" scope="row">
                            {row.MaShipper}
                        </TableCell>
                        <TableCell align="left">{row.TenShipper}</TableCell>
                        <TableCell align="left">{row.SDT}</TableCell>
                        <TableCell align="left">{row.Email}</TableCell>
                        <TableCell align="left">{row.CMND}</TableCell>
                        <TableCell align="left">{row.MaDVVC}</TableCell>
                        <TableCell align="left">{row.GioiTinh}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    )
}

export async function getStaticProps(){
    const data = [
        {MaShipper: 1, TenShipper: 'Hoang Cong Son', SDT: '09213921873', Email: 'son@gmail.com', CMND: '1239210', MaDVVC: 2, GioiTinh: 'Nam'},
        {MaShipper: 2, TenShipper: 'Nguyen Van Tri', SDT: '02133243244', Email: 'tri@gmail.com', CMND: '1239210', MaDVVC: 3, GioiTinh: 'Nam'},
        {MaShipper: 3, TenShipper: 'Ksor Au', SDT: '2131232133', Email: 'au@gmail.com', CMND: '1239210', MaDVVC: 4, GioiTinh: 'Nam'},
        {MaShipper: 4, TenShipper: 'Nguyen Le Ngoc Tan', SDT: '153532432', Email: 'tan@gmail.com', CMND: '1239210', MaDVVC: 2, GioiTinh: 'Nam'},
        {MaShipper: 5, TenShipper: 'Pham Van Minh Phuong', SDT: '02133243244', Email: 'phuong@gmail.com', CMND: '1239210', MaDVVC: 2, GioiTinh: 'Nam'},
        {MaShipper: 6, TenShipper: 'Le Huu Thanh', SDT: '2131232133', Email: 'thanh@gmail.com', CMND: '1239210', MaDVVC: 1, GioiTinh: 'Nam'},
        {MaShipper: 7, TenShipper: 'Nguyen Thanh Thi', SDT: '153532432', Email: 'thi@gmail.com', CMND: '1239210', MaDVVC: 1, GioiTinh: 'Nam'},
    ]
    return {
        props: {data}
    }
}