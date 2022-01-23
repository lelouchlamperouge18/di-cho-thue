import styles from '../../styles/list/Shipper.module.css'
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

export default function Shipper() {
    const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState([])
    const toggle = () => {
        setIsOpen(!isOpen)
    }

	useEffect(() => {
		async function getData() {
		  try {
			const res = await fetch(`https://localhost:44357/api/shipper`);
			const results = await res.json();
			return results;
		  } catch (error) {
		  }
		}
		const result = getData().then(data => setData(data))
	  }, []);
	  console.log(data);
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
                    {data && data.length > 0
                ? data.map((row) => (
                        <TableRow key={row.MaShipper}>
                        <TableCell component="th" scope="row">
                            {row.maShipper}
                        </TableCell>
                        <TableCell align="left">{row.tenShipper}</TableCell>
                        <TableCell align="left">{row.sdt}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.cmnd}</TableCell>
                        <TableCell align="left">{row.maDvvc}</TableCell>
                        <TableCell align="left">{row.gioiTinh}</TableCell>
                        </TableRow>
                    )) : ''}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    )
}
