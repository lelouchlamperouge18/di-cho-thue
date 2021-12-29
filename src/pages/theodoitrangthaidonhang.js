import styles from '../styles/TheoDoiTrangThaiDonHang.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import React, {useState, useEffect} from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, Container} from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



export default function MatHangThietYeu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    const [value, setValue] = React.useState(0);

    const [trangthai, setTrangThai] = useState("Đóng gói");
    const changeTrangThai = (newTrangThai) =>
    {
        setTrangThai(newTrangThai)
        setPage(0);
    }

    const [donHangList, setDonHangList] = useState([]);
    const [chiTietDonHangList, setChiTietDonHangList] = useState([]);
    useEffect (() =>
    {
        fetch('http://localhost:8080/api/donhangs', {method: 'GET'})
        .then(response => response.json())
        .then(result => setDonHangList(result))
        .catch(error => console.log(error));

        fetch('http://localhost:8080/api/chitietdonhangs')
        .then(response => response.json())
        .then(result => setChiTietDonHangList(result))
        .catch(error => console.log(error));
    },[])

    const [search, setSearch] = useState("")


    // page
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerpage] = useState(4);
    const handleChangePage = (event, newPage) =>
    {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event =>
    {
        setRowsPerpage(parseInt(event.target.value, 10));
        setPage(0);
    }


        
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
        <div className="TheoDoiTrangThaiDonHang">
            <Head>
                <title>Theo dõi trạng thái đơn hàng</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 className={styles.title}>
                THEO DÕI TRẠNG THÁI ĐƠN HÀNG
            </h1>

            
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction onClick={(event) => changeTrangThai("Đóng gói")} label="Đóng gói" icon={<img className={styles.pic} src="https://lh3.googleusercontent.com/proxy/BZSaq2MfZ1lyqrfyaZg86FzgjGE_qvLVPSaMu2lIKlYwjz2H1sHl1OwFvZD5vRHXrniKb2CRz-ID3NlRJFTA11470zMhEkzQvbhZcOX5p6XSqPbIzwCoXvYwbn4"/>} />
                <BottomNavigationAction onClick={(event) => changeTrangThai("Đang giao")} label="Đang giao" icon={<img className={styles.pic} src="https://cdn3.iconfinder.com/data/icons/purchases-and-sales/512/transpo.png" />} />
                <BottomNavigationAction onClick={(event) => changeTrangThai("Đã giao")} label="Đã giao" icon={<img className={styles.pic} src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png" />} />
                <BottomNavigationAction onClick={(event) => changeTrangThai("Đổi trả")} label="Đổi trả" icon={<img className={styles.pic} src="https://cdn-icons-png.flaticon.com/128/3338/3338693.png" />} />
            </BottomNavigation>
            <br/><br/>

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
            <br/><br/><br/><br/>
            <TablePagination
                    component="div"
                    count={donHangList.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[4, 8, 12]}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <br/>
            
            <Grid container spacing={2} className={styles.groupcard}>
            {
                donHangList && donHangList.length > 0 ?
                donHangList
                .filter(val =>
                    {
                        if (search === "")
                            return val;
                        else if (val.ngayLap.toLowerCase().includes(search.toLowerCase()) || 
                                    val.tongTien.toString().includes(search) ||
                                    val.hinhThucThanhToan.toLowerCase().includes(search.toLowerCase()) || 
                                    val.phiVanChuyen.toString().includes(search) || 
                                    val.tenShipper.toLowerCase().includes(search.toLowerCase())
                                )
                            return val; 

                    })
                .filter(val =>
                    {
                        if (trangthai === "")
                            return val;
                        else if (val.trangThai.toLowerCase().includes(trangthai.toLowerCase()))
                            return val;
                    })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row)=>
                (
                    <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }} className={styles.root} >
                        <CardActionArea>
                            <CardMedia className={styles.media}
                                component="img"
                                height="140"
                                image="https://www.victoriavn.com/images/Newsletter/thumbnail_12.jpg"
                                alt="green iguana"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Mã đơn hàng: {row.maDH}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ngày lập đơn: {row.ngayLap}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tổng tiền: {row.tongTien}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Trạng thái: {row.trangThai}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Hình thức thanh toán: {row.hinhThucThanhToan}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Phí vận chuyển: {row.phiVanChuyen}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Shipper: {row.tenShipper}
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary"
                                    onClick={function(event)
                                        {
                                            changeMaDH(row.maDH);
                                            handleClickOpen();
                                        }}>
                                Xem chi tiết 
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                )) : 'Loading'
            }
            </Grid>

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
