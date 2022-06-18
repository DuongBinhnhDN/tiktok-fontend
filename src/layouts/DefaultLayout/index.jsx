import classNames from "classnames/bind";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const scrollHome = useRef();
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")} ref={scrollHome}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
