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
                <title>C???p nh???t tr???ng th??i ????n h??ng</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 class={styles.title}>
                C???p nh???t tr???ng th??i ????n h??ng
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
              <em>T???t c???</em>
            </MenuItem>
            {combobox_DonViVanChuyen && combobox_DonViVanChuyen.length > 0
              ? combobox_DonViVanChuyen.map((row) => (
                  <MenuItem value={row.MaDVVC}>{row.TenDVVC}</MenuItem>
                ))
              : 'Loading'}
          </Select>
          <FormHelperText>Ch???n ????n v??? v???n chuy???n</FormHelperText>
        </FormControl>
        &emsp;&emsp;
            <br />
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>M?? ????n h??ng</b></TableCell>
                        <TableCell align="left"><b>T??n kh??ch h??ng</b></TableCell>
                        <TableCell align="left"><b>?????a ch???</b></TableCell>
                        <TableCell align="left"><b>S??? ??i???n tho???i</b></TableCell>
                        <TableCell align="left"><b>????n v??? v???n chuy???n</b></TableCell>
                        <TableCell align="left"><b>H??nh th???c thanh to??n</b></TableCell>
                        <TableCell align="left"><b>Tr???ng Th??i</b></TableCell>
                        <TableCell align="left"><b>Ph?? v???n chuy???n</b></TableCell>
                        <TableCell align="left"><b>T???ng ti???n</b></TableCell>
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
                                ((row.TrangThai=== '???? giao' && 'PaleGreen')||
                                (row.TrangThai === '??ang giao' && 'Turquoise') ||
                                (row.TrangThai === '?????i tr???' && 'LightCoral')
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