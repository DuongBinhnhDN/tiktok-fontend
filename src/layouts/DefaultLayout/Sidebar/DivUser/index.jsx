import classNames from 'classnames/bind';
import { FollowingIcon, FollowingIconHide, HomeIconActive, HomeIconUnactive, LiveIcon, LiveIconHide } from '../../../../components/icons';
import styles from './DivUser.module.scss';
import DivUserItem from './DivUserItem';

const cx = classNames.bind(styles)



function DivUser() {
    return (
        <div className={cx('wrapper')}>
            <DivUserItem link={'/'} icon={<HomeIconUnactive />} icon1={<HomeIconActive />} content={'For You'} />
            <DivUserItem link={'/following'} icon={<FollowingIcon />} icon1={<FollowingIconHide />} content={'Following'} />
            <DivUserItem link={'/live'} icon={<LiveIcon />} icon1={<LiveIconHide />} content={'LIVE'} />
        </div >
    );
}

export default DivUser;