import styles from '../../styles/dangkibanhang/xetduyetdkbh.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useEffect, useState} from 'react'
import Popup from '../../pages/dangkibanhang/popup'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';

import { Container, Typography } from '@material-ui/core';

import Controls from '../../components/controls/Controls'
import TKForm from '../../pages/dangkibanhang/xetduyendkbhform'



export default function xetduyetdkbh(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [openPopup, setOpenPopup] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    const [data, setData] = useState([])
    useEffect(()=>
    {
        fetch('https://localhost:44357/api/DVVC/0')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/DVVC')
        .then((response) => response.json())
        .then((result) => setcombobox_DonViVanChuyen(result))
        .catch((error) => console.log(error));
    },[])

    return (
        <div className="xetduyetdkbh">
            <Head>
                <title>Xét duyệt đăng kí bán hàng</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 style={{ 'text-align': 'center', 'padding-top': '20' }}>
                Xét duyệt đăng kí bán hàng
            </h1>
            <Container>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Mã phiếu đăng kí cung ứng</b></TableCell>
                        <TableCell align="left"><b>Mã nhà cung cấp</b></TableCell>
                        <TableCell align="left"><b>Ngày đăng kí</b></TableCell>
                        <TableCell align="left"><b>TrangThai</b></TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        data && data.length > 0 ?
                        data.map((row) => (
                        <TableRow key={row.MaPhieuDKCU}>
                            <TableCell component="th" scope="row">
                                {row.MaDH}
                            </TableCell>
                            <TableCell align="left">{row.MaNCC}</TableCell>
                            <TableCell align="left">{row.NgayDK}</TableCell>
                            <TableCell align="left">
                            <Typography
                            classname={styles.status}
                            style={{
                                backgroundColor:
                                ((row.TrangThai=== 'Thành công' && 'PaleGreen')||
                                (row.TrangThai === 'Chờ duyệt' && 'Turquoise') ||
                                (row.TrangThai === 'Đã hủy' && 'LightCoral')
                                )
                            }}
                            >{row.TrangThai}
                             </Typography>
                             </TableCell>
                            <Controls.ActionButton
                            onClick = {()=>openInPopup(row)}>
                            Edit
                        </Controls.ActionButton>
                        </TableRow>
                        )) : <></>
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
            <Popup 
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}>
            <TKForm
                recordForEdit={recordForEdit} />
            </Popup>
        </div>
    )
}