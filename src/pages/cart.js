import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Button, Container, Input, TextField } from '@material-ui/core';

export default function Contact(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(props.data);
  const [total, setTotal] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const removeFromCart = (id) => {
    const filter = data.filter((item) => item.id != id);
    axios
      .delete(`http://localhost:8080/api/giohangs/1/items/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setData(filter);
  };

  useEffect(() => {
    const total = data.reduce((sum, product) => {
      sum += product.quantity * product.price;
      return sum;
    }, 0);
    console.log(total);
    setTotal(total);
  }, [removeFromCart]);

  return (
    <div className="Contact">
      <Head>
        <title>carts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1 style={{ 'text-align': 'center', 'padding-top': '20' }}>Giỏ hàng</h1>
      <Container>
        <TableContainer component={Paper}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Mã</b>
                </TableCell>
                <TableCell align="left">
                  <b>Tên sản phẩm</b>
                </TableCell>
                <TableCell align="left">
                  <b>Nhà sản xuất</b>
                </TableCell>
                <TableCell align="left">
                  <b>Số lượng</b>
                </TableCell>
                <TableCell align="left">
                  <b>Giá</b>
                </TableCell>
                <TableCell align="left">
                  <b>Tổng giá</b>
                </TableCell>
                <TableCell align="left">
                  <b>Hủy</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.producer}</TableCell>
                  <TableCell align="left">
                    <TableCell align="left">{row.quantity}</TableCell>
                  </TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.price * row.quantity}</TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => removeFromCart(row.id)}
                      variant="contained"
                    >
                      Hủy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div className="m-5">Subtotal: {total} vnđ</div>
        <br />
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8080/api/giohangs/1/items`);
  const results = await res.json();
  const data = [];
  if (!data) {
    return {
      notFound: true,
    };
  } else {
    results.forEach((item) => {
      const newItem = {};
      newItem.id = item.maSpGioHang;
      newItem.quantity = item.soLuong;
      newItem.producer = item.spncc.nsx;
      newItem.name = item.spncc.chitietsp.tenSp;
      newItem.price = item.spncc.gia;
      data.push(newItem);
    });
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}
