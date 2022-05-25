import classNames from 'classnames/bind';
import { Fragment, useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button';
import { CheckIcon, CommentIcon, HeartIcon, MusicIcon, PauseIcon, PlayIcon, ReportIcon, ShareIcon, SharpIcon, SoundIcon, UnSoundIcon } from '../../../components/icons';
import styles from './HomeItem.module.scss';
const cx = classNames.bind(styles)

function HomeItem({ data, index, big = false }) {

    const [play, setPlay] = useState(true)

    const [sound, setSound] = useState(false)

    const [time, setTime] = useState()

    const [hover, setHover] = useState(false)

    const ref = useRef()

    const ref_video = useRef()

    const ref_content = useRef()

    const ref_footer = useRef()

    const ref_process = useRef()

    const ref_progress = useRef()

    const updateTime = useRef()


    useEffect(() => {

        ref.current.onclick = function () {
            if (play) {
                ref_video.current.play()
            }
            else {
                ref_video.current.pause()
            }
        }

        ref_video.current.ontimeupdate = function () {
            if (this.duration) {
                const progressPercent = Math.floor(
                    (this.currentTime / this.duration) * 100
                );
                setTime(
                    (Math.floor(this.currentTime).toString().length >= 2 ? '00:' + Math.floor(this.currentTime) : '00:0' + Math.floor(this.currentTime))
                    +
                    '/'
                    +
                    (Math.floor(this.duration).toString().length >= 2 ? '00:' + Math.floor(this.duration) : '00:0' + Math.floor(this.duration)))
                ref_process.current.style.left = progressPercent + '%';
                ref_progress.current.style.width = progressPercent + '%';
            }
        };

        ref_video.current.onmouseover = function () {
            if (this.duration) {
                const progressPercent = Math.floor(
                    (this.currentTime / this.duration) * 100
                );
                setTime(
                    (Math.floor(this.currentTime).toString().length >= 2 ? '00:' + Math.floor(this.currentTime) : '00:0' + Math.floor(this.currentTime))
                    +
                    '/'
                    +
                    (Math.floor(this.duration).toString().length >= 2 ? '00:' + Math.floor(this.duration) : '00:0' + Math.floor(this.duration)))
                ref_process.current.style.left = progressPercent + '%';
                ref_progress.current.style.width = progressPercent + '%';
            }
        };

        ref_video.current.onended = function () {
            ref_progress.current.style.width = 0 + '%';
            ref_process.current.style.left = 0 + '%';
            setPlay(true)
        }

        ref_process.current.onmousedown = function () {
            setHover(true)
        }

        ref_process.current.onmouseup = function () {
            setHover(false)
            console.log('false');
        }

        ref_footer.current.onmousemove = function (e) {
            if (hover) {
                console.log(e.clientX);
                e.stopPropagation();
            }
        }
    })


    return (
        <div className={cx('wrapper')} key={index}>
            <a className={cx('link-btn')} href={data.link_profile}>
                <div className={cx('link-btn_div')}>
                    <span className={cx('link-btn_span')}>
                        <img style={{ width: 100 + '%', height: 100 + '%', objectFit: 'cover' }}
                            src={data.avatar}
                        ></img>
                    </span>
                </div>
            </a >

            {/* content-title */}
            <div className={cx('div-btn-content')}>
                <div className={cx('div-btn_item')}>
                    <div className={cx('div-btn_item-div')}>
                        <a className={cx('link-btn-item')} >
                            <div className={cx('link-btn-item_div')}>
                                <span className={cx('link-btn-item_span')}>
                                    <img style={{ width: 100 + '%', height: 100 + '%', objectFit: 'cover' }}
                                        src={data.avatar}
                                    ></img>
                                </span>
                            </div>
                        </a>
                        <div style={{ display: 'block' }}>
                            <h3 className={cx('title')}>
                                <a href={data.link_profile}>
                                    {data.username}
                                </a>
                                {data.blue_check ? <CheckIcon marginLeft='4' marginRight='2' /> : null}
                            </h3>
                            <h4 className={cx('name-title')}>{data.name}</h4>
                        </div>
                    </div>
                    <Button follow children='Follow' />
                    <div style={{ fontSize: 16, lineHeight: 22 + 'px', wordBreak: 'break-word', width: 510 + 'px' }}>
                        <span style={{ display: 'inline-block' }}>{data.title}</span>
                        {data.tag ?
                            data.name_tag.map((item, index) => (
                                <a className={cx('tag')} href={item.link_tag} target="_blank" key={index}>
                                    <strong
                                        className={cx('tag_strong')}
                                        key={index}>
                                        #{item.key}
                                    </strong>
                                </a>
                            ))
                            : null}
                    </div>
                    <h4 className={cx('video-music')}>
                        <a className={cx('video-music_a')} href={data.link_music}>
                            <MusicIcon marginRight='5' marginTop='2' />
                            {data.name_music}
                        </a>
                    </h4>
                </div>


                {/* xử lý video */}
                <div className={cx('div-btn-video')}>
                    <div className={big ? cx('div_first', 'Big') : cx('div_first')} >
                        <canvas className={cx('canvas-video')}></canvas>
                        <div className={cx('div_first-item')} ref={ref_footer}>
                            <div className={cx('div-1')}>
                                {data.thumb_avatar ? <img src={data.thumb_avatar}></img> : Fragment}
                                <div className={cx('div-1_item')}>
                                    <video style={{ display: 'block', width: 100 + '%', height: 100 + '%', objectFit: 'cover' }}
                                        src={data.link_video} ref={ref_video}></video>
                                </div>
                            </div>
                            <div className={cx('button-play')} onClick={() => setPlay(!play)} ref={ref}>
                                {play ? <PauseIcon /> : <PlayIcon />}
                            </div>
                            <div className={cx('button-sound')} onClick={() => setSound(!sound)} >
                                <div className={cx('video-sound')}>
                                    {sound ? <UnSoundIcon /> : <SoundIcon />}
                                </div>
                            </div>
                            <div className={cx('button-footer')}>
                                <div className={cx('process-item')}>
                                    <div className={cx('process-stonk')} ref={ref_content}></div>
                                    <div className={cx('process-stonk1')} ref={ref_process}></div>
                                    <div className={cx('process-stonk2')} ref={ref_progress}></div>
                                </div>
                                <div className={cx('process-number')} ref={updateTime}>{time}</div>
                            </div>
                            <p className={cx('button-report')}>
                                <ReportIcon marginRight='5' />
                                Report
                            </p>
                        </div>
                    </div>
                    <div className={cx('button-reaction')}>
                        <button className={cx('button-heart')}>
                            <span className={cx('title-reaction')}>
                                <HeartIcon />
                            </span>
                            <strong className={cx('title-reactjs')}>{data.heart}</strong>
                        </button>
                        <button className={cx('button-heart')}>
                            <span className={cx('title-reaction')}>
                                <CommentIcon />
                            </span>
                            <strong className={cx('title-reactjs')}>{data.comment}</strong>
                        </button>
                        <button className={cx('button-heart')}>
                            <span className={cx('title-reaction')}>
                                <ShareIcon />
                            </span>
                            <strong className={cx('title-reactjs')}>{data.share}</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeItem;