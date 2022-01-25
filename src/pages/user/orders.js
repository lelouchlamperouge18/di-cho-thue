import styles from "../../styles/user/UserOrders.module.css";
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

export default function UserOrders(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/donHang/1")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="UserOrders">
      <Head>
        <title>Your Orders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1 style={{ "text-align": "center", "padding-top": "20" }}>
        YOUR ORDERS
      </h1>
      <div style={{ "text-align": "center" }}>
        <p>- Đối với HTTT tiền mặt: Không thanh toán qua app</p>
        <p>- Đã thanh toán và không được Hủy đơn khi đã giao xong đơn hàng</p>
      </div>
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
                  <b>Hình thức thanh toán</b>
                </TableCell>
                <TableCell align="left">
                  <b>Actions (17&18)</b>
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
                  <TableCell align="left">{row.hinhThucThanhToan}</TableCell>
                  <TableCell align="left">
                    {row.hinhThucThanhToan === "Tiền mặt" ||
                    row.trangThai === "Đã giao" ? (
                      <Button disabled variant="outlined" color="secondary">
                        Thanh toán
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        Thanh toán
                      </Button>
                    )}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {row.trangThai === "Đã giao" ? (
                      <Button disabled variant="contained" color="secondary">
                        Hủy đơn
                      </Button>
                    ) : (
                      <Button variant="contained" color="secondary">
                        Hủy đơn
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
