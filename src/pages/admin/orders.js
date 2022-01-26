import styles from "../../styles/admin/AdminOrders.module.css";
import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

export default function AdminOrders(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/api/donHangs")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="AdminOrders">
      <Head>
        <title>Your Orders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1 style={{ "text-align": "center", "padding-top": "20" }}>
        LIST ALL ORDERS
      </h1>
      <Container style={{ "padding-right": "100px", "padding-left": "100px" }}>
        <TableContainer component={Paper}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Mã Đơn hàng</b>
                </TableCell>
                <TableCell align="left">
                  <b>Ngày lập</b>
                </TableCell>
                <TableCell align="left">
                  <b>Tổng tiền</b>
                </TableCell>
                <TableCell align="left">
                  <b>Trạng thái</b>
                </TableCell>
                <TableCell align="left">
                  <b>Hoa Hồng</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.maDH}
                  </TableCell>
                  <TableCell align="left">{row.ngayLap}</TableCell>
                  <TableCell align="left">{row.tongTien}</TableCell>
                  <TableCell align="left">{row.trangThai}</TableCell>
                  <TableCell align="left">{row.tongTien * 0.05}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
