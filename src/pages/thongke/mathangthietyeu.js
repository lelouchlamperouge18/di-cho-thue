import styles from '../../styles/thongke/MatHangThietYeu.module.css'
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
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default function MatHangThietYeu(props) {
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
    },[])


    // sắp xếp
    const [order, setOrder] = useState("ASC")
    const sorting = (col) =>
    {
        if (order === "ASC")
        {   
            if (col === "Gia")
            {
                const sorted = [...thongKeList].sort((a, b) => 
                    a[col] > b[col] ? 1 : -1
                );
                setThongKeList(sorted);
                setOrder("DSC");
            }
            else
            {
                const sorted = [...thongKeList].sort((a, b) => 
                    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                );
                setThongKeList(sorted);
                setOrder("DSC");
            }
        }
        if (order === "DSC")
        {   
            if (col === "Gia")
            {
                const sorted = [...thongKeList].sort((a, b) => 
                    a[col] < b[col] ? 1 : -1
                );
                setThongKeList(sorted);
                setOrder("ASC");
            }
            else
            {
                const sorted = [...thongKeList].sort((a, b) => 
                    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                );
                setThongKeList(sorted);
                setOrder("ASC");
            }
        }
    }

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
        <div className="MatHangThietYeu">
            <Head>
                <title>Thống kê mặt hàng thiết yếu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 class={styles.title}>
                THỐNG KÊ MẶT HÀNG THIẾT YẾU
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
            <br/>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="maloaisp-dropdown" className={styles.select} value={maloaisp} onChange={(event)=>changeMaLoaiSP(event.target.value)}>
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
                    { 
                    combobox_LoaiSanPham && combobox_LoaiSanPham.length > 0 ?
                    combobox_LoaiSanPham.map((row) => 
                    (
                        <MenuItem value={row.MaLoaiSP}>{row.TenLoaiSP}</MenuItem>
                    )) : 'Loading'}
                </Select>
                <FormHelperText>Chọn loại sản phẩm</FormHelperText>
            </FormControl>
            &emsp;&emsp;
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="masp-dropdown" className={styles.select} value={masp} onChange={(event)=>changeMaSP(event.target.value)}>
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
                    {
                    combobox_SanPham && combobox_SanPham.length > 0 ?
                    combobox_SanPham.filter(item => 
                    (maloaisp != 0 ? (item.LoaiSP == maloaisp) : (item.LoaiSP != 0))).map((row) => 
                    (
                        <MenuItem value={row.MaSP}>{row.TenSP}</MenuItem>
                    )) : 'Loading'}
                </Select>
                <FormHelperText>Chọn sản phẩm</FormHelperText>
            </FormControl>
            &emsp;&emsp;
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="mancc-dropdown" className={styles.select} value={mancc} onChange={(event)=>changeMaNCC(event.target.value)}>
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
                    {
                    combobox_NhaCungCap && combobox_NhaCungCap.length > 0 ?
                    combobox_NhaCungCap.map((row) => 
                    (
                        <MenuItem value={row.MaNCC}>{row.TenNCC}</MenuItem>
                     )) : 'Loadng'}
                </Select>
                <FormHelperText>Chọn nhà cung cấp</FormHelperText>
            </FormControl>
            <br/><br/><br/>
            <Typography className={styles.text} variant="h7">
                {
                    'All Rows: ' + thongKeList.length
                }
            </Typography>
            <br/><br/>
            <ReactHTMLTableToExcel
                    className={styles.export}
                    id="test-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export as XLS"/>
            <br/><br/>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table" id="table-to-xls">
                    <TableHead>
                    <TableRow>
                        <TableCell onClick={()=>sorting("TenLoaiSP")}><b>Tên Loại sản phẩm</b></TableCell>
                        <TableCell onClick={()=>sorting("TenSP")} align="left" sortDirection><b>Tên Sản phẩm</b></TableCell>
                        <TableCell onClick={()=>sorting("TenNCC")} align="left"><b>Tên Nhà cung cấp</b></TableCell>
                        <TableCell onClick={()=>sorting("DonViTinh")} align="left"><b>Đơn vị tính</b></TableCell>
                        <TableCell onClick={()=>sorting("NSX")} align="left"><b>Nhà sản xuất</b></TableCell>
                        <TableCell onClick={()=>sorting("Gia")} align="left" sortDirection><b>Giá bán</b></TableCell>
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
                            <TableCell align="left">{row.TenLoaiSP}</TableCell>
                            <TableCell align="left">{row.TenSP}</TableCell>
                            <TableCell align="left">{row.TenNCC}</TableCell>
                            <TableCell align="left">{row.DonViTinh}</TableCell>
                            <TableCell align="left">{row.NSX}</TableCell>
                            <TableCell align="left">{row.Gia}</TableCell>
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
                    count={thongKeList.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, thongKeList.length]}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <br/><br/>  
            </Container>
        </div>
    )
}