import type { NextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { ReactiveHydrationContainer } from "reactive-hydration";
import { textState } from "state/textState";
import { text2State } from "state/text2State";
import { ExampleServerComponentDynamic } from "components/ExampleServerComponent/dynamic";

const Home: NextPage = () => {
  const [, setText] = useRecoilState(textState);

  const handleClick = useCallback(() => {
    setText(`(client value: ${Math.random()}`);
  }, [setText]);

  const [, setText2] = useRecoilState(text2State);

  const handleClick2 = useCallback(() => {
    setText2(`(client value: ${Math.random()}`);
  }, [setText2]);

  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <Link href="/other">Other Page</Link>
      </nav>

      <button onClick={handleClick}>Update text on client</button>
      <button onClick={handleClick2}>Update text 2 on client</button>

      {/* This wrapper could be generated by a compiler when we import `ExampleServerComponent`. */}
      <ReactiveHydrationContainer
        Comp={ExampleServerComponentDynamic}
        LazyComp={ExampleServerComponentDynamic}
      />
    </div>
  );
};

export default Home;
