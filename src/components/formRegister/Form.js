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
			tenNcc: data.get('tenNcc'),
			giayPhepKinhDoanh: data.get('giayPhepKinhDoanh'),
			sdt: data.get('sdt'),
			diaChi: data.get('diaChi'),
			email: data.get('email'),
			soTaiKhoanNganHang: data.get('soTaiKhoanNganHang'),
  
		  }

		handleAddNew(newNcc)
	  };

	return (
		<Container>
          <Box component="form"  onSubmit={handleSubmit}  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="tenNcc"
                  required
                  fullWidth
                  id="tenNcc"
                  label="Tên cửa hàng"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="giayPhepKinhDoanh"
                  label="Mã giấy phép kinh doanh"
                  name="giayPhepKinhDoanh"
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="sdt"
                  label="Số điện thoại"
                  id="sdt"
                />
              </Grid>
			  <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="diaChi"
                  label="Địa chỉ cửa hàng"
                  id="diaChi"
                />
              </Grid>
			  <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="soTaiKhoanNganHang"
                  label="Số tài khoản ngân hàng"
                  id="soTaiKhoanNganHang"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Đồng ý đăng kí cung cấp hàng hóa"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
			  color='primary'
            >
              Đăng kí
            </Button>
          </Box>
		</Container>
	);
}

export default Form;