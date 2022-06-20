import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, CommentIcon, HeartIcon, MusicIcon, PauseIcon, PlayIcon, ReportIcon, ShareIcon, SoundIcon, UnSoundIcon } from "../../../assets/icons";
import Button from "../../../components/Button";
import useElementOnScreen from "../../../hooks/useElementOnScreen";
import styles from "./ItemVideo.module.scss";
import { ConnectApi } from "../../../components/GlobalFunc";
import { handleShowLogin } from "../../../components/GlobalFunc";

const cx = classNames.bind(styles);

function HomeItem({ data, index, big = false }) {
  const [play, setPlay] = useState(false);

  const [sound, setSound] = useState(false);

  const [time, setTime] = useState();

  const ref = useRef();

  const refSound = useRef();

  const ref_video = useRef();

  const ref_progress = useRef();

  const ref_process = useRef();

  const updateTime = useRef();

  const [follow, setFollow] = useState(data.following);

  const options = {
    threshold: 0.7,
  };

  const isVisibile = useElementOnScreen(options, ref_video);
  const CurrentUser = localStorage.getItem("user");

  function handleFollow(buff) {
    if (CurrentUser) {
      setFollow(!follow);
      ConnectApi("https://nodejs-tiktok.herokuapp.com/api/following", "POST", {
        id: data._id,
        key: "following",
        value: buff,
      });
    } else {
      handleShowLogin();
    }
  }

  useEffect(() => {
    if (isVisibile) {
      if (!play) {
        ref_video.current.play();
        setPlay(true);
      }
    } else {
      if (play) {
        ref_video.current.pause();
        setPlay(false);
      }
    }
  }, [isVisibile]);

  useEffect(() => {
    ref.current.onclick = function () {
      if (!play) {
        ref_video.current.play();
        setPlay(false);
      } else {
        ref_video.current.pause();
        setPlay(true);
      }
    };

    ref_video.current.ontimeupdate = function () {
      if (this.duration) {
        const progressPercent = Math.floor((this.currentTime / this.duration) * 100);
        setTime(
          (Math.floor(this.currentTime).toString().length >= 2 ? "00:" + Math.floor(this.currentTime) : "00:0" + Math.floor(this.currentTime)) +
            "/" +
            (Math.floor(this.duration).toString().length >= 2 ? "00:" + Math.floor(this.duration) : "00:0" + Math.floor(this.duration))
        );
        ref_progress.current.value = progressPercent;
        ref_process.current.style.width = progressPercent + "%";
      }
    };

    ref_video.current.onmouseover = function () {
      if (this.duration) {
        setTime(
          (Math.floor(this.currentTime).toString().length >= 2 ? "00:" + Math.floor(this.currentTime) : "00:0" + Math.floor(this.currentTime)) +
            "/" +
            (Math.floor(this.duration).toString().length >= 2 ? "00:" + Math.floor(this.duration) : "00:0" + Math.floor(this.duration))
        );
      }
    };

    ref_video.current.onended = function () {
      setPlay(false);
      ref_progress.current.value = 0;
      ref_process.current.style.width = 0 + "%";
    };

    refSound.current.onclick = function () {
      if (!sound) {
        ref_video.current.muted = true;
        setSound(true);
      } else {
        ref_video.current.muted = false;
        setSound(false);
      }
    };
  });

  return (
    <div className={cx("wrapper")} key={index}>
      <a className={cx("link-btn")} href={data.link_profile}>
        <div className={cx("link-btn_div")}>
          <span className={cx("link-btn_span")}>
            <img
              style={{
                width: 100 + "%",
                height: 100 + "%",
                objectFit: "cover",
              }}
              src={data.avatar}
            ></img>
          </span>
        </div>
      </a>

      {/* content-title */}
      <div className={cx("div-btn-content")}>
        <div className={cx("div-btn_item")}>
          <div className={cx("div-btn_item-div")}>
            <a className={cx("link-btn-item")}>
              <div className={cx("link-btn-item_div")}>
                <span className={cx("link-btn-item_span")}>{data.avatar ? <img className={cx("display")} src={data.avatar}></img> : null}</span>
              </div>
            </a>
            <div style={{ display: "block" }}>
              <h3 className={cx("title")}>
                <a href={data.link_profile}>{data.username}</a>
                {data.blue_check ? <CheckIcon marginLeft="4" marginRight="2" /> : null}
              </h3>
              <h4 className={cx("name-title")}>{data.name}</h4>
            </div>
          </div>
          {(() => {
            if (follow) {
              return (
                <Button following onClick={() => handleFollow(false)}>
                  Following
                </Button>
              );
            } else {
              return (
                <Button follow children="Follow" onClick={() => handleFollow(true)}>
                  Follow
                </Button>
              );
            }
          })()}
          <div
            style={{
              fontSize: 16,
              lineHeight: 22 + "px",
              wordBreak: "break-word",
              width: 510 + "px",
            }}
          >
            <span style={{ display: "inline-block" }}>{data.title}</span>
            {data.tag_select
              ? data.name_tag.map((item, index) => (
                  <a className={cx("tag")} href={item.link_tag} target="_blank" key={index}>
                    <strong className={cx("tag_strong")} key={index}>
                      #{item.key}
                    </strong>
                  </a>
                ))
              : null}
          </div>
          <h4 className={cx("video-music")}>
            <a className={cx("video-music_a")} href={data.link_music}>
              <MusicIcon marginRight="5" marginTop="2" />
              {data.name_music}
            </a>
          </h4>
        </div>

        {/* xử lý video */}
        <div className={cx("div-btn-video")}>
          <div className={big ? cx("div_first", "Big") : cx("div_first")}>
            <canvas className={cx("canvas-video")}></canvas>
            <div className={cx("div_first-item")}>
              <div className={cx("div-1")}>
                <div className={cx("div-1_item")}>
                  <video muted="muted" loop src={data.link_video} className={cx("display")} ref={ref_video}></video>
                </div>
              </div>
              <div className={cx("button-play")} onClick={() => setPlay(!play)} ref={ref}>
                {play ? <PlayIcon /> : <PauseIcon />}
              </div>
              <div className={cx("button-sound")} onClick={() => setSound(!sound)} ref={refSound}>
                <div className={cx("video-sound")}>{sound ? <UnSoundIcon /> : <SoundIcon />}</div>
              </div>
              <div className={cx("button-footer")}>
                <div className={cx("process-item")}>
                  <input className={cx("progress")} type="range" min="0" max="100" defaultValue="0" ref={ref_progress} />
                  <div className={cx("progress__track")} ref={ref_process}></div>
                </div>
                <div className={cx("process-number")} ref={updateTime}>
                  {time}
                </div>
              </div>
              <p className={cx("button-report")}>
                <ReportIcon marginRight="5" />
                Report
              </p>
            </div>
          </div>
          <div className={cx("button-reaction")}>
            <button className={cx("button-heart")} onClick={handleShowLogin}>
              <span className={cx("title-reaction")}>
                <HeartIcon />
              </span>
              <strong className={cx("title-reactjs")}>{data.heart}</strong>
            </button>
            <button className={cx("button-heart")} onClick={handleShowLogin}>
              <span className={cx("title-reaction")}>
                <CommentIcon />
              </span>
              <strong className={cx("title-reactjs")}>{data.comment}</strong>
            </button>
            <button className={cx("button-heart")} onClick={handleShowLogin}>
              <span className={cx("title-reaction")}>
                <ShareIcon />
              </span>
              <strong className={cx("title-reactjs")}>{data.share}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeItem;
