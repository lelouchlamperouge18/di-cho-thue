import styles from '../../styles/quanlytaikhoan/QuanLyTK.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState, useEffect} from 'react'
import fetch from 'node-fetch';
import Popup from '../../pages/quanlytaikhoan/popup'
import TKForm from '../../pages/quanlytaikhoan/quanlyform'
// import PopupTK from '../../pages/quanlytaikhoan/popupthemtk'
// import ThemTKForm from '../../pages/quanlytaikhoan/formthemtk'
import { Grid, Input, Button, Typography } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Container } from '@material-ui/core';
import Controls from '../../components/controls/Controls'


export default function TaiKhoan(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [openPopupTK, setOpenPopupTK] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [TaiKhoanList, setTaiKhoanList] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44357/api/QuanLyTaiKhoan')
        .then(response => response.json())
        .then(result => setTaiKhoanList(result))
        .catch(error => console.log(error));
    },[])

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }



    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const data = props.data;

    return (
        <div className="Accounts">
            <Head>
                <title>Danh sách cửa hàng (NCC)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 class={styles.title}>
                QUẢN LÝ TÀI KHOẢN
            </h1>
            <Button class={styles.btnthemtk} onClick={()=> setOpenPopupTK(true)}> Thêm tài khoản </Button>
            <Container>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Mã Accounts</b></TableCell>
                        <TableCell align="left"><b>Username</b></TableCell>
                        <TableCell align="left"><b>Trạng thái</b></TableCell>
                        <TableCell align="left"><b>Vai trò</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        TaiKhoanList && TaiKhoanList.length > 0 ?
                    TaiKhoanList.map((row) => (
                        <TableRow key={row.ID} hover>
                        <TableCell component="th" scope="row">
                            {row.ID}
                        </TableCell>
                        <TableCell align="left">{row.Username}</TableCell>
                        <TableCell align="left">
                            <Typography
                            classname={styles.status}
                            style={{
                                backgroundColor:
                                ((row.TrangThai=== 'Đang hoạt động' && 'lightgreen')||
                                (row.TrangThai === 'Ngừng hoạt động' && 'grey')
                                )
                            }}
                            >
                            {row.TrangThai}
                            </Typography>
                        </TableCell>
                        <TableCell align="left">{row.VaiTro}</TableCell>
                        <Controls.ActionButton
                        onClick = {()=>openInPopup(row)}>
                            Edit
                        </Controls.ActionButton>
                        </TableRow>
                    )): 'Loading...'}
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
            {/* <PopupTK 
            openPopupTK = {openPopupTK}
            setOpenPopupTK = {setOpenPopupTK}>
                <ThemTKForm
                recordForEdit={recordForEdit} />
            </PopupTK> */}
        </div>

    )
}
