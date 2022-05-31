import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './DivFooter.module.scss';



const cx = classNames.bind(styles)

const dieukhoan = [
    {
        link: '/',
        title: 'About',
    },
    {
        link: '/',
        title: 'Newsroom',
    },
    {
        link: '/',
        title: 'Contact',
    },
    {
        link: '/',
        title: 'Careers',
    },
    {
        link: '/',
        title: 'ByteDance',
    },
]

const dieukhoan1 = [
    {
        link: '/',
        title: 'TikTok for Good',
    },
    {
        link: '/',
        title: 'Advertise',
    },
    {
        link: '/',
        title: 'Developers',
    },
    {
        link: '/',
        title: 'Transparency',
    },
    {
        link: '/',
        title: 'TikTok Rewards',
    },
]

const dieukhoan2 = [
    {
        link: '/',
        title: 'Help',
    },
    {
        link: '/',
        title: 'Safety',
    },
    {
        link: '/',
        title: 'Terms',
    },
    {
        link: '/',
        title: 'Privacy',
    },
    {
        link: '/',
        title: 'Creator Portal',
    },
    {
        link: '/',
        title: 'Community Guidelines',
    },
]

function DivFooter() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-item')}>
                {dieukhoan.map((props, index) => (
                    <Link key={index} className={cx('link-footer')} to={props.link}>{props.title}</Link>
                ))}
            </div>
            <div className={cx('footer-item')}>
                {dieukhoan1.map((props, index) => (
                    <Link key={index} className={cx('link-footer')} to={props.link}>{props.title}</Link>
                ))}
            </div>
            <div className={cx('footer-item')}>
                {dieukhoan2.map((props, index) => (
                    <Link key={index} className={cx('link-footer')} to={props.link}>{props.title}</Link>
                ))}
            </div>
            <span className={cx('span-title')}>© 2022 TikTok</span>
        </div>
    );
}

export default DivFooter;