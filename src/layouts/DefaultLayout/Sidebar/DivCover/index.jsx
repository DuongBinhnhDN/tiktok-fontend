import classNames from "classnames/bind";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { MusicIcon, SharpIcon } from "../../../../assets/icons";
import styles from "./DivCover.module.scss";

const cx = classNames.bind(styles);

function DivCover({ data }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Discover</p>
      <div className={cx("container")}>
        {data
          ? data.data[0].data.map((item, index) => (
              <Link key={index} className={cx("link")} to={item.link}>
                <div className={cx("content")}>
                  <p className={cx("icon-btn")}>
                    {(() => {
                      switch (item.icon) {
                        case "SharpIcon":
                          return <SharpIcon />;
                        case "MusicIcon":
                          return <MusicIcon />;
                        default:
                          return Fragment;
                      }
                    })()}
                  </p>
                  <p className={cx("title-btn")}>{item.content}</p>
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default DivCover;
