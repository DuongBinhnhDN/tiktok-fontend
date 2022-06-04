import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './DivCover.module.scss';


const cx = classNames.bind(styles)


function DivCover({ data }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Discover</p>
            <div className={cx('container')}>
                {data.map((item, index) => (
                    <Link key={index} className={cx('link')} to={item.link}>
                        <div className={cx('content')}>
                            <p className={cx('icon-btn')}>
                                {item.icon}
                            </p>
                            <p className={cx('title-btn')}>{item.content}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DivCover;