import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DivUserItem.module.scss';

const cx = classNames.bind(styles)

function DivUserItem({ link, icon, icon1, content }) {

    const [act, setAct] = useState(false)

    function Active({ isActive }) {

        useEffect(() => {
            setAct(isActive)
        })

        return {
            color: isActive ? "rgba(254, 44, 85, 1)" : "",
        };
    }

    return (
        <NavLink style={Active} to={link} className={cx('wrapper')}>
            <div className={cx('link')} >
                {act ? icon1 : icon}
                <h2 className={cx('content')}>
                    {content}
                </h2>
            </div>
        </NavLink >
    );
}

export default DivUserItem;