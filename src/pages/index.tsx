import type { NextPage } from "next";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { ServerComponent } from "../ServerComponent";
import { textState } from "../state/textState";
import { text2State } from "../state/text2State";

const Home: NextPage = () => {
  const setText = useSetRecoilState(textState);

  const handleClick = useCallback(() => {
    setText("(client value)");
  }, [setText]);

  const setText2 = useSetRecoilState(text2State);

  const handleClick2 = useCallback(() => {
    setText2("(client value)");
  }, [setText2]);

  return (
    <div>
      <button onClick={handleClick}>Update text on client</button>
      <button onClick={handleClick2}>Update text 2 on client</button>
      <ServerComponent />
    </div>
  );
};

export default Home;
