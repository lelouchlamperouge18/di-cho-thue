import React, { useEffect, useState } from 'react';
import queryString from 'querystring';
import { Container, Typography } from '@material-ui/core';
import HistoryCard from '../../components/lichsugiaohang/HistoryCard';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import styles from '../../styles/lichsugiaohang/lichsugiaohang.module.css';

function LichSuGiaoHang(props) {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function fetchDataList() {
      try {
        const requestUrl = `http://localhost:8080/api/donhangs?trangthai=đã giao`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        setData(responseJSON);
      } catch (error) {
        console.log('failed');
      }
    }
    fetchDataList();
  }, []);

  console.log(data);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container>
        <Typography variant="h3" gutterBottom align="center">
          Lịch sử giao hàng
        </Typography>
        <div className={styles.container}>
          {data &&
            data.map((item) => <HistoryCard key={item.maDh} detail={item} />)}
        </div>
      </Container>
    </>
  );
}

export default LichSuGiaoHang;
