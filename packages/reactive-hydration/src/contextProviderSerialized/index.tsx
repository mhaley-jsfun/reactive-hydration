import { Context, PropsWithChildren, useId, useMemo } from "react";
import { useContext } from "../react-actual";
import { ReactiveHydrationContainerContext } from "../ReactiveHydrationContainerContext";

export function contextProviderSerialized<T>(context: Context<T>) {
  const { Provider, displayName } = context;

  const ContextProviderSerialized = (
    props: PropsWithChildren<{ value: T }>
  ) => {
    const { children, value } = props;

    const { hasSoftRouted } = useContext(ReactiveHydrationContainerContext);

    const serializedValue = useMemo(() => JSON.stringify(value), [value]);

    const id = useId();

    if (typeof window === "object" && !hasSoftRouted) {
      return <Provider value={value}>{children}</Provider>;
    }

    return (
      <div
        data-context-id={id}
        data-context-name={displayName}
        data-context-value={serializedValue}
      >
        <Provider value={value}>{children}</Provider>
      </div>
    );
  };

  ContextProviderSerialized.displayName = `ContextProviderSerialized(${displayName})`;

  return ContextProviderSerialized;
}
