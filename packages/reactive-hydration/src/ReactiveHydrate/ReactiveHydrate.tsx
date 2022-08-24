import { PropsWithChildren, RefObject, useContext, useId } from "react";
import { ReactiveHydrateContext } from "../ReactiveHydrateContext";

/**
 * On server we'll create a wrapper `div` as a portal host to mount into,
 * but on the client we don't want that wrapper or else we'll get extra nesting.
 */
export const ReactiveHydrate = (
  props: PropsWithChildren<{
    id?: string;
    name: string;
    states?: string;
    portalRef: RefObject<HTMLDivElement>;
  }>
) => {
  const { id: idProp, portalRef } = props;

  const defaultId = useId();

  const id = idProp ?? defaultId;

  const { reactiveHydratingId } = useContext(ReactiveHydrateContext);

  const isHydratingSelf = reactiveHydratingId === id;

  return (
    <>
      {typeof window !== "object" || !isHydratingSelf ? (
        <div
          data-component={props.name}
          data-states={props.states}
          // This ID has to be here since it's the only one stable between server render and post client hydration.
          data-id={id}
          // For soft route loading on client-side, check for `window`.
          data-loaded={typeof window === "object"}
          ref={portalRef}
        >
          {props.children}
        </div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};