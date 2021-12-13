import styles from '../styles/TheoDoiTrangThaiDonHang.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import React, {useState, useEffect} from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { Button, Container} from '@material-ui/core';



export default function MatHangThietYeu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    const [value, setValue] = React.useState(0);

    return (
        <div className="TheoDoiTrangThaiDonHang">
            <Head>
                <title>Theo dõi trạng thái đơn hàng</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 class={styles.title}>
                THEO DÕI TRẠNG THÁI ĐƠN HÀNG
            </h1>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction label="ĐÓNG GÓI" icon={<img className={styles.pic} src="https://cdn-icons.flaticon.com/png/128/1112/premium/1112153.png?token=exp=1639361046~hmac=890de4289e993c336288a30f4e42c011"/>} />
                <BottomNavigationAction label="ĐANG GIAO" icon={<img className={styles.pic} src="https://cdn-icons.flaticon.com/png/128/1438/premium/1438980.png?token=exp=1639361113~hmac=087bb7d1a5f44cb156d60960d69b49f4" />} />
                <BottomNavigationAction label="ĐÃ GIAO" icon={<img className={styles.pic} src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png" />} />
                <BottomNavigationAction label="ĐỔI TRẢ" icon={<img className={styles.pic} src="https://cdn-icons-png.flaticon.com/128/3338/3338693.png" />} />
            </BottomNavigation>
            <br/>
            <br/>
            <div className={styles.groupcard}>
                <Card sx={{ maxWidth: 345 }} className={styles.root}>
                    <CardActionArea>
                        <CardMedia className={styles.media}
                            component="img"
                            height="140"
                            image="https://www.victoriavn.com/images/Newsletter/thumbnail_12.jpg"
                            alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Ngày lập đơn
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tổng tiền:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Trạng thái:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Hình thức thanh toán:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Phí vận chuyển:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shipper:
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">Xem chi tiết </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className={styles.root}>
                    <CardActionArea>
                        <CardMedia className={styles.media}
                            component="img"
                            height="140"
                            image="https://www.victoriavn.com/images/Newsletter/thumbnail_12.jpg"
                            alt="green iguana"
                            />
                            <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Ngày lập đơn
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tổng tiền:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Trạng thái:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Hình thức thanh toán:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Phí vận chuyển:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shipper:
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">Xem chi tiết </Button>
                    </CardActions>
                </Card>
            </div>
            
            </Container>
        </div>
    )
}
