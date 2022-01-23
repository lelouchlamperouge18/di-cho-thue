import styles from '../../styles/list/Store.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState, useEffect} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Container } from '@material-ui/core'

export default function Store() {
    const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState([])
    const toggle = () => {
        setIsOpen(!isOpen)
    }

	useEffect(() => {
		async function getData() {
		  try {
			const res = await fetch(`https://localhost:44357/api/nhacungcap`);
			const results = await res.json();
			return results;
		  } catch (error) {}
		}
		const result = getData().then(data => setData(data))
	  }, []);


	  console.log(data);
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
                        <TableCell align="left"><b>Số tài khoản ngân hàng</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data && data.length > 0 ? data.map((row) => (
                        <TableRow key={row.MaShipper}>
                        <TableCell component="th" scope="row">
                            {row.maNcc}
                        </TableCell>
                        <TableCell align="left">{row.tenNcc}</TableCell>
                        <TableCell align="left">{row.giayPhepKinhDoanh}</TableCell>
                        <TableCell align="left">{row.sdt}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.diaChi}</TableCell>
                        <TableCell align="left">{row.soTaiKhoanNganHang}</TableCell>
                        </TableRow>
                    )) : ''}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    )
}
