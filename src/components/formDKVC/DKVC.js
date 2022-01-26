import React, {useState} from 'react';
import { Box, Checkbox, Container, FormControlLabel, Link, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Form(props) {
	const {handleAddNew} = props;

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console

		const newNcc = {
			TenDVVC: data.get('TenDVVC'),
			GiayPhepKinhDoanh: data.get('GiayPhepKinhDoanh'),
			SoTaiKhoanNganHang: data.get('SoTaiKhoanNganHang'),
			SDT: data.get('SDT'),
			DiaChi: data.get('DiaChi'),
			Email: data.get('Email'),
            PhiVanChuyen_KM: data.get('PhiVanChuyen_KM'),
            TaiKhoan: data.get('TaiKhoan'),
  
		  }

		handleAddNew(newNcc)
	  };

	return (
		<Container>
          <Box component="form" noValidate  onSubmit={handleSubmit}  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="TenDVVC"
                  required
                  fullWidth
                  id="TenDVVC"
                  label="Tên đơn vị vận chuyển"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="GiayPhepKinhDoanh"
                  label="Mã giấy phép kinh doanh"
                  name="GiayPhepKinhDoanh"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="SoTaiKhoanNganHang"
                  label="Số tài khoản ngân hàng"
                  id="SoTaiKhoanNganHang"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="SDT"
                  label="Số điện thoại"
                  id="SDT"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Địa chỉ Email"
                  name="Email"
                  autoComplete="Email"
                />
              </Grid>
			  <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="PhiVanChuyen_KM"
                  label="Phí vận chuyển (theo km)"
                  id="PhiVanChuyen_KM"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Tôi đồng ý với các điều khoản và điều kiện"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
			  color='Secondary'
            >
              Đăng kí
            </Button>
          </Box>
		</Container>
	);
}

export default Form;