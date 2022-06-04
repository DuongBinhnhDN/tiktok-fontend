import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { LiveStreamIcon } from '../../../../../assets/icons';
import styles from './DivUserSelect.module.scss';


const cx = classNames.bind(styles)

const handleIconLive = (image) => (
    <>
        <LiveStreamIcon />
        <span className={cx('img-block-btn')} style={{ width: 26, height: 26 }}>
            <img className={cx('img-avatar')} src={image} alt='avatar'></img>
        </span>
    </>
)

const unhandleIconLive = (image) => (
    <span className={cx('img-block-btn')} >
        <img className={cx('img-avatar')} src={image} alt='avatar'></img>
    </span>
)

function DivUserSelect({ name, username, link, icon, image, live }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Link to={link}>
                    <div className={cx('img-block')}>
                        {live ? handleIconLive(image) : unhandleIconLive(image)}
                    </div>
                </Link>
                <Link className={cx('link-btn')} to={link}>
                    <div className={cx('img-block-label')}>
                        <h4 className={cx('img-block-title')}>{name}</h4>
                        <div style={{ marginLeft: 4 }}>{icon}</div>
                    </div>
                    <p className={cx('img-block-label-name')}>{username}</p>
                </Link>
            </div>
        </div>


    );
}

export default DivUserSelect;