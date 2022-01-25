import styles from '../../styles/xacnhangiaohang/capnhatgiaohang.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useEffect, useState} from 'react'
import Popup from '../../pages/xacnhangiaohang/popup'
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
import TKForm from '../../pages/xacnhangiaohang/capnhatgiaohangform'



export default function capnhatgiaohang(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [combobox_DonViVanChuyen, setcombobox_DonViVanChuyen] = useState([]);
    const [MaDVVC, setMaDVVC] = useState(0);
    const changeMaDVVC = (newMaDVVC) => {
        setMaDVVC(newMaDVVC);
      };
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
        <div className="yeucauvanchuyen">
            <Head>
                <title>Cập nhật trạng thái đơn hàng</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 class={styles.title}>
                Cập nhật trạng thái đơn hàng
            </h1>
            <Container>
            
            <br />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            id="maDVVC-dropdown"
            className={styles.select}
            value={MaDVVC}
            onChange={(event) => changeMaDVVC(event.target.value)}
          >
            <MenuItem value="0">
              <em>Tất cả</em>
            </MenuItem>
            {combobox_DonViVanChuyen && combobox_DonViVanChuyen.length > 0
              ? combobox_DonViVanChuyen.map((row) => (
                  <MenuItem value={row.MaDVVC}>{row.TenDVVC}</MenuItem>
                ))
              : 'Loading'}
          </Select>
          <FormHelperText>Chọn đơn vị vận chuyển</FormHelperText>
        </FormControl>
        &emsp;&emsp;
            <br />
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Mã đơn hàng</b></TableCell>
                        <TableCell align="left"><b>Tên khách hàng</b></TableCell>
                        <TableCell align="left"><b>Địa chỉ</b></TableCell>
                        <TableCell align="left"><b>Số điện thoại</b></TableCell>
                        <TableCell align="left"><b>Đơn vị vận chuyển</b></TableCell>
                        <TableCell align="left"><b>Hình thức thanh toán</b></TableCell>
                        <TableCell align="left"><b>Trạng Thái</b></TableCell>
                        <TableCell align="left"><b>Phí vận chuyển</b></TableCell>
                        <TableCell align="left"><b>Tổng tiền</b></TableCell>
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
                            <TableCell align="left">{row.TenKH}</TableCell>
                            <TableCell align="left">{row.DiaChi}</TableCell>
                            <TableCell align="left">{row.SDT}</TableCell>
                            <TableCell align="left">{row.TenDVVC}</TableCell>
                            <TableCell align="left">{row.HinhThucThanhToan}</TableCell>
                            <TableCell align="left">
                            <Typography
                            classname={styles.status}
                            style={{
                                backgroundColor:
                                ((row.TrangThai=== 'Đã giao' && 'PaleGreen')||
                                (row.TrangThai === 'Đang giao' && 'Turquoise') ||
                                (row.TrangThai === 'Đổi trả' && 'LightCoral')
                                )
                            }}
                            >{row.TrangThai}
                             </Typography>
                             </TableCell>
                            <TableCell align="left">{row.PhiVanChuyen}</TableCell>
                            <TableCell align="left">{row.TongTien}</TableCell>
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