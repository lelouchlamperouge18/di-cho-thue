import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './QuanLy.module.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function QuanLy() {
    return (
        <div className={styles.QuanLy}>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://cdn.vietnambiz.vn/2019/10/2/shutterstock365425265-860x9999-157000283775029168135.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Hàng hóa
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Quản lý hàng hóa trên hệ thống
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href="">
                    <Button size="small" color="primary">
                        XEM NGAY ➜
                    </Button>
                    </Link>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_780395.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Tài khoản
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Quản lý tài khoản người dùng
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href="">
                    <Button size="small" color="primary">
                        XEM NGAY ➜
                    </Button>
                    </Link>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://94now.com/media/nhan-vien-quan-ly-don-hang.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Đơn hàng
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Quản lý danh sách đơn hàng
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href="/admin/orders">
                    <Button size="small" color="primary">
                        <Link href="/admin/orders">XEM NGAY ➜</Link>
                    </Button>
                    </Link>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://www.pace.edu.vn/Uploads/ImageContent/2015/06/partner.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Đối tác
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Quản lý danh sách đối tác
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href="">
                    <Button size="small" color="primary">
                        XEM NGAY ➜
                    </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}