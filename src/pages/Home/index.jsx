import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { ConnectApi } from "../../components/GlobalFunc";
import HomeLoading from "../../components/HomeLoading";
import styles from "./Home.module.scss";
import ItemVideo from "./ItemVideo";
const cx = classNames.bind(styles);

function Home() {
  const [api, setApi] = useState();

  async function Newfeed() {
    await ConnectApi("https://nodejs-tiktok.herokuapp.com/api/newfeed", "GET").then((res) => {
      localStorage.setItem("CountVideo", res.data.length);
      setApi(res);
    });
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
              return <ItemVideo key={index1} data={datas} big={false} />;
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
