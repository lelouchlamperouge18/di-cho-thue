import styles from '../../styles/thongke/NhuCauThucPhamCungKy.module.css'
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
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';


import { Container } from '@material-ui/core';



export default function NhuCauThucPhamCungKy(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // const data = props.data;
    // const combobox_SanPham = props.combobox_SanPham;
    // const combobox_NhaCungCap = props.combobox_NhaCungCap;

    const [masp, setMasp] = useState(0);
    const [mancc, setMancc] = useState(0);

    const changeMaSP = (newMasp) =>
    {
        setMasp(newMasp)
    }

    const changeMaNCC = (newMancc) =>
    {
        setMancc(newMancc)
    }
    

    return (
        <div className="NhuCauThucPhamCungKy">
            <Head>
                <title>Thống kê nhu cầu thực phẩm cùng kỳ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 class={styles.title}>
                THỐNG KÊ NHU CẦU THỰC PHẨM CÙNG KỲ
            </h1>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="masp-dropdown" value={masp} onChange={(event)=>changeMaSP(event.target.value)}>
                    <MenuItem value="0">
                        <em>All</em>
                    </MenuItem>
                    {/* {combobox_SanPham.map((row) => 
                    (
                        <MenuItem value={row.MaSP}>{row.TenSP}</MenuItem>
                    ))} */}
                </Select>
                <FormHelperText>Chọn sản phẩm</FormHelperText>
            </FormControl>
            &emsp;&emsp;&emsp;&emsp;
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="mancc-dropdown" value={mancc} onChange={(event)=>changeMaNCC(event.target.value)}>
                    <MenuItem value="0">
                        <em>All</em>
                    </MenuItem>
                    {/* {combobox_NhaCungCap.map((row) => 
                    (
                        <MenuItem value={row.MaNCC}>{row.TenNCC}</MenuItem>
                     ))} */}
                </Select>
                <FormHelperText>Chọn nhà cung cấp</FormHelperText>
            </FormControl>
            <br/><br/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Các tiêu chí thống kê:</FormLabel>
                <RadioGroup name="radio-buttons-group" defaultValue="All">
                    <FormControlLabel value="All" control={<Radio />} label="Xem tất cả dữ liệu" />
                    <FormControlLabel value="AllYear" control={<Radio />} label="Tất cả các năm"/>
                    <FormControlLabel value="ChooseYearAllQuarter" control={<Radio />} label="Tất cả các quý trong năm"/>
                    <FormControlLabel value="ChooseYearAllMonth" control={<Radio />} label="Tất cả các tháng trong năm"/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select id="year-dropdown">
                            <MenuItem value="0">
                                <em>2000</em>
                            </MenuItem>
                        </Select>
                        <FormHelperText>Chọn năm</FormHelperText>
                    </FormControl>
                    <FormControlLabel value="ChooseQuarterAllYear" control={<Radio />} label="Tất cả các năm theo quý"/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select id="year-dropdown">
                            <MenuItem value="1">Qúy 1 (tháng 1 đến tháng 3)</MenuItem>
                            <MenuItem value="2">Qúy 2 (tháng 4 đến tháng 6)</MenuItem>
                            <MenuItem value="3">Qúy 3 (tháng 7 đến tháng 9)</MenuItem>
                            <MenuItem value="4">Qúy 4 (tháng 10 đến tháng 12)</MenuItem>
                        </Select>
                        <FormHelperText>Chọn quý</FormHelperText>
                    </FormControl>
                    <FormControlLabel value="ChooseMonthAllYear" control={<Radio />} label="Tất cả các năm theo tháng"/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select id="year-dropdown">
                            <MenuItem value="1">Tháng 1</MenuItem>
                            <MenuItem value="2">Tháng 2</MenuItem>
                            <MenuItem value="3">Tháng 3</MenuItem>
                            <MenuItem value="4">Tháng 4</MenuItem>
                            <MenuItem value="5">Tháng 5</MenuItem>
                            <MenuItem value="6">Tháng 6</MenuItem>
                            <MenuItem value="7">Tháng 7</MenuItem>
                            <MenuItem value="8">Tháng 8</MenuItem>
                            <MenuItem value="9">Tháng 9</MenuItem>
                            <MenuItem value="10">Tháng 10</MenuItem>
                            <MenuItem value="11">Tháng 11</MenuItem>
                            <MenuItem value="12">Tháng 12</MenuItem>
                        </Select>
                        <FormHelperText>Chọn tháng</FormHelperText>
                    </FormControl>
                </RadioGroup>
            </FormControl>

            <br/><br/>
            <Button variant="contained" onClick={function()
            {
                alert("thong bao");
            }}>Xem thống kê</Button>

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
                        {/* {data.filter(item =>
                        {
                            true
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
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/><br/>  
            </Container>
        </div>
    )
}


//Load DATA ban đầu cho trang web
// export async function getStaticProps()
// {
//     const https = require('https');
//     const agent = new https.Agent({
//     rejectUnauthorized: false
//     });

//     const res = await fetch("https://localhost:44357/api/MatHangThietYeu", 
//     { 
//         method: 'GET',
//         agent
//     });

//     const res_LoaiSP = await fetch("https://localhost:44357/api/LoaiSanPham", 
//     { 
//         method: 'GET',
//         agent
//     });

//     const res_SP = await fetch("https://localhost:44357/api/SanPham/0", 
//     { 
//         method: 'GET',
//         agent
//     });

//     const res_NCC = await fetch("https://localhost:44357/api/NhaCungCap", 
//     { 
//         method: 'GET',
//         agent
//     });

//     const  data = await res.json()
//     const combobox_LoaiSanPham = await res_LoaiSP.json()
//     const combobox_SanPham = await res_SP.json()
//     const combobox_NhaCungCap = await res_NCC.json()

//     if (!data) {
//         return {
//           notFound: true,
//         }
//     }

//     return { props: { data, combobox_LoaiSanPham, combobox_SanPham, combobox_NhaCungCap } }   
// }
