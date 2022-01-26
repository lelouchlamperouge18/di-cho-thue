import styles from '../../styles/quanlyhoso/QuanLyHoSo.module.css';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState, useEffect } from 'react';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import { Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default function HoSo(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
      };
    
    const [combobox_NhaCungCap, setcombobox_NhaCungCap] = useState([]);

    const [mancc, setMancc] = useState(0);

    const changeMaNCC = (newMancc) => {
        setMancc(newMancc);
    };

    const xetDuyetHoSo = (maHS_NCC) => {
        fetch('https://localhost:44357/api/HoSo/DuyetHoSo'+ maHS_NCC)
    };

    const [HoSoList, setHoSoList] = useState([]);

    //const [NCCList, setNCCList] = useState([])
    useEffect(() => {
        fetch('https://localhost:44357/api/NhaCungCap')
        .then(response => response.json())
        .then(result => setcombobox_NhaCungCap(result))
        .catch(error => console.log(error));
    },[])


    function ShowData()
    {
        fetch('https://localhost:44357/api/HoSo/' + mancc)
        .then(response => response.json())
        .then(result => setHoSoList(result))
        .catch(error => console.log(error));
    }

    return (
        <div className="HoSo">
            <Head>
                <title>Quản lý hồ sơ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <Container>
                <h1 class={styles.title}>QUẢN LÝ HỒ SƠ NHÀ CUNG CẤP</h1>
            
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        id="mancc-dropdown"
                        className={styles.select}
                        value={mancc}
                        onChange={(event) => changeMaNCC(event.target.value)}
                    >
                        <MenuItem value="0">
                        <em>Tất cả</em>
                        </MenuItem>
                        {combobox_NhaCungCap && combobox_NhaCungCap.length > 0
                        ? combobox_NhaCungCap.map((row) => (
                            <MenuItem value={row.MaNCC}>{row.TenNCC}</MenuItem>
                            ))
                        : 'Loading'}
                    </Select>
                    <FormHelperText>Chọn nhà cung cấp</FormHelperText>
                </FormControl>
                &emsp;&emsp;
                <Button variant="contained" onClick={ShowData} className={styles.Button}>
                    Xem hồ sơ
                </Button>
                <br/><br/>

                <Grid container spacing={2} className={styles.groupcard}>
                {
                HoSoList && HoSoList.length > 0 ?
                HoSoList
                .map((row)=>
                (
                    <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }} className={styles.root} >
                        <CardActionArea>
                            <CardMedia className={styles.media}
                                component="img"
                                height="auto"
                                image={row.AnhHS}
                                alt="green iguana"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Tên đối tác: {row.TenNCC}
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Ngày nhận hồ sơ: {row.NgayNhan}
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Trạng thái: {row.TrangThai}
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Ngày kiểm tra: {row.NgayKiemTra}
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onSubmit={xetDuyetHoSo(row.maHS_NCC)} >
                                Xét duyệt 
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                )) : 'Không có hồ sơ'
            }
            </Grid>


            </Container>
        </div>

    );
}
