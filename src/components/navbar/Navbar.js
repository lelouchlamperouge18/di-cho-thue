import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import {FaBars} from 'react-icons/fa'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { signIn, signOut, useSession } from 'next-auth/client';

export default function Navbar({ toggle }) {
    const [session, loading] = useSession();
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                        <li>
                            <Link href="/feedback/nhacungcap"><a className={styles.navLink}>Feedback NCC</a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a className={styles.navLink}>About</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a className={styles.navLink}>Contact</a></Link>
                        </li>
                        <li>
                            <Link href="/orders"><a className={styles.navLink}>Orders</a></Link>
                        </li>
                        <li>
                            <Link href="/sign-in"><a className={styles.navLink}>Sign In</a></Link>
                        </li>
                        <li>
                            <Link href="">
                                <a className={styles.navLink} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    Multi-menu
                                </a>
                            </Link>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}><Link href="/sign-in"><a>SubMenu-1</a></Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link href="/sign-in"><a>SubMenu-2</a></Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link href="/sign-in"><a>SubMenu-3</a></Link></MenuItem>
                            </Menu>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}