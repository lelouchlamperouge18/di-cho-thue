import styles from '../../styles/sanpham/SanPham.module.css'
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
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Container, Typography } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import Controls from '../../components/controls/Controls'

export default function TKSanPham(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [combobox_LoaiSanPham, setcombobox_LoaiSanPham] = useState([]);
    const [combobox_SanPham, setcombobox_SanPham] = useState([]);
    const [combobox_NhaCungCap, setcombobox_NhaCungCap] = useState([]);

    const [maloaisp, setMaloaisp] = useState(0);
    const [masp, setMasp] = useState(0);
    const [mancc, setMancc] = useState(0);

    const changeMaLoaiSP = (newMaloaisp) => { setMaloaisp(newMaloaisp) }

    const changeMaSP = (newMasp) => { setMasp(newMasp) }

    const changeMaNCC = (newMancc) => { setMancc(newMancc) }

    // bảng thống kê
    const [thongKeList, setThongKeList] = useState([]);
    const [SanPhamList, setSanPhamList] = useState([]);
    useEffect (() =>
    {
        fetch('https://localhost:44357/api/MatHangThietYeu')
        .then(response => response.json())
        .then(result => setThongKeList(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/LoaiSanPham')
        .then(response => response.json())
        .then(result => setcombobox_LoaiSanPham(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/SanPham/0')
        .then(response => response.json())
        .then(result => setcombobox_SanPham(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/NhaCungCap')
        .then(response => response.json())
        .then(result => setcombobox_NhaCungCap(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/SanPham/0')
        .then(response => response.json())
        .then(result => setSanPhamList(result))
        .catch(error => console.log(error));
    },[])

    const [search, setSearch] = useState("")

    
    // page
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerpage] = useState(10);
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
    rowsPerPage - Math.min(rowsPerPage, thongKeList.length - page * rowsPerPage);
    console.log("page: " + page + "rowperpage: " + rowsPerPage)
    return (
        <div className="SanPham">
            <Head>
                <title>Thông tin sản phẩm</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 class={styles.title}>
                THÔNG TIN SẢN PHẨM
            </h1>
            <TextField
                className={styles.search}
                id="standard-textarea"
                label="Search..."
                placeholder="Nhập tên sản phẩm ..."
                multiline
                variant="standard"
                onChange={(e)=>{
                    setSearch(e.target.value);
                }}
            />
            <br/><br/>
            <TableContainer component={Paper}>
            <br/>
                <Table className={styles.table} aria-label="simple table" id="table-to-xls">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Tên sản phẩm</b></TableCell>
                        <TableCell align="left"><b>Tên Loại sản phẩm</b></TableCell>
                        <TableCell align="left"><b>Đơn vị tính</b></TableCell>
                        <TableCell align="left"><b>Giá bán</b></TableCell>
                        <TableCell align="left"><b>Nguồn gốc</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody id="tdata">
                        {
                        thongKeList && thongKeList.length > 0 ?
                        thongKeList
                        .filter(val =>
                        {
                            if (search === "")
                                return val;
                            else if (val.TenLoaiSP.toLowerCase().includes(search.toLowerCase()) || 
                                        val.TenSP.toLowerCase().includes(search.toLowerCase()) ||
                                        val.TenNCC.toLowerCase().includes(search.toLowerCase()) || 
                                        val.DonViTinh.toLowerCase().includes(search.toLowerCase()) || 
                                        val.NSX.toLowerCase().includes(search.toLowerCase()) || 
                                        val.Gia.toString().includes(search)
                                    )
                                return val; 

                        })
                        .filter(item =>
                        {
                            if (maloaisp == 0 && masp == 0 && mancc == 0)
                                return true //(item.MaLoaiSP != 0 && item.MaSP !=0 && item.MaNCC != 0)
                            else if (maloaisp != 0 && masp == 0 && mancc == 0)
                                return (item.MaLoaiSP == maloaisp && item.MaSP != 0 && item.MaNCC != 0)
                            else if (maloaisp == 0 && masp != 0 && mancc == 0)
                                return (item.MaLoaiSP != 0 && item.MaSP == masp && item.MaNCC != 0)
                            else if (maloaisp == 0 && masp == 0 && mancc != 0)
                                return (item.MaLoaiSP != 0 && item.MaSP != 0 && item.MaNCC == mancc)
                            else if (maloaisp != 0 && masp != 0 && mancc == 0)
                                return (item.MaLoaiSP == maloaisp && item.MaSP == masp && item.MaNCC != 0)
                            else if (maloaisp != 0 && masp == 0 && mancc != 0)
                                return (item.MaLoaiSP == maloaisp && item.MaSP != 0 && item.MaNCC == mancc)
                            else if (maloaisp == 0 && masp != 0 && mancc != 0)
                                return (item.MaLoaiSP != 0 && item.MaSP == masp && item.MaNCC == mancc)
                            else
                                return (item.MaLoaiSP === maloaisp && item.MaSP === masp && item.MaNCC === mancc)
                        })
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => 
                        (
                            <TableRow >
                            <TableCell align="left">{row.TenSP}</TableCell>
                            <TableCell align="left">{row.TenLoaiSP}</TableCell>
                            <TableCell align="left">{row.DonViTinh}</TableCell>
                            <TableCell align="left">{row.Gia}</TableCell>
                            <TableCell align="left">{row.NSX}</TableCell>
                            <button
                                data-toggle="modal" data-target="#exampleModal"
                                type="button"
                                className={styles.buttonxem}
                                >Xem
                            </button>
                            &nbsp;
                            <button
                                type="button" className={styles.buttonthem}
                            >Thêm
                            </button>
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
            </TableContainer>
            <br/><br/>  
            </Container>
        </div>
    )
}