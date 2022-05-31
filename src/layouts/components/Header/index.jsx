import { faCircleQuestion, faCoins, faEarthAsia, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import { InfoMation, MessageIcon, MoreIcon, PlusIcon } from '../../../components/icons';
import Menu from '../../../components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';



const cx = classNames.bind(styles)

const currentUser = false

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English (Hoa Kỳ)',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feeback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@hoaa'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/feedback'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/logout',
        separate: true
    },
]

function Header() {

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <Link to='/'>
                    <img style={{ display: "block", cursor: 'pointer' }} src={images.logo} alt='TikTok'></img>
                </Link>

            </div>

            <Search></Search>

            <div className={cx('actions')}>
                {
                    currentUser ? (
                        <div className={cx('icon-center')}>
                            <Tippy content='Tải video lên' delay={[100, 0]}>
                                <Link className={cx('action-btn')} style={{ margin: "0" }} to='/upload'>
                                    <Button upload>
                                        <PlusIcon />
                                        Upload
                                    </Button>
                                </Link>
                            </Tippy>
                            <Tippy content='Tin nhắn' delay={[100, 0]}>
                                <Link className={cx('action-btn')} to='/messages'>
                                    <MessageIcon></MessageIcon>
                                </Link>
                            </Tippy>
                            <Tippy content='Thông báo' delay={[100, 0]}>
                                <button className={cx('action-btn')}>
                                    <InfoMation></InfoMation>
                                    <sup className={cx('ting-mess')}>12</sup>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button text leftIcon={<PlusIcon />}>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )
                }
                <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                    {currentUser ? (
                        <div className={cx('avatar-btn')}></div>
                    ) : (
                        <HeadlessTippy>
                            <button className={cx('more-btn')}>
                                <MoreIcon />
                            </button>
                        </HeadlessTippy>
                    )}

                </Menu>
            </div>
        </div >
    </header >
}

export default Header;