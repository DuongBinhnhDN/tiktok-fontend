import classNames from "classnames/bind";
import styles from "./Loading.module.scss";
const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper")}>
        <a className={cx("link-btn")}>
          <div className={cx("link-btn_div")}>
            <span className={cx("link-btn_span", "react-loading-skeleton")} style={{ borderRadius: 999 }}></span>
          </div>
        </a>

        {/* content-title */}
        <div className={cx("div-btn-content")}>
          <div className={cx("div-btn_item")}>
            <div className={cx("div-btn_item-div")} style={{ width: 60 + "%" }}>
              <div className={cx("react-loading-skeleton")} style={{ height: 12, display: "flex", marginBottom: 5 }}></div>
            </div>
            <div
              style={{
                width: 30 + "%",
              }}
            >
              <div className={cx("react-loading-skeleton")} style={{ height: 12, display: "flex", marginBottom: 5 }}></div>
            </div>
            <div
              style={{
                width: 45 + "%",
              }}
            >
              <div className={cx("react-loading-skeleton")} style={{ height: 12, display: "flex", marginBottom: 5 }}></div>
            </div>
          </div>

          {/* xử lý video */}
          <div className={cx("div-btn-video")}>
            <div className={cx("div_first")}>
              <div className={cx("react-loading-skeleton")} style={{ height: 100 + "%", width: 100 + "%" }}></div>
            </div>
            <div className={cx("button-reaction")}>
              <button className={cx("button-heart")}>
                <span className={cx("title-reaction")}>
                  <div className={cx("react-loading-skeleton")} style={{ height: 48, width: 48, borderRadius: 999 }}></div>
                </span>
              </button>
              <button className={cx("button-heart")}>
                <span className={cx("title-reaction")}>
                  <span className={cx("title-reaction")}>
                    <div className={cx("react-loading-skeleton")} style={{ height: 48, width: 48, borderRadius: 999 }}></div>
                  </span>
                </span>
              </button>
              <button className={cx("button-heart")}>
                <span className={cx("title-reaction")}>
                  <span className={cx("title-reaction")}>
                    <div className={cx("react-loading-skeleton")} style={{ height: 48, width: 48, borderRadius: 999 }}></div>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
