import styles from '../../styles/admin/AdminOrders.module.css'
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
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core'

export default function AdminOrders(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const data = props.data;

    return (
        <div className="AdminOrders">
            <Head>
                <title>Your Orders</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 style={{"text-align": "center", "padding-top": "20"}}>
                LIST ALL ORDERS
            </h1>
            <Container style={{"padding-right": "100px","padding-left": "100px"}}>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Mã Đơn hàng</b></TableCell>
                        <TableCell align="left"><b>Ngày lập</b></TableCell>
                        <TableCell align="left"><b>Tổng tiền</b></TableCell>
                        <TableCell align="left"><b>Trạng thái</b></TableCell>
                        <TableCell align="left"><b>Hoa Hồng</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.MaShipper}>
                        <TableCell component="th" scope="row">
                            {row.MaDH}
                        </TableCell>
                        <TableCell align="left">{row.NgayLap}</TableCell>
                        <TableCell align="left">{row.TongTien}</TableCell>
                        <TableCell align="left">{row.TrangThai}</TableCell>
                        <TableCell align="left">{row.TongTien*0.05}</TableCell>
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
        {MaDH: 1, NgayLap: '2021-09-12', TongTien: 289500, TrangThai: 'Đang giao', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 2, NgayLap: '2021-11-10', TongTien: 362000, TrangThai: 'Đã giao', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 3, NgayLap: '2021-08-01', TongTien: 217000, TrangThai: 'Đổi trả', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 4, NgayLap: '2020-04-12', TongTien: 200000, TrangThai: 'Đang giao', HinhThucThanhToan: 'Chuyển khoản'},
        {MaDH: 5, NgayLap: '2021-01-12', TongTien: 289500, TrangThai: 'Đang giao', HinhThucThanhToan: 'Tiền mặt'},
    ]
    return {
        props: {data}
    }
}