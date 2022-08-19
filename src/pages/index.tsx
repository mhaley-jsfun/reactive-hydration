import type { NextPage } from "next";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { textState } from "../state/textState";
import { text2State } from "../state/text2State";
// This `ServerComponent` import could be handled be a compiler when we import `ExampleServerComponent`.
import { ServerComponent } from "../ServerComponent";
import {
  ExampleServerComponent,
  // This `useNested` import could be handled be a compiler when we import `ExampleServerComponent`.
  useNested as useNestedExampleServerComponent,
} from "../ExampleServerComponent/index.server";

const Home: NextPage = () => {
  const setText = useSetRecoilState(textState);

  const handleClick = useCallback(() => {
    setText(`(client value: ${Math.random()}`);
  }, [setText]);

  const setText2 = useSetRecoilState(text2State);

  const handleClick2 = useCallback(() => {
    setText2(`(client value: ${Math.random()}`);
  }, [setText2]);

  return (
    <div>
      <button onClick={handleClick}>Update text on client</button>
      <button onClick={handleClick2}>Update text 2 on client</button>

      {/* This wrapper could be generated by a compiler when we import `ExampleServerComponent`. */}
      <ServerComponent
        Comp={typeof window !== "object" ? ExampleServerComponent : undefined}
        useNested={useNestedExampleServerComponent}
      />
    </div>
  );
};

export default Home;
