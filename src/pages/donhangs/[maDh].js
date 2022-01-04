import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import Shipper from '../../components/lichsugiaohang/Shipper';
import Typography from '@material-ui/core/Typography';
import Customer from '../../components/lichsugiaohang/Customer';
import Detail from '../../components/lichsugiaohang/Detail';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

History.propTypes = {};

function History({ postData }) {
  const { shipper, maKh } = postData;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container>
        <Typography gutterBottom variant="h3" align="center">
          Chi tiết đơn hàng
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs>
            <Shipper information={shipper} />
          </Grid>
          <Grid item xs={6}>
            <Customer information={maKh} />
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Detail information={postData} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:8080/api/donhangs');
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { maDh: post.maDh.toString() },
  }));

  console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const requestUrl = `http://localhost:8080/api/donhangs/${params.maDh}`;
  const response = await fetch(requestUrl);
  const data = await response.json();

  return {
    props: {
      postData: data,
    },
  };
}

export default History;
