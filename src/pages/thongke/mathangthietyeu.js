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
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


import { Container } from '@material-ui/core'



export default function MatHangThietYeu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const data = props.data;
    const combobox_LoaiSanPham = props.combobox_LoaiSanPham;
    const combobox_SanPham = props.combobox_SanPham;
    const combobox_NhaCungCap = props.combobox_NhaCungCap;

    const [maloaisp, setMaloaisp] = useState(0);
    const [masp, setMasp] = useState(0);
    const [mancc, setMancc] = useState(0);

    const changeMaLoaiSP = (newMaloaisp) =>
    {
        setMaloaisp(newMaloaisp)
    }

    const changeMaSP = (newMasp) =>
    {
        setMasp(newMasp)
    }

    const changeMaNCC = (newMancc) =>
    {
        setMancc(newMancc)
    }


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

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="maloaisp-dropdown" value={maloaisp} onChange={(event)=>changeMaLoaiSP(event.target.value)}>
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
                    {combobox_LoaiSanPham.map((row) => 
                    (
                        <MenuItem value={row.MaLoaiSP}>{row.TenLoaiSP}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>Chọn loại sản phẩm</FormHelperText>
            </FormControl>
            &emsp;&emsp;&emsp;&emsp;
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="masp-dropdown" value={masp} onChange={(event)=>changeMaSP(event.target.value)}>
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
                    {combobox_SanPham.filter(item => 
                    (maloaisp != 0 ? (item.LoaiSP == maloaisp) : (item.LoaiSP != 0))).map((row) => 
                    (
                        <MenuItem value={row.MaSP}>{row.TenSP}</MenuItem>
                    )
                    )}
                </Select>
                <FormHelperText>Chọn sản phẩm</FormHelperText>
            </FormControl>
            &emsp;&emsp;&emsp;&emsp;
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="mancc-dropdown" value={mancc} onChange={(event)=>changeMaNCC(event.target.value)}>
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
                    {combobox_NhaCungCap.map((row) => 
                    (
                        <MenuItem value={row.MaNCC}>{row.TenNCC}</MenuItem>
                     ))}
                </Select>
                <FormHelperText>Chọn nhà cung cấp</FormHelperText>
            </FormControl>

            <br/><br/>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Tên Loại sản phẩm</b></TableCell>
                        <TableCell align="left"><b>Tên Sản phẩm</b></TableCell>
                        <TableCell align="left"><b>Tên Nhà cung cấp</b></TableCell>
                        <TableCell align="left"><b>Đơn vị tính</b></TableCell>
                        <TableCell align="left"><b>Nhà sản xuất</b></TableCell>
                        <TableCell align="left"><b>Giá bán</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody id="tdata">
                        {data.filter(item =>
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
                        }   
                        ).map((row) => 
                        (
                            <TableRow >
                            <TableCell align="left">{row.TenLoaiSP}</TableCell>
                            <TableCell align="left">{row.TenSP}</TableCell>
                            <TableCell align="left">{row.TenNCC}</TableCell>
                            <TableCell align="left">{row.DonViTinh}</TableCell>
                            <TableCell align="left">{row.NSX}</TableCell>
                            <TableCell align="left">{row.Gia}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/><br/>  
            </Container>
        </div>
    )
}


//Load DATA ban đầu cho trang web
export async function getStaticProps()
{
    const https = require('https');
    const agent = new https.Agent({
    rejectUnauthorized: false
    });

    const res = await fetch("https://localhost:44357/api/MatHangThietYeu", 
    { 
        method: 'GET',
        agent
    });

    const res_LoaiSP = await fetch("https://localhost:44357/api/LoaiSanPham", 
    { 
        method: 'GET',
        agent
    });

    const res_SP = await fetch("https://localhost:44357/api/SanPham/0", 
    { 
        method: 'GET',
        agent
    });

    const res_NCC = await fetch("https://localhost:44357/api/NhaCungCap", 
    { 
        method: 'GET',
        agent
    });

    const  data = await res.json()
    const combobox_LoaiSanPham = await res_LoaiSP.json()
    const combobox_SanPham = await res_SP.json()
    const combobox_NhaCungCap = await res_NCC.json()

    if (!data) {
        return {
          notFound: true,
        }
    }

    return { props: { data, combobox_LoaiSanPham, combobox_SanPham, combobox_NhaCungCap } }

    
}