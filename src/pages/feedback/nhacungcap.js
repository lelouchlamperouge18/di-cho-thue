import styles from '../../styles/feedback/Nhacungcap.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Container } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
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

export default function Contact(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [data, setData] = useState([])
    useEffect(()=>
    {
        fetch('http://localhost:8080/api/phanhoincc')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log(error));
    },[])

console.log(data);
    return (
        <div className="FeedbackNCC">
            <Head>
                <title>Feedback NCC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
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
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <div className={styles.button}>
                    <Button variant="contained" color="primary">
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
                                <TableCell align="left"><b>Thời gian</b></TableCell>
                                <TableCell align="left"><b>Feedback</b></TableCell>
                                <TableCell align="left"><b>Trạng thái</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((row) => (
                            <TableRow>
                                <TableCell align="left">{row.thoiGian}</TableCell>
                                <TableCell align="left">{row.noiDung}</TableCell>
                                <TableCell align="left">{row.trangThai}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

