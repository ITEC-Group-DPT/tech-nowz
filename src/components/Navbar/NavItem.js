import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './NavItem.style';

const NavItem = (props) => {
    const styles = useStyles();
    return (
        <div className={styles.navItem}>
            <Link to={props.href} className={styles.navLink}>
                {props.icon}
                {props.title}
            </Link>
        </div>
    )
}

export default NavItem
