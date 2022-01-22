import styles from '../styles/Orders.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
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

export default function Orders(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const data = props.data;

    return (
        <div className="Orders">
            <Head>
                <title>Your Orders</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <h1 style={{"text-align": "center", "padding-top": "20"}}>
                YOUR ORDERS
            </h1>
            <div style={{"text-align": "center"}}>
                <p>- Đối với HTTT tiền mặt: Không thanh toán qua app</p>
                <p>- Đã thanh toán và không được Hủy đơn khi đã giao xong đơn hàng</p>
            </div>
            <Container style={{"padding-right": "100px","padding-left": "100px"}}>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Mã Đơn hàng</b></TableCell>
                        <TableCell align="left"><b>Ngày lập</b></TableCell>
                        <TableCell align="left"><b>Tổng tiền</b></TableCell>
                        <TableCell align="left"><b>Trạng thái</b></TableCell>
                        <TableCell align="left"><b>Hình thức thanh toán</b></TableCell>
                        <TableCell align="left"><b>Actions (17&18)</b></TableCell>
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
                        <TableCell align="left">{row.HinhThucThanhToan}</TableCell>
                        <TableCell align="left">
                            {row.HinhThucThanhToan === 'Tiền mặt' || row.TrangThai === 'Đã giao' ?
                                <Button disabled variant="outlined" color="secondary">
                                    Thanh toán
                                </Button>
                                :
                                <Button variant="outlined" color="primary" style={{"backgroundColor": "green", "color": "white"}}>
                                    Thanh toán
                                </Button>
                            }
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {row.TrangThai === 'Đã giao' ?
                                <Button disabled variant="contained" color="secondary">
                                    Hủy đơn
                                </Button>
                                :
                                <Button variant="contained" color="secondary">
                                    Hủy đơn
                                </Button>
                            }
                        </TableCell>
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
    // API swagger:
    // ----- (1) ----- GET: /api/DonHang (Lấy list đơn hàng của user tương ứng, ở đây mặc định là khách hàng mã 1) (OPTIONAL)
    // Body: "MaKH": 1
    // Response: trả về list data như bên dưới
    // ----- (2) ----- PUT: /api/thanhtoandonhang
    // Body:
    // "MaDH": number
    // Response: set TrangThai -> 'Đã giao' với hàng có mã MaDH tương ứng trong dbo.DonHang
    // ----- (3) ----- DELETE: /api/huysonhang 
    // Body:
    // "MaDH": number
    // Response: xóa hàng với MaDH tương ứng khỏi bảng dbo.DonHang
    const data = [
        {MaDH: 1, NgayLap: '2021-09-12', TongTien: 289500, TrangThai: 'Đang giao', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 4, NgayLap: '2021-11-10', TongTien: 362000, TrangThai: 'Đã giao', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 11, NgayLap: '2021-08-01', TongTien: 217000, TrangThai: 'Đổi trả', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 14, NgayLap: '2020-04-12', TongTien: 200000, TrangThai: 'Đang giao', HinhThucThanhToan: 'Chuyển khoản'},
        {MaDH: 19, NgayLap: '2021-01-12', TongTien: 289500, TrangThai: 'Đang giao', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 25, NgayLap: '2021-12-20', TongTien: 127500, TrangThai: 'Đã giao', HinhThucThanhToan: 'Chuyển khoản'},
        {MaDH: 29, NgayLap: '2022-01-12', TongTien: 145000, TrangThai: 'Đang giao', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 33, NgayLap: '2022-01-12', TongTien: 234500, TrangThai: 'Đã giao', HinhThucThanhToan: 'Tiền mặt'},
        {MaDH: 38, NgayLap: '2021-02-01', TongTien: 127500, TrangThai: 'Đang giao', HinhThucThanhToan: 'Chuyển khoản'},
        {MaDH: 41, NgayLap: '2021-05-01', TongTien: 162000, TrangThai: 'Đang giao', HinhThucThanhToan: 'Chuyển khoản'},
        {MaDH: 43, NgayLap: '2021-02-01', TongTien: 72500, TrangThai: 'Đã giao', HinhThucThanhToan: 'Chuyển khoản'},
        {MaDH: 46, NgayLap: '2021-10-01', TongTien: 200000, TrangThai: 'Đã giao', HinhThucThanhToan: 'Chuyển khoản'},
    ]
    return {
        props: {data}
    }
}