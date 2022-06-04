import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { MusicIcon, SharpIcon } from '../../../assets/icons';
import DisCover from './DivCover';
import DivFooter from './DivFooter';
import DivSelect from './DivSelect';
import DivUser from './DivUser';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles)

function Sidebar() {

    const ref = useRef()

    useEffect(() => {
        localStorage.setItem('ref', ref.current.className)
    }, [ref])

    const data = [
        {
            content: 'genzlife',
            link: '/',
            icon: <SharpIcon />,
        },
        {
            content: 'tiktoksoiphim',
            link: '/',
            icon: <SharpIcon />,
        },
        {
            content: 'vinawoman',
            link: '/',
            icon: <SharpIcon />,
        },
        {
            content: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
            link: '/',
            icon: <MusicIcon />,
        },
        {
            content: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
            link: '/',
            icon: <MusicIcon />,
        },
        {
            content: 'Thiên Thần Tình Yêu - RICKY STAR',
            link: '/',
            icon: <MusicIcon />,
        },
        {
            content: '6ngay6dem',
            link: '/',
            icon: <SharpIcon />,
        },
        {
            content: 'streetdancevietnam',
            link: '/',
            icon: <SharpIcon />,
        },
        {
            content: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
            link: '/',
            icon: <MusicIcon />,
        },
        {
            content: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dung Hoàng Phạm',
            link: '/',
            icon: <MusicIcon />,
        },
    ]

    return <div className={cx('wrapper')} ref={ref}>
        <div className={cx('container')}>
            <DivUser />
            <DivSelect title='Suggested accounts' atb='See all' index='0' />
            <DivSelect title='Following accounts' atb='See more' index='1' />
            <DisCover data={data} />
            <div className={cx('sperate')}></div>
            <DivFooter />
        </div>
    </div>
}

export default Sidebar;