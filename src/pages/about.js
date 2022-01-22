import React, {useState} from 'react'
import styles from '../styles/About.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Container } from '@material-ui/core'

export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="About">
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Container>
                <h1 className={styles.About__title}>
                    <code>THÔNG TIN</code><br/>
                </h1>
                <h4 className={styles.DetailTitle}>
                    <code>DICHOTHUE-R07 web-app is a site for people who want to rent someone go to market for theirs.</code><br/>
                    <code>Latest update: January 3rd, 2022.</code>
                </h4>
                <div className={styles.About__info}>
                    <br></br>
                        <h1 className={styles.Coder__title}>
                        <code>Nhóm phát triển</code><br/>
                        </h1>
                    <br></br>
                </div>
                <br></br>
            </Container>
                    <div className={styles.About}>
                        <Card className={styles.root}>
                            <CardActionArea>
                                <CardMedia
                                className={styles.media}
                                image="https://img.favpng.com/8/15/7/browser-icon-code-icon-coding-icon-png-favpng-cVSe0QkDXJifduhFh3iaAsqjn.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    18120227
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Phạm Văn Minh Phương
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.root}>
                            <CardActionArea>
                                <CardMedia
                                className={styles.media}
                                image="https://img.favpng.com/8/15/7/browser-icon-code-icon-coding-icon-png-favpng-cVSe0QkDXJifduhFh3iaAsqjn.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    18120281
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    KSor Âu
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.root}>
                            <CardActionArea>
                                <CardMedia
                                className={styles.media}
                                image="https://img.favpng.com/8/15/7/browser-icon-code-icon-coding-icon-png-favpng-cVSe0QkDXJifduhFh3iaAsqjn.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    18120534
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Hoàng Công Sơn
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.root}>
                            <CardActionArea>
                                <CardMedia
                                className={styles.media}
                                image="https://img.favpng.com/8/15/7/browser-icon-code-icon-coding-icon-png-favpng-cVSe0QkDXJifduhFh3iaAsqjn.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    18120553
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Nguyễn Lê Ngọc Tần
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.root}>
                            <CardActionArea>
                                <CardMedia
                                className={styles.media}
                                image="https://img.favpng.com/8/15/7/browser-icon-code-icon-coding-icon-png-favpng-cVSe0QkDXJifduhFh3iaAsqjn.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    18120560
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Lê Hữu Thanh
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.root}>
                            <CardActionArea>
                                <CardMedia
                                className={styles.media}
                                image="https://img.favpng.com/8/15/7/browser-icon-code-icon-coding-icon-png-favpng-cVSe0QkDXJifduhFh3iaAsqjn.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    18120570
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Nguyễn Thanh Thi
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
        </div>
    )
}