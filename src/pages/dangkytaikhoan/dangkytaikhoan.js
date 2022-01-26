import React, {useState} from 'react';
import { Box, Checkbox, Container, FormControlLabel, Link, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Head from 'next/head';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

// function handleChange(event e) {

// } 





function Form() {
  const [startDate, setStartDate] = useState(new Date());
  const [datatk, setdatatk] = useState({
    tenKH: "",
    cmnd: "",
    sdt: "",
    diaChi: "",
    email: "",
    ngaySinh: startDate,
    taiKhoan: "7",
    maLoaiKH: "1" });
	// const {handleAddNew} = props;
  console.log('=============',datatk)
  const handleChangeName= (e)=>{
    setdatatk({...datatk,tenKH: e.target.value})
  }

  const handleChangeEmail = (e)=>{
    setdatatk({...datatk,email: e.target.value})
  }

  const handleChangeCMND = (e) =>{
    setdatatk({...datatk, cmnd: e.target.value})
  }

  const handleChangeSDT = (e)=>{
    setdatatk({...datatk,sdt: e.target.value})
  }

  const handleChangeAdress = (e) =>{
    setdatatk({...datatk, diaChi: e.target.value})
  }


	const handleSubmit = (event) => {
    axios
	.post('http://localhost:8080/api/khachhang' ,datatk)
	.then((res) => {
	  alert('register success')
	})
	.catch((err) => console.log(err));
	  };


	return (
		<Container>
        	<Head>
                <title>Đăng ký tài khoản</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 style={{ 'text-align': 'center', 'padding-top': '20' }}>Đăng kí tài khoản</h1>
           <div noValidate    sx={{ mt: 3 }}>
          {/* <Box component="form" noValidate    sx={{ mt: 3 }}> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="tenKH"
                  required
                  fullWidth
                  id="tenKH"
                  label="Họ tên"
                  autoFocus
                  onChange = {handleChangeName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Ngày sinh</label>
                <DatePicker 
                selected={startDate} 
                
                 onChange={date => setStartDate(date)}
                  ></DatePicker>
              
            </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="CMND"
                  label="CMND/CCCD"
                  name="CMND"
                  onChange = {handleChangeCMND}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Địa chỉ Email"
                  name="email"
                  autoComplete="email"
                  onChange = {handleChangeEmail}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="sdt"
                  label="Số điện thoại"
                  id="sdt"
                  onChange = {handleChangeSDT}
                />
              </Grid>
			  <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="diaChi"
                  label="Địa chỉ"
                  id="diaChi"
                  onChange = {handleChangeAdress}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Đồng ý đăng kí tài khoản"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
			        color='primary'
              onClick = {handleSubmit}
              
            >
              Đăng kí
            </Button>
          {/* </Box> */}
          </div>
		</Container>
	);
}

export default Form;