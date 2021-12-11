import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './KiemTraThongTin.module.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function KiemTraThongTin() {
    return (
        <div className={styles.KiemTraThongTin}>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://i0.wp.com/blog.kamereo.vn/wp-content/uploads/2019/05/freepik_featured_delivery.jpg?resize=930%2C620&ssl=1"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Kiểm tra thông tin (33)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Kiểm tra thông tin người giao hàng
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href="/list/shipper">
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
                    image="https://cosp.com.vn/uploaded/D%E1%BB%B1%20%C3%81n/phanh/shop%20tr%C3%A1i%20c%C3%A2y%2C%20rau%20s%E1%BA%A1ch/thiet-ke-cuhang-thuc-pham-sach-anh-vu.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Kiểm tra thông tin (34)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Kiểm tra thông tin cửa hàng
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href="/list/store">
                    <Button size="small" color="primary">
                        XEM NGAY ➜
                    </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}