import { FC, useState, useEffect } from "react";
import axis from "axios";
import requests from "utils/Request";
import SampleType from "interfaces";

const Sample: FC = () => {
  const [info, setInfo] = useState([]);
  const datad: SampleType[] = [];

  useEffect(() => {
    const getSampleData = () => {
      axis
        .get(requests.fetchSampleData) // GETメソッドを呼び出す
        .then((res) => {
          // レスポンスを受け取ったらthenを実行する

          // GETで取得したデータをforEachでループしてStateにセットする
          res.data.forEach((resData) => {
            const data: SampleType = {
              userId: resData["user_id"],
              userName: resData["user_name"],
              clubCode: resData["club_code"],
              clubName: resData["club_name"],
            };
            datas.push(data);
          });
          setInfo(datas);
        })
        .catch((error) => {
          // エラーコードが返ってきた場合
          console.log(error); // エラーコードを表示
        });
    };

    getSampleData(); // 関数を実行する
  }, []);

  return <>// ここにTSX、もしくはJSXを記述する</>;
};

export default Sample;
