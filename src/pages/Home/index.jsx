import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomeItem from './HomeItem';
const cx = classNames.bind(styles)


// call api
const data = [
    {
        name: 'Cairde',
        username: '_cairde',
        title: 'They took us by surprise',
        name_music: 'nhạc nền - Hà Tiến Trường',
        link_profile: '/',
        link_music: 'https://www.tiktok.com/music/nh%E1%BA%A1c-n%E1%BB%81n-H%C3%A0-Ti%E1%BA%BFn-Tr%C6%B0%E1%BB%9Dng-7074006424786881306',
        link_video: require('../../assets/videos/1.mp4'),
        avatar: 'https://i.ibb.co/2jQ2QkD/fc34728e4a6afe7cd527080b3c727ca3-c5-100x100.jpg',
        thumb_avatar: 'https://i.ibb.co/dWW0N4C/2d8d0f5e06e44c4f82335ecdeeecab16-1649612693.jpg',
        heart: '100K',
        comment: '5034',
        share: '2949',
        tag: true,
        blue_check: true,
        name_tag: [
            {
                key: 'cairde',
                link_tag: '',
            },
            {
                key: 'appcredit',
                link_tag: '',
            },
        ],
    },
    {
        name: '✿тнằиɢ_кнờ☻',
        username: 'nts_107',
        title: 'Con có làm gì sai đâu…!?',
        name_music: 'nhạc nền - Duy Jet 🎶',
        link_profile: '/',
        link_music: 'https://www.tiktok.com/music/nh%E1%BA%A1c-n%E1%BB%81n-Duy-Jet-%F0%9F%8E%B6-7067878998860106523',
        link_video: require('../../assets/videos/3.mp4'),
        avatar: 'https://i.ibb.co/2ssMjP7/7dead547e8087b2b0db862258953e545-c5-100x100.jpg',
        thumb_avatar: 'https://i.ibb.co/dWW0N4C/2d8d0f5e06e44c4f82335ecdeeecab16-1649612693.jpg',
        heart: '100K',
        comment: '9303',
        share: '294945',
        tag: true,
        blue_check: false,
        name_tag: [
            {
                key: 'confide_one',
                link_tag: '',
            },
            {
                key: 'thang_kho',
                link_tag: '',
            },
        ],
    },
    {
        name: 'Filter Instagram🤍',
        username: 'filterins',
        title: 'Đăng Kí Youtube',
        name_music: 'nhạc nền - ctri',
        link_profile: '/',
        link_music: 'https://www.tiktok.com/music/nh%E1%BA%A1c-n%E1%BB%81n-Duy-Jet-%F0%9F%8E%B6-7067878998860106523',
        link_video: require('../../assets/videos/2.mp4'),
        avatar: 'https://i.ibb.co/5RHYQtk/3c0398412c52054beb1b3e72e2453f8d-c5-100x100.jpg',
        thumb_avatar: 'https://i.ibb.co/dWW0N4C/2d8d0f5e06e44c4f82335ecdeeecab16-1649612693.jpg',
        heart: '1.7M',
        comment: '1M',
        share: '2945',
        tag: true,
        blue_check: true,
        name_tag: [
            {
                key: 'chiasefilterinstagram_',
                link_tag: '',
            },
            {
                key: 'youtube',
                link_tag: '',
            },
            {
                key: 'viral',
                link_tag: '',
            },
            {
                key: 'filterinstagram',
                link_tag: '',
            },
            {
                key: 'xuhuong',
                link_tag: '',
            },
        ],
    },
    {
        name: 'Filter Instagram🤍',
        username: 'filterins',
        title: 'Đăng Kí Youtube',
        name_music: 'nhạc nền - ctri',
        link_profile: '/',
        link_music: 'https://www.tiktok.com/music/nh%E1%BA%A1c-n%E1%BB%81n-Duy-Jet-%F0%9F%8E%B6-7067878998860106523',
        link_video: require('../../assets/videos/4.mp4'),
        avatar: 'https://i.ibb.co/5RHYQtk/3c0398412c52054beb1b3e72e2453f8d-c5-100x100.jpg',
        thumb_avatar: 'https://i.ibb.co/dWW0N4C/2d8d0f5e06e44c4f82335ecdeeecab16-1649612693.jpg',
        heart: '1.7M',
        comment: '1M',
        share: '2945',
        tag: true,
        blue_check: true,
        name_tag: [
            {
                key: 'chiasefilterinstagram_',
                link_tag: '',
            },
            {
                key: 'youtube',
                link_tag: '',
            },
            {
                key: 'viral',
                link_tag: '',
            },
            {
                key: 'filterinstagram',
                link_tag: '',
            },
            {
                key: 'xuhuong',
                link_tag: '',
            },
        ],
    },
]


function Home() {
    return (
        <div className={cx('wrapper')}>
            {data.map((datas, index1) => (
                < HomeItem data={datas} key={index1} big={false} />
            ))}
        </div>
    )
}

export default Home