import { FC, useState } from "react";
import axis from "axios";
import requests from "utils/Request";
import { TextField } from "@material-ui/core";

const SampleSave: FC = () => {
  const [configurationName, setConfigurationName] = useState("");

  // Saveボタン押下
  const onClick = (event: Event) => {
    event.preventDefault();

    axis
      .post(requests.InsertSampleData, {
        configuration_name: configurationName,
      })
      .then((red) => {
        // ここで返って来た結果に対して処理を行う
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // テキストボックスの値が変更された時Stateを更新する
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setConfigurationName(event.target.value); // 値をStateへセットする
  };

  return (
    <>
      <TextField value={configurationName} onChange={onChangeValue} />

      <Button text="SAVE" onClick={onClickUpdate} />
    </>
  );
};

export default Sample;
