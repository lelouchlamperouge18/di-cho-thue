import React, {useState} from 'react';
import Head from 'next/head';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Form from '../components/formRegister/Form';
import axios from 'axios';

dangkibanhang.propTypes = {
	
};

function dangkibanhang() {
const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (newNcc) => {
	axios
	.post('https://localhost:44357/api/nhacungcap' ,newNcc)
	.then((res) => {
	  alert('register success')
	})
	.catch((err) => console.log(err));
  } 
	return (
		<div className='dangkibanhang'>
		<Head>
        <title>dangkibanhang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1 style={{ 'text-align': 'center', 'padding-top': '20' }}>Đăng kí bán hàng</h1>
		<Form handleAddNew={handleSubmit} />
		</div>
	);
}

export default dangkibanhang;