import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import styles from '../../styles/Box.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Modal, Box} from '@material-ui/core'
import axios from 'axios';
import AddForm from '../../components/thongtinhanghoa/AddForm';


dangthongtinhanghoa.propTypes = {
	
};

function dangthongtinhanghoa() {
  const [success, setSuccess] = useState(false)



  const handleSubmit = (newSp) => {
	axios
	.post('https://localhost:44357/api/sanpham/ncc/1/add' ,newSp)
	.then((res) => {
	  setSuccess(true)
	})
	.catch((err) => console.log(err));
  } 

  const handleClose = () => {
	  setSuccess(false)
  }

  console.log(success);
	return (
		<div className='dangkibanhang'>
		<Head>
        <title>dang thong tin hang hoa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar  />
      <Navbar  />
      <h1 style={{ 'text-align': 'center', 'padding-top': '20' }}>Đăng thông tin hàng hóa</h1>
      <h2 style={{ 'margin-left': '50px', 'padding-top': '20' }}>Đăng một sản phẩm</h2>
	  <Modal open={success} onClose={handleClose}  >
	  <Box className={styles.box}>
          <h2 id="parent-modal-title" style={{ 'text-align': 'center'}}>Thêm sản phẩm thành công</h2>
		  <hr />
          <p id="parent-modal-description">
           Giờ sản phẩm của cửa hàng bạn đã được đăng lên trong hệ thống.
          </p>
        </Box>
	  </Modal>
		<AddForm handleAddNew={handleSubmit} />
		</div>
	);
}

export default dangthongtinhanghoa;