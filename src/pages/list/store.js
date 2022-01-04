import styles from '../../styles/list/Store.module.css'
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

export default function Store(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const data = props.data;

    return (
        <div className="Store">
            <Head>
                <title>Danh sách cửa hàng (NCC)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 class={styles.title}>
                DANH SÁCH THÔNG TIN CÁC CỬA HÀNG (NCC)
            </h1>
            <Container>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Mã NCC</b></TableCell>
                        <TableCell align="left"><b>Tên NCC</b></TableCell>
                        <TableCell align="left"><b>GiayPhepKinhDoanh</b></TableCell>
                        <TableCell align="left"><b>SDT</b></TableCell>
                        <TableCell align="left"><b>Email</b></TableCell>
                        <TableCell align="left"><b>TinhTP</b></TableCell>
                        <TableCell align="left"><b>LoaiVungDich</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.MaShipper}>
                        <TableCell component="th" scope="row">
                            {row.MaNCC}
                        </TableCell>
                        <TableCell align="left">{row.TenNCC}</TableCell>
                        <TableCell align="left">{row.GiayPhepKinhDoanh}</TableCell>
                        <TableCell align="left">{row.SDT}</TableCell>
                        <TableCell align="left">{row.Email}</TableCell>
                        <TableCell align="left">{row.TinhTP}</TableCell>
                        <TableCell align="left">{row.LoaiVungDich}</TableCell>
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
        {MaNCC: 1, TenNCC: 'Bách hóa xanh TĐ', GiayPhepKinhDoanh: 'GP10112020', SDT: '0129837461', Email: 'bhx@yahoo.com', TinhTP: 'TPHCM', LoaiVungDich: 'Vùng đỏ'},
        {MaNCC: 2, TenNCC: 'Siêu thị BigC', GiayPhepKinhDoanh: 'GP10112021', SDT: '0129837222', Email: 'bigc@yahoo.com', TinhTP: 'Bình Dương', LoaiVungDich: 'Vùng vàng'},
        {MaNCC: 3, TenNCC: 'Bách hóa xanh ĐN', GiayPhepKinhDoanh: 'GP10112022', SDT: '0129837333', Email: 'bhxdn@yahoo.com', TinhTP: 'Đồng Nai', LoaiVungDich: 'Vùng xanh'},
    ]
    return {
        props: {data}
    }
}