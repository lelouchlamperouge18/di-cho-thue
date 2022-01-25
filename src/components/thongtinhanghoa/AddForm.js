import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Box, Container, TextField, DatePicker, Label, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';


AddForm.propTypes = {
	
};

function AddForm(props) {
	const { handleAddNew } = props;
	const [tensanpham, setTensanpham] = useState('')
	const [tenncc, setTenncc] = useState('Bách hóa xanh Q,1')
	const [tennsx, setTennsx] = useState('')
	const [soluong, setSoluong] = useState(0)
	const [hsd, setHsd] = useState('')
	const [gia, setGia] = useState(0)
	const [loai, setLoai] = useState('Lương thực')
	const [donvi, setDonvi] = useState('Kg')

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console

		const newSp = {
			tensanpham: data.get('tensanpham'),
			tenncc: data.get('tenncc'),
			tennsx: data.get('tennsx'),
			loai: data.get('loai'),
			soluong: data.get('soluong'),
			hsd: data.get('hsd'),
			dvTinh: data.get('dvTinh'),
			gia: data.get('gia'),
		  }
		setEmpty()
		handleAddNew(newSp)
		
	  };

	  function setEmpty() {
		setTensanpham('')
		setTennsx('')
		setTenncc('Bách hóa xanh Q,1')
		setLoai('Lương thực')
		setSoluong(0)
		setGia(0)
		setHsd('')
		setDonvi('Kg')
	  }

	  const handleLoaiChange = (event) => {
		setLoai(event.target.value)
	  }
	  const handleDvChange = (event) => {
		setDonvi(event.target.value)
	  }

	  const handleTensp = (event) => {
		setTensanpham(event.target.value)
	  }
	  const handleTenncc = (event) => {
		setTenncc(event.target.value)
	  }
	const handleTennsx = (event) => {
		setTennsx(event.target.value)
	  }
	const handleSoluong = (event) => {
		setSoluong(event.target.value)
	  }
	const handleHsd = (event) => {
		setHsd(event.target.value)
	  }
	  const handleGia = (event) => {
		setGia(event.target.value)
	  }

	return (
		<Container>
          <Box component="form"  onSubmit={handleSubmit}  style={{ 'margin-top': '2rem' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
					autoComplete="given-name"
                  name="tensanpham"
				  value={tensanpham}
				  onChange={handleTensp}
                  required
                  fullWidth
                  id="tensanpham"
                  label="Tên sản phẩm"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
				  value={tenncc}
				  onChange={handleTenncc}
                  id="tenncc"
                  label="Tên cửa hàng"
                  name="tenncc"
                />
              </Grid>
			  <Grid item xs={12} sm={4}>
			  <FormControl fullWidth>
				<InputLabel id="select-label">Loại</InputLabel>
				<Select
				labelId="select-label"
				id='loai'
				name='loai'
				value={loai}
				onChange={handleLoaiChange}
				>
					<MenuItem value={'Lương thực'}>Lương thực</MenuItem>
					<MenuItem value={'Rau xanh'}>Rau xanh</MenuItem>
					<MenuItem value={'Đồ dùng thiết yêu'}>Đồ dùng thiết yêu</MenuItem>
				</Select>
			  </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
				  value={tennsx}
				  onChange={handleTennsx}
                  id="tennsx"
                  label="Tên nhà sản xuất"
                  name="tennsx"
                />
              </Grid>
			  <Grid item xs={4}>
			  <FormControl fullWidth>
				<InputLabel id="select-dv">Đơn vị tính</InputLabel>
				<Select
				labelId="select-dv"
				id='dvTinh'
				name='dvTinh'
				value={donvi}
				onChange={handleDvChange}
				>
					<MenuItem value={'Kg'}>Kg</MenuItem>
					<MenuItem value={'Bao'}>Bao</MenuItem>
					<MenuItem value={'Thùng'}>Thùng</MenuItem>
					<MenuItem value={'Chai'}>Chai</MenuItem>
				</Select>
			  </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
				  type="number"
                  name="gia"
				  value={gia}
				  onChange={handleGia}
                  label="Giá trên đơn vị tính"
                  id="gia"
                />
              </Grid>
			  <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
				  type='number'
                  name="soluong"
				  value={soluong}
				  onChange={handleSoluong}
                  label="Số lượng cung cấp"
                  id="soluong"
                />
              </Grid>
				<Grid item xs={2}>
					<label>Hạn sử dụng</label>
                <TextField
                  required
                  fullWidth
				  value={hsd}
				  onChange={handleHsd}
				  type='date'
                  name="hsd"
                  id="hsd"
                />
              </Grid>
            </Grid>
			<br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
			  color='primary'
            >
              Thêm
            </Button>
          </Box>
		</Container>
	);
}

export default AddForm;