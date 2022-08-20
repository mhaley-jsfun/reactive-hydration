import { ExampleServerComponentInner } from "./ExampleServerComponentInner.client";

export const ExampleServerComponent = () => {
  console.log(
    "*** rendering ExampleServerComponent (should be on server only)"
  );

  return (
    <>
      <div>(Wrapper...)</div>
      {/* This placholder/wrapper div could be generated by the compiler to match `useNested` identifier below. */}
      <div id="ExampleServerComponentInner">
        <ExampleServerComponentInner />
      </div>
      {/* This placholder/wrapper div could be generated by the compiler to match `useNested` identifier below. */}
      <div id="ExampleServerComponentInner2">
        <ExampleServerComponentInner />
      </div>
      <div>(...wrapper!)</div>
    </>
  );
};

ExampleServerComponent.displayName = "ExampleServerComponent";
