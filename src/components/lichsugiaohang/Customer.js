import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

Customer.propTypes = {};

function Customer(props) {
  const { information } = props;
  return (
    <>
      <Typography gutterBottom variant="h5" align="center">
        Thông tin người nhận hàng
      </Typography>
      <Divider />
      <Typography variant="body2" color="secondary">
        Tên: {information.tenKh}
      </Typography>
      <Divider />
      <Typography variant="body2" color="primary">
        Số điện thoại: {information.sdt}
      </Typography>
      <Divider />
      <Typography variant="body2" color="primary">
        Email: {information.email}
      </Typography>
    </>
  );
}

export default Customer;
