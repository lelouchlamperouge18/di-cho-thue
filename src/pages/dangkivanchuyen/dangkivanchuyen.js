import React, {useState} from 'react';
import Head from 'next/head';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/formDKVC/DKVC';
import axios from 'axios';

dangkivanchuyen.propTypes = {
	
};

function dangkivanchuyen() {
const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (newNcc) => {
	axios
	.post('http://localhost:8080/api/dkvc' ,newNcc)
	.then((res) => {
	  alert('register success')
	})
	.catch((err) => console.log(err));
  } 
	return (
		<div className='dangkivanchuyen'>
		<Head>
        <title>Đăng kí vận chuyển</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1 style={{ 'text-align': 'center', 'padding-top': '20' }}>Đăng kí vận chuyển</h1>
		<Form handleAddNew={handleSubmit} />
		</div>
	);
}

export default dangkivanchuyen;
