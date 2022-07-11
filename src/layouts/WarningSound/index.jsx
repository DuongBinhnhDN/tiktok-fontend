import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import Button from "../../components/Button";
import { handleShowSound } from "../../components/GlobalFunc";
import styles from "./WarningSound.module.scss";
const cx = classNames.bind(styles);

function WarningSound() {
  const sound = useRef();
  const sound_select = useRef();

  useEffect(() => {
    localStorage.setItem("sound", sound.current.className);
    localStorage.setItem("sound_select", sound_select.current.className);
  }, []);

  return (
    <div className={cx("wrapper")} ref={sound}>
      <div className={cx("wrapper-ui")}></div>
      <div className={cx("wrapper-select")} ref={sound_select}>
        <div className={cx("wrapper-init")}>
          <div className={cx("wrappe")}>
            <h1 className={cx("wrapper-init_item")}>Warning</h1>
            <h3>Lower the volume to avoid hearing damage !</h3>
            <Button
              enablesound
              onClick={() => {
                handleShowSound();
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarningSound;
