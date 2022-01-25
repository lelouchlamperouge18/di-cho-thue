import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import styles from '../../styles/Box.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/formRegister/Form';
import { Modal, Box} from '@material-ui/core'
import axios from 'axios';


dangkibanhang.propTypes = {
	
};

function dangkibanhang() {
  const [success, setSuccess] = useState(false)


  const handleSubmit = (newNcc) => {
	  console.log(newNcc);
	axios
	.post('https://localhost:44357/api/nhacungcap' ,newNcc)
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
        <title>dangkibanhang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Navbar  />
      <h1 style={{ 'text-align': 'center', 'padding-top': '20' }}>Đăng kí bán hàng</h1>
	  <Modal open={success} onClose={handleClose}  >
	  <Box className={styles.box}>
          <h2 id="parent-modal-title" style={{ 'text-align': 'center'}}>Đăng kí thành công</h2>
		  <hr />
          <p id="parent-modal-description">
            Bạn đã đăng kí thành công trong cửa hàng trong hệ thông, 
			giờ bạn có thể đăng thông tin hàng hóa của mình trong hệ thống bằng cách click vào <a href='/nhacungcap/dangthongtinhanghoa'><span style={{'color': 'red'}}>đây</span></a>!
          </p>
        </Box>
	  </Modal>
		<Form handleAddNew={handleSubmit} />
		</div>
	);
}

export default dangkibanhang;