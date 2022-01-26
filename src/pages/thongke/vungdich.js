import styles from '../../styles/thongke/Vungdich.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Container } from '@material-ui/core'

export default function Vungdich(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggle = () => {
        setIsOpen(!isOpen)      
    }

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return (
    <div className="Vungdich">
        <Head>
            <title>Thống kê theo vùng dịch</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />

        <h1 class={styles.title}>
            THỐNG KÊ THEO VÙNG DỊCH
        </h1>
        <Container style={{"text-align":"center"}}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                XEM KẾT QUẢ THỐNG KÊ
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Kết quả thống kê tính đến {time}&nbsp;{date}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    🔴 Số khách hàng ở vùng đỏ là: 3
                    <br></br>
                    ⚠️ Số khách hàng ở vùng vàng là: 1
                    <br></br>
                    💚 Số khách hàng ở vùng xanh là: 1
                    <br></br>
                    ---------------------------------
                    <br></br>
                    🔴 Số cửa hàng ở vùng đỏ là: 2
                    <br></br>
                    ⚠️ Số cửa hàng ở vùng vàng là: 1
                    <br></br>
                    💚 Số cửa hàng ở vùng xanh là: 1
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            <br></br>
            <img 
                src="http://www.baodongnai.com.vn/dataimages/202108/original/images2394760_z2710661252827_f20d1ccfcf4c8b0909ce33edf7d70129.jpg" 
                alt="vungdich"
                width="500"
                height="auto"
                style={{"padding-top":"20px"}}
            >
            </img>
        </Container>
    </div>
    )
}