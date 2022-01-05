import React from "react";

/**
 * @since v1.0.0
 * @summary This service allows for the creation of containers which
 * will have the responsibility of getting/setting/ data for any wrapped
 * presentational components.  The benefit of this is to make our components
 * less opinionated about where they get their data from which makes them
 * more flexible.  For example, the same component can be used differently
 * on two different pages based on the data passed into it from the container. That
 * means two pages containers can use different queries and pass the response to the
 * presentational components as props.
 * @todo Before we refactor withHooks, we should write some unit tests first.
 *
 * @example
 * import useMachine from 'src/hooks/useMachine';
 * import { RouteComponentProps } from 'react-router-dom';
 * import HowItWorks from './HowItWorks';
 * import stateMachine from '../../../components/PageNavigation/PageNavigation.state';
 * import withHooks, { mapHooksToProps } from '../../../common/utils/withHooks';
 * // The mapHooksToProps function takes routerProps in the case of a Page
 * // and returns that along with any other data you want to send to
 * // your presentational components.
 * const hooks = mapHooksToProps((routerProps: RouteComponentProps) => ({
 * state: useMachine(stateMachine),
 * ...routerProps,
 * }));
 * // The withHooks function accepts your presentational component and
 * // The hooks object that you created from mapHooksToProps.  It then
 * // passes your created object to the page component, (HowItWorks) as props.
 * // These props can now be used for any child component that HowItWorks page
 * // uses.
 * const container = withHooks(HowItWorks, hooks);
 * export default container;
 */

/**
 * @param {Function} func
 * @summary Accepts a functional component from which hooks are
 * able to execute and their values returned
 * @module mapHooksToProps
 */
export function mapHooksToProps<TProps, TData>(
  func: (props: TProps) => TData
): (props: TProps) => TData {
  function hooksToProps(props: TProps): TData {
    return func(props);
  }

  return hooksToProps;
}

/**
 * @since 1.0.0
 * @summary Creates a container for a presentation component
 * and passes executed query data as props
 * @param {object} PresentationalComponent
 * @param {object} hooks
 * @module withHooks
 */

interface Hooks<TProps, TData> {
  (props: TProps): TData;
}

type PresentationalComponentType<TData> = React.FunctionComponent<TData>;

export type ContainerComponentType<TProps> = React.FunctionComponent<TProps>;

interface WithHooks {
  <TProps, TData>(
    PresentationalComponent: PresentationalComponentType<TData>
  ): PresentationalComponentType<TData>;

  <TProps, TData>(
    PresentationalComponent: PresentationalComponentType<TData>,
    hooks: Hooks<TProps, TData>
  ): ContainerComponentType<TProps>;
}

const withHooks: WithHooks = <TProps, TData>(
  PresentationalComponent: PresentationalComponentType<TData>,
  hooks?: Hooks<TProps, TData>
): ContainerComponentType<TProps> | PresentationalComponentType<TData> => {
  if (!hooks) {
    return PresentationalComponent;
  }
  const WrappedComponent: ContainerComponentType<TProps> = (props) => {
    const hooksData = hooks(props);
    return <PresentationalComponent {...hooksData} />;
  };

  return WrappedComponent;
};

export default withHooks;
