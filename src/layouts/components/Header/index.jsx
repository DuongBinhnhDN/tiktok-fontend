import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { CoinIcon, HelpIcon, InfoMation, KeyboardIcon, LanguageIcon, LogOutIcon, MessageIcon, MoreIcon, PlusIcon, SettingIcon, UserIcon } from '../../../assets/icons';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import Menu from '../../../components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';



const cx = classNames.bind(styles)

const currentUser = true

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
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
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    }
]

const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View Profile',
        to: '/@hoaa'
    },
    {
        icon: <CoinIcon />,
        title: 'Get Coins',
        to: '/coin'
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/settings'
    },
    ...MENU_ITEMS,
    {
        icon: <LogOutIcon />,
        title: 'Log Out',
        to: '/logout',
        separate: true
    },
]

function Header() {

    const scrollOnTop = () => {
        document.querySelector(`.${localStorage.getItem('ref')}`).scrollTo({ top: 0, behavior: 'smooth' })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')} onClick={scrollOnTop}>
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
    )
}

export default Header;