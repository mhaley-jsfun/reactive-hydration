import { memo, useCallback, useMemo, useRef } from "react";
import {
  ExampleServerComponentInner,
  useStates as useStatesServerComponentInner,
} from "./ExampleServerComponentInner";

export const ExampleServerComponent = memo(
  () => {
    console.log(
      "*** rendering ExampleServerComponent (should be on server only)"
    );

    return (
      <div id="ExampleServerComponent">
        <div>(Wrapper...)</div>
        {/* This placholder/wrapper div could be generated by the compiler to match `useNested` identifier below. */}
        <div id="ExampleServerComponentInner">
          <ExampleServerComponentInner />
        </div>
        {/* This placholder/wrapper div could be generated by the compiler to match `useNested` identifier below. */}
        <div id="ServerComponentInner2">
          <ExampleServerComponentInner />
        </div>
        <div>(...wrapper!)</div>
      </div>
    );
  },
  () => true
);

ExampleServerComponent.displayName = "ExampleServerComponent";

/**
 * This would be generated by the compiler.
 */
export const useNested = () => {
  const statesServerComponentInner = useStatesServerComponentInner();

  const loadedRef = useRef(false);

  const setLoaded = useCallback(() => {
    loadedRef.current = true;
  }, []);

  const loader = useCallback(
    () =>
      import(
        /* webpackChunkName: "ExampleServerComponentInner" */
        "./ExampleServerComponentInner"
      ).then((mod) => mod.ExampleServerComponentInner),
    []
  );

  return useMemo(
    () => ({
      ExampleServerComponentInner: {
        states: statesServerComponentInner,
        loaded: loadedRef.current,
        setLoaded,
        loader,
      },
      ServerComponentInner2: {
        states: statesServerComponentInner,
        loaded: loadedRef.current,
        setLoaded,
        loader,
      },
    }),
    [statesServerComponentInner, loader, setLoaded]
  );
};
