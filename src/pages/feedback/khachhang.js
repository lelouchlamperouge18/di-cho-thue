import styles from '../../styles/feedback/Nhacungcap.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Container } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

export default function Feedbackkhachhang() {

    const [isOpen, setIsOpen] = useState(false);
    const [PhanHoiList, setPhanHoiList] = useState([]);
    const [dataph, setdataph] = useState({
    tenKH: "Nguyen Van An",
    username: "KH-1",
    phanHoi: "",
    thoiGian: "26-01-2022" });
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        fetch('https://localhost:44357/api/phanhoi')
        .then(response => response.json())
        .then(result => setPhanHoiList(result))
        .catch(error => console.log(error));
    },[])

    const handleChangePhanHoi = (e) => {
        setdataph({...dataph,phanHoi: e.target.value})
    }

    const handleGuiPH = (event) => {
    axios
	.post('http://localhost:8080/api/phanhoi' ,dataph)
	.then((res) => {
	  alert('Gửi phản hồi thành công')
	})
	.catch((err) => console.log(err));
    };
    console.log(dataph);

    return (
        <div className="FeedbackKH">
            <Head>
                <title>Feedback Khách Hàng</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
            <Grid container>
                <Grid item xs={5} sm={5}>
                <h1 className={styles.title}>
                    GỬI FEEDBACK CHO HỆ THỐNG
                </h1>
                <br></br>
                <TextField
                    id="outlined-full-width"
                    label="Nhập nội dung phản hồi cho hệ thống"
                    style={{ margin: 8 }}
                    placeholder="Nội dung..."
                    fullWidth
                    margin="normal"
                    onChange = {handleChangePhanHoi}
                />
                <div className={styles.button}>
                    <Button variant="contained" color="primary" onClick={handleGuiPH}>
                        GỬI PHẢN HỒI
                    </Button>
                </div>
                </Grid>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={6} sm={6}>
                <h1 className={styles.title}>
                    LỊCH SỬ CÁC FEEDBACK ĐÃ GỬI
                </h1>
                <br></br>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left"><b>Username</b></TableCell>
                                <TableCell align="left"><b>Tên khách hàng</b></TableCell>
                                <TableCell align="left"><b>Thời gian</b></TableCell>
                                <TableCell align="left"><b>Feedback</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            PhanHoiList && PhanHoiList.length > 0 ?
                            PhanHoiList.map((row) => (
                            <TableRow key = {row.ID}>
                                <TableCell align="left">{row.username}</TableCell>
                                <TableCell align="left">{row.tenkh}</TableCell>
                                <TableCell align="left">{row.thoi_gian}</TableCell>
                                <TableCell align="left">{row.phan_hoi}</TableCell>
                            </TableRow>
                        )):'Loading...'}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}
