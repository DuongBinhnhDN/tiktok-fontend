import axios from "axios";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import HomeLoading from "../../components/HomeLoading";
import styles from "./Home.module.scss";
import HomeItem from "./ItemVideo";
const cx = classNames.bind(styles);

function Home() {
  const [api, setApi] = useState();

  useEffect(() => {
    axios.get("https://api-tiktok123.herokuapp.com/api/newfeed").then((res) => setApi(res));
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
