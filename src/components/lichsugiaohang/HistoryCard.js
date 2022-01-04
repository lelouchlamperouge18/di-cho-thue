import React from 'react';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

HistoryCard.propTypes = {
  detail: PropTypes.object,
};

HistoryCard.defaultProps = {
  posts: {},
};

function HistoryCard(props) {
  const { detail } = props;
  const date = detail.thoiGianGiao.split('T')[0];
  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: 50 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mã đơn hàng: {detail.maDh}
          </Typography>
          <Typography variant="body2" color="secondary">
            Ngày giao hàng: {date}
          </Typography>
          <Typography variant="body2" color="primary">
            Người giao hàng: {detail.shipper.ten}
          </Typography>
          <Typography variant="body2" color="primary">
            Khách hàng: {detail.maKh.tenKh}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/donhangs/${detail.maDh}`}>
            <Button size="small" variant="contained">
              Xem chi tiết ➜
            </Button>
          </Link>
        </CardActions>
      </Card>
      <br />
    </>
  );
}

export default HistoryCard;
