import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import HomeLoading from "../../components/HomeLoading";
import styles from "./Home.module.scss";
import HomeItem from "./ItemVideo";
import { ConnectApi } from "../../components/GlobalFunc";
const cx = classNames.bind(styles);

function Home() {
  const [api, setApi] = useState();

  async function Newfeed() {
    await ConnectApi("https://nodejs-tiktok.herokuapp.com/api/newfeed", "GET").then((res) => setApi(res));
  }

  useEffect(() => {
    Newfeed();
  }, []);

  return (
    <div className={cx("wrapper")}>
      {api ? (
        api.data.map((datas, index1) =>
          (() => {
            if (datas.username) {
              return <HomeItem key={index1} data={datas} big={false} />;
            }
          })()
        )
      ) : (
        <>
          <HomeLoading />
          <HomeLoading />
        </>
      )}
    </div>
  );
}

export default Home;
