import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { CloseIcon, FbIcon, GgIcon, IclouldIcon, InstagramIcon, KakaotalkIcon, LineIcon, PersonIcon, QrIcon, TwitterIcon } from "../../assets/icons";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

function Login() {
  const login = useRef();
  const login_select = useRef();

  useEffect(() => {
    localStorage.setItem("login", login.current.className);
    localStorage.setItem("login_select", login_select.current.className);
  }, [login]);

  return (
    <div className={cx("wrapper")} ref={login}>
      <div className={cx("wrapper-ui")}></div>
      <div className={cx("wrapper-select")} ref={login_select}>
        <div className={cx("container")}>
          <div className={cx("header-login")}>
            <div className={cx("content")}>
              <div className={cx("title")}>Log in to TikTok</div>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<QrIcon />}</div>
                  Use QR code
                </div>
              </a>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<PersonIcon />}</div>
                  Use phone / email / username
                </div>
              </a>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<FbIcon />}</div>
                  Continue with Facebook
                </div>
              </a>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<GgIcon />}</div>
                  Continue with Google
                </div>
              </a>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<TwitterIcon />}</div>
                  Continue with Twitter
                </div>
              </a>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<LineIcon />}</div>
                  Continue with LINE
                </div>
              </a>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<KakaotalkIcon />}</div>
                  Continue with KakaoTalk
                </div>
              </a>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<IclouldIcon />}</div>
                  Continue with Apple
                </div>
              </a>
              <a className={cx("link-login")} href="/">
                <div className={cx("link-login-item")}>
                  <div className={cx("item-properties")}>{<InstagramIcon />}</div>
                  Continue with Instagram
                </div>
              </a>
            </div>
          </div>
          <div className={cx("footer-login")}>
            <div>Don’t have an account?</div>
            <a className={cx("link-login")}>
              <span className={cx("link-login1")}>Sign up</span>
            </a>
          </div>
        </div>
        <div
          className={cx("close")}
          onClick={() => {
            login.current.style.visibility = "hidden";
            login_select.current.style.opacity = 0;
          }}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}

export default Login;
