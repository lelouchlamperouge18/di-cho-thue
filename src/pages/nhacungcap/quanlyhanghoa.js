import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import styles from '../../styles/Box.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/formRegister/Form';
import { Modal, Box} from '@material-ui/core'
import ItemManager from '../../components/quanlyhanghoa/ItemManager';



function quanlyhanghoa() {
	return (
		<div className='quanlyhanghoa'>
		<Head>
        <title>quanlyhanghoa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Navbar  />
      <h1 style={{ 'text-align': 'center', 'padding-top': '20' }}>Quản lý hàng hóa</h1>
	  <ItemManager />
		</div>
	);
}

export default quanlyhanghoa;