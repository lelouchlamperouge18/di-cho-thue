import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Xetduyet.module.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function XetDuyet() {
    return (
        <div className={styles.XetDuyet}>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://cdn.baogiaothong.vn/upload/images/2021-3/article_img/2021-07-23/img-bgt-2021-2-1627049627-width1280height720.jpeg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cửa hàng
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Kiểm tra thông tin cửa hàng
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link href="/list/store">XEM NGAY ➜</Link>
                    </Button>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="http://ses-tech.vn/wp-content/uploads/2021/05/scan-la-gi-cong-dung-scan-gi-lam-sao-de-scan-giay-to-duoc-7.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Hồ sơ, giấy tờ
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Quản lý hồ sơ, giấy tờ cửa hàng
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link href="/admin/store">XEM NGAY ➜</Link>
                    </Button>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://hoadm.net/wp-content/uploads/2020/04/HTML-FORM.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Duyệt đăng ký bán hàng
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Duyệt đăng ký bán hàng của cửa hàng
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                        <Link href="/dangkibanhang/xetduyetdkbh">XEM NGAY ➜</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}