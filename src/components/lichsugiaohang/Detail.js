import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

Detail.propTypes = {};

function Detail(props) {
  const { information } = props;
  return (
    <>
      <Typography gutterBottom variant="h5" align="center">
        Thông tin đơn hàng
      </Typography>
      <Divider />
      <Typography variant="body2" color="secondary">
        Mã Đơn hàng: {information.maDh}
      </Typography>
      <Divider />
      <Typography variant="body2" color="primary">
        Ngày tạo: {information.ngayLap.split('T')[0]}
      </Typography>
      <Divider />
      <Typography variant="body2" color="primary">
        Ngày giao: {information.thoiGianGiao.split('T')[0]}
      </Typography>
      <Divider />
      <Typography variant="body2" color="primary">
        Hình thức thanh toán: {information.htThanhToan}
      </Typography>
    </>
  );
}

export default Detail;
