import axios from "axios";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button";
import { handleShowLogin } from "../../../components/GlobalFunc";
import DisCover from "./DivCover";
import DivFooter from "./DivFooter";
import DivSelect from "./DivSelect";
import DivUser from "./DivUser";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  const [api, setApi] = useState();
  const ref = useRef();
  const currentUser = localStorage.getItem("user");

  useEffect(() => {
    localStorage.setItem("ref", ref.current.className);
  }, [ref]);

  useEffect(() => {
    axios.get("https://nodejs-tiktok.herokuapp.com/api/discover").then((res) => setApi(res));
  }, []);

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("container")}>
        <DivUser />
        {(() => {
          if (!currentUser) {
            return (
              <div className={cx("containers")}>
                <p style={{ fontSize: 16 + "px", lineHeight: 22 + "px", color: "rgba(22, 24, 35, 0.5" }}>Log in to follow creators, like videos, and view comments.</p>
                <Button
                  login
                  onClick={() => {
                    handleShowLogin();
                  }}
                >
                  Log in
                </Button>
              </div>
            );
          } else {
            return <DivSelect title="Following accounts" atb="See more" index="1" />;
          }
        })()}

        <DivSelect title="Suggested accounts" atb="See all" index="0" />
        <DisCover data={api} />
        <div className={cx("sperate")}></div>
        <DivFooter />
      </div>
    </div>
  );
}

export default Sidebar;
