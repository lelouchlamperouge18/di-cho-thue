import styles from '../styles/LichSuMuaHang.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import React, {useState, useEffect} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import TablePagination from '@material-ui/core/TablePagination';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, Container, DialogContent, DialogContentText } from '@material-ui/core';

export default function MatHangThietYeu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // search
    const [search, setSearch] = useState("")

    // load data
    const [donHangList, setDonHangList] = useState([]);
    const [chiTietDonHangList, setChiTietDonHangList] = useState([]);
    useEffect (() =>
    {
        fetch('http://localhost:8080/api/donhangs')
        .then(response => response.json())
        .then(result => setDonHangList(result))
        .catch(error => console.log(error));

        fetch('http://localhost:8080/api/chitietdonhangs')
        .then(response => response.json())
        .then(result => setChiTietDonHangList(result))
        .catch(error => console.log(error));
    },[])

    const [order, setOrder] = useState("ASC")
    const sorting = (col) =>
    {
        if (order === "ASC")
        {   
            if (col === "maDH" || col === "tongTien" || col === "phiVanChuyen")
            {
                const sorted = [...donHangList].sort((a, b) => 
                    a[col] > b[col] ? 1 : -1
                );
                setDonHangList(sorted);
                setOrder("DSC");
            }
            else if (col === "ngayLap")
            {
                const sorted = [...donHangList].sort((a, b) => 
                    (new Date(a[col])) > (new Date(b[col])) ? 1 : -1
                );
                setDonHangList(sorted);
                setOrder("DSC");
            }
            else
            {
                const sorted = [...donHangList].sort((a, b) => 
                    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                );
                setDonHangList(sorted);
                setOrder("DSC");
            }
        }
        if (order === "DSC")
        {   
            if (col === "maDH" || col === "tongTien" || col === "phiVanChuyen")
            {
                const sorted = [...donHangList].sort((a, b) => 
                    a[col] < b[col] ? 1 : -1
                );
                setDonHangList(sorted);
                setOrder("ASC");
            }
            else if (col === "ngay")
            {
                const sorted = [...donHangList].sort((a, b) => 
                    (new Date(a[col])) <= (new Date(b[col])) ? 1 : -1
                );
                setDonHangList(sorted);
                setOrder("ASC");
            }
            else
            {
                const sorted = [...donHangList].sort((a, b) => 
                    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                );
                setDonHangList(sorted);
                setOrder("ASC");
            }
        }
    }

    // page
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerpage] = useState(5);
    const handleChangePage = (event, newPage) =>
    {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event =>
    {
        setRowsPerpage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const emptyRows = 
    rowsPerPage - Math.min(rowsPerPage, donHangList.length - page * rowsPerPage);
    
    // dialog
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => 
    {
        setOpen(true);
    };
    
    const handleClose = () => 
    {
        setOpen(false);
    };

    const [maDHSelected, setMaDHSelected] = useState(0);
    const changeMaDH = (newMaDH) =>
    {
        setMaDHSelected(newMaDH)
    }

    return (
        <div className="LichSuMuaHang">
            <Head>
                <title>Lịch sử mua hàng</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 className={styles.title}>
                LỊCH SỬ MUA HÀNG
            </h1>
            <TextField
                className={styles.search}
                id="standard-textarea"
                label="Search..."
                placeholder="Enter keys..."
                multiline
                variant="standard"
                onChange={(e)=>{
                    setSearch(e.target.value);
                }}
            />
            <br/><br/>

            
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell onClick={()=>sorting("maDH")}><b>Mã đơn hàng</b></TableCell>
                        <TableCell onClick={()=>sorting("ngayLap")} align="left"><b>Ngày lập</b></TableCell>
                        <TableCell onClick={()=>sorting("tongTien")} align="left"><b>Tổng tiền</b></TableCell>
                        <TableCell onClick={()=>sorting("trangThai")} align="left"><b>Trạng thái</b></TableCell>
                        <TableCell onClick={()=>sorting("hinhThucThanhToan")} align="left"><b>Hình thức thanh toán</b></TableCell>
                        <TableCell onClick={()=>sorting("phiVanChuyen")} align="left"><b>Phí vận chuyển</b></TableCell>
                        <TableCell onClick={()=>sorting("tenKH")} align="left"><b>Tên khách hàng</b></TableCell>
                        <TableCell onClick={()=>sorting("tenShipper")} align="left"><b>Shipper</b></TableCell>
                        <TableCell align="left"><b>Xem chi tiết đơn hàng</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody id="tdata">
                        {
                        donHangList && donHangList.length > 0 ?
                        donHangList
                        .filter(val => val.trangThai === "Đã giao")
                        .filter(val =>
                        {
                            if (search === "")
                                return val;
                            else if (val.maDH.toString().includes(search) || 
                                        (new Date(val.ngayLap)).toString().includes(search) ||
                                        val.tongTien.toString().includes(search) || 
                                        val.trangThai.toLowerCase().includes(search.toLowerCase()) || 
                                        val.hinhThucThanhToan.toLowerCase().includes(search.toLowerCase()) || 
                                        val.phiVanChuyen.toString().includes(search) ||
                                        val.tenKH.toLowerCase().includes(search.toLowerCase()) ||
                                        val.tenShipper.toLowerCase().includes(search.toLowerCase())
                                    )
                                return val; 

                        })
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => 
                        (
                            <TableRow key={row.maDH}>
                                <TableCell align="left">{row.maDH}</TableCell>
                                <TableCell align="left">{row.ngayLap}</TableCell>
                                <TableCell align="left">{row.tongTien}</TableCell>
                                <TableCell align="left">{row.trangThai}</TableCell>
                                <TableCell align="left">{row.hinhThucThanhToan}</TableCell>
                                <TableCell align="left">{row.phiVanChuyen}</TableCell>
                                <TableCell align="left">{row.tenKH}</TableCell>
                                <TableCell align="left">{row.tenShipper}</TableCell>
                                <TableCell align="left">
                                    <Button  variant="outlined" 
                                            onClick={function(event)
                                            {
                                                changeMaDH(row.maDH);
                                                handleClickOpen();
                                            }}>
                                        Xem chi tiết
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : 'Loading'}
                        {
                            emptyRows > 0 && (
                                <TableRow style={{height: 53 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={donHangList.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 25]}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <br/><br/>  
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Danh sách chi tiết sản phẩm</DialogTitle>
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Sản phẩm</b></TableCell>
                                <TableCell><b>Nhà cung cấp</b></TableCell>
                                <TableCell><b>NS</b>X</TableCell>
                                <TableCell><b>Đơn giá</b></TableCell>
                                <TableCell><b>Số lượng</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                chiTietDonHangList && chiTietDonHangList.length > 0 ?
                                chiTietDonHangList
                                .filter(val => val.maDH === maDHSelected)
                                .map((row) => 
                                (
                                    <TableRow>
                                        <TableCell>{row.tenSP}</TableCell>
                                        <TableCell>{row.tenNCC}</TableCell>
                                        <TableCell>{row.nsx}</TableCell>
                                        <TableCell>{row.gia}</TableCell>
                                        <TableCell>{row.soLuong}</TableCell>
                                    </TableRow>
                                )) : 'Loading'
                            }
                        </TableBody>
                    </Table>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
            </Container>
        </div>
    )
}