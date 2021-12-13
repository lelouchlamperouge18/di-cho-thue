import styles from '../../styles/thongke/DoanhThu.module.css'
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


import { Container } from '@material-ui/core'



export default function DoanhThu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="DoanhThu">
            <Head>
                <title>Thống kê doanh thu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 class={styles.title}>
                THỐNG KÊ DOANH THU CHO ĐỐI TÁC
            </h1>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="year-dropdown">
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
                    
                </Select>
                <FormHelperText>Chọn năm</FormHelperText>
            </FormControl>
            &emsp;&emsp;&emsp;&emsp;
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="quarter-dropdown">
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
        
                </Select>
                <FormHelperText>Chọn quý</FormHelperText>
            </FormControl>
            &emsp;&emsp;&emsp;&emsp;
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="month-dropdown" >
                    <MenuItem value="0">
                        <em>Tất cả</em>
                    </MenuItem>
                    
                </Select>
                <FormHelperText>Chọn tháng</FormHelperText>
            </FormControl>
            &emsp;&emsp;&emsp;&emsp;
            <Button variant="contained">Xem thống kê</Button>
            <br/><br/>

            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Năm</b></TableCell>
                        <TableCell align="left"><b>Qúy</b></TableCell>
                        <TableCell align="left"><b>Tháng</b></TableCell>
                        <TableCell align="left"><b>Tên nhà cung cấp</b></TableCell>
                        <TableCell align="left"><b>Doanh thu</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody id="tdata">
                        
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
    
// }