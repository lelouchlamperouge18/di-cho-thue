import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ThongKe.module.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ThongKe() {
    return (
        <div className={styles.ThongKe}>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://sohanews.sohacdn.com/zoom/480_300/160588918557773824/2020/7/8/photo1594170501213-1594170501521682488180.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thống kê (7)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Thống kê các mặt hàng thiết yếu
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link href="/thongke/mathangthietyeu">XEM NGAY ➜</Link>
                    </Button>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="https://f.thuongtruong.com.vn/IMAGES/2019/11/201911121113SA3810632b-e20c-44c9-bce1-89b7f9940a1d.jpeg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thống kê (8)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Thống kê nhu cầu thực phẩm cùng kì
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link href="/thongke/nhucauthucphamcungky">XEM NGAY ➜</Link>
                    </Button>
                </CardActions>
            </Card>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia
                    className={styles.media}
                    image="http://www.baodongnai.com.vn/dataimages/202108/original/images2394760_z2710661252827_f20d1ccfcf4c8b0909ce33edf7d70129.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thống kê (6)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Thống kê khách hàng, shipper, cửa hàng ở các vùng đỏ vàng xanh
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        XEM NGAY ➜
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}