import styles from '../../styles/thongtindonhang/Invoice.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useEffect, useState} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Container } from '@material-ui/core'

export default function Invoice(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [data, setData] = useState([])
    useEffect(()=>
    {
        fetch('https://localhost:44357/api/ThongTinDonHang/1')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log(error));
    },[])

    return (
        <div className="Invoice">
            <Head>
                <title>Thông tin hóa đơn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 class={styles.title}>
                THÔNG TIN HÓA ĐƠN
            </h1>
            <Container>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Mã đơn hàng</b></TableCell>
                        <TableCell align="left"><b>Tên sản phẩm</b></TableCell>
                        <TableCell align="left"><b>Tên nhà cung cấp</b></TableCell>
                        <TableCell align="left"><b>Số lượng</b></TableCell>
                        <TableCell align="left"><b>Giá</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        data && data.length > 0 ?
                        data.map((row) => (
                        <TableRow key={row.MaDH}>
                            <TableCell component="th" scope="row">
                                {row.MaDH}
                            </TableCell>
                            <TableCell align="left">{row.TenSP}</TableCell>
                            <TableCell align="left">{row.TenNCC}</TableCell>
                            <TableCell align="left">{row.SoLuong}</TableCell>
                            <TableCell align="left">{row.Gia}</TableCell>
                        </TableRow>
                        )) : <></>
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    )
}