import classNames from 'classnames/bind';
import styles from './Scrollbar.module.scss';

const cx = classNames.bind(styles)



function Scrollbar() {
    return (
        <div className={cx('scrollbar-btn')}>
            <div className={cx('scrollbar-item')}>
            </div>
        </div>
    );
}

export default Scrollbar;