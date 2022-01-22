import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import {FaBars} from 'react-icons/fa'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { signIn, signOut, useSession } from 'next-auth/client';

export default function Navbar({ toggle }) {
    const [session, loading] = useSession();
    const [anchorEl_KH, setAnchorEl_KH] = React.useState(null);
    const [anchorEl_NCC, setAnchorEl_NCC] = React.useState(null);
    const [anchorEl_DVVC, setAnchorEl_DVVC] = React.useState(null);
    const [anchorEl_Shipper, setAnchorEl_Shipper] = React.useState(null);

  const handleClick_KH = (event) => {
    setAnchorEl_KH(event.currentTarget);
  };

  const handleClose_KH = () => {
    setAnchorEl_KH(null);
  };
  
  const handleClick_NCC = (event) => {
    setAnchorEl_NCC(event.currentTarget);
  };

  const handleClose_NCC = () => {
    setAnchorEl_NCC(null);
  };

  const handleClick_DVVC = (event) => {
    setAnchorEl_DVVC(event.currentTarget);
  };

  const handleClose_DVVC = () => {
    setAnchorEl_DVVC(null);
  };
  
  const handleClick_Shipper= (event) => {
    setAnchorEl_Shipper(event.currentTarget);
  };

  const handleClose_Shipper = () => {
    setAnchorEl_Shipper(null);
  };

    return (
        <nav className={styles.myNavBar}>
            <div className={styles.myNavbarContainer}> 
                <Link href="/">
                    <a className={styles.myNavbarLogo}>ĐI CHỢ THUÊ APP R07</a>
                </Link>
                <div className={styles.mobileIcon} onClick={toggle}>
                    <FaBars />
                </div>
                <div className={styles.navMenu}>
                    <ul>
                        <li id="tab_KhachHang">
                            <Link href="">
                                <a className={styles.navLink} aria-controls="khachhang-menu" aria-haspopup="true" onClick={handleClick_KH}>
                                    Khách hàng
                                </a>
                            </Link>
                            <Menu
                                id="khachhang-menu"
                                anchorEl={anchorEl_KH}
                                keepMounted
                                open={Boolean(anchorEl_KH)}
                                onClose={handleClose_KH}
                            >
                                <MenuItem onClick={handleClose_KH}><Link href=""><a>Đăng ký tài khoản</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_KH}><Link href="/cart"><a>Giỏ hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_KH}><Link href="/user/orders"><a>Đơn hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_KH}><Link href="/theodoitrangthaidonhang"><a>Theo dõi đơn hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_KH}><Link href="/lichsumuahang"><a>Lịch sử mua hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_KH}><Link href=""><a>Phản hồi khách hàng</a></Link></MenuItem>
                                
                            </Menu>
                        </li>
                        <li id="tab_NCC">
                            <Link href="">
                                <a className={styles.navLink} aria-controls="NCC-menu" aria-haspopup="true" onClick={handleClick_NCC}>
                                    Nhà cung cấp
                                </a>
                            </Link>
                            <Menu
                                id="NCC-menu"
                                anchorEl={anchorEl_NCC}
                                keepMounted
                                open={Boolean(anchorEl_NCC)}
                                onClose={handleClose_NCC}
                            >
                                <MenuItem onClick={handleClose_NCC}><Link href=""><a>Đăng ký bán hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_NCC}><Link href=""><a>Đăng thông tin bán hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_NCC}><Link href="/thongke/doanhthu/nhacungcap"><a>Thống kê thu nhập NCC</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_NCC}><Link href="/feedback/nhacungcap"><a>Phản hồi NCC</a></Link></MenuItem>
                            </Menu>
                        </li>
                        <li id="tab_DVVC">
                            <Link href="">
                                <a className={styles.navLink} aria-controls="DVVC-menu" aria-haspopup="true" onClick={handleClick_DVVC}>
                                    Đơn vị vận chuyển
                                </a>
                            </Link>
                            <Menu
                                id="DVVC-menu"
                                anchorEl={anchorEl_DVVC}
                                keepMounted
                                open={Boolean(anchorEl_DVVC)}
                                onClose={handleClose_DVVC}
                            >
                                <MenuItem onClick={handleClose_DVVC}><Link href=""><a>Đăng ký vận chuyển</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_DVVC}><Link href="/list/shipper"><a>Kiểm tra thông tin người giao hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_DVVC}><Link href="/thongke/doanhthu/donvivanchuyen"><a>Thống kê thu nhập DVVC</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_DVVC}><Link href=""><a>Lịch sử giao hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_DVVC}><Link href=""><a>Phản hồi DVVC</a></Link></MenuItem>
                            </Menu>
                        </li>
                        <li id="tab_DVVC">
                            <Link href="">
                                <a className={styles.navLink} aria-controls="shipper-menu" aria-haspopup="true" onClick={handleClick_Shipper}>
                                    Shipper
                                </a>
                            </Link>
                            <Menu
                                id="shipper-menu"
                                anchorEl={anchorEl_Shipper}
                                keepMounted
                                open={Boolean(anchorEl_Shipper)}
                                onClose={handleClose_Shipper}   
                            >
                                <MenuItem onClick={handleClose_Shipper}><Link href=""><a>Tiếp nhận giao hàng</a></Link></MenuItem>
                                <MenuItem onClick={handleClose_Shipper}><Link href=""><a>Xác nhận giao hàng</a></Link></MenuItem>
                            </Menu>
                        </li>
                        <li>
                            <Link href="/about"><a className={styles.navLink}>Thông tin</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a className={styles.navLink}>Liên hệ</a></Link>
                        </li>
                        <li>
                            <Link href="/sign-in"><a className={styles.navLink}>Sign In</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}