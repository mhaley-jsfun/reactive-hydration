/* eslint-disable react-hooks/rules-of-hooks -- Okay to disable here. In any given hook call, we won't change number of hook calls between renders. */
const React = require("_react");

// TODO: We may need to polyfill `createElement` similar to `jsx-runtime` for folks building that way.
// const createElement = React.createElement;
const useContext = React.useContext;
const useState = React.useState;

// Deep imports to avoid pulling in anything like `react-dom` that will require `react`
// which would cause a circular dependency given our monkeypatch here registering as `react`.
const {
  useStateSerialize,
} = require("reactive-hydration/dist/useStateSerialize");
const {
  useContextUsageTracker,
} = require("reactive-hydration/dist/useContextUsageTracker");
const {
  ReactiveHydrationContainerContext,
} = require("reactive-hydration/dist/ReactiveHydrationContainerContext");

/**
 * @param {*} init
 * @param {*} bypass This isn't known to React, but passed by `reactive-hydration/react-actual`.
 */
const useStateReactiveHydrationMonkeypatch = (init, bypass) => {
  if (bypass) {
    return useState(init);
  }

  const { isWithinReactiveHydrationContainer } = useContext(
    ReactiveHydrationContainerContext
  );

  if (!isWithinReactiveHydrationContainer) {
    return useState(init);
  }

  return useStateSerialize(init);
};

React.useState = useStateReactiveHydrationMonkeypatch;

const useContextReactiveHydrationMonkeypatch = (Context, bypass) => {
  if (bypass) {
    return useContext(Context);
  }

  return useContextUsageTracker(Context);
};

React.useContext = useContextReactiveHydrationMonkeypatch;

// export default React;
// export = React;

module.exports = React;
