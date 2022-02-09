import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * @since 1.0.0
 * @summary Use this hook to return a memoized array  of
 * html elements converted to strings derived from a JSX element
 *
 * @returns String[]
 */
function useRenderArrayToStrings(elements: React.ReactElement[]) {
  const [htmlArray, setHtmlArray] = useState<string[]>();
  const containers = useMemo(
    () => elements.map(() => document.createElement('div')),
    [elements]
  );
  const callback = useCallback(() => {
    setHtmlArray(elements.map((_, index) => containers[index].innerHTML));
  }, [containers, elements]);

  useLayoutEffect(() => {
    containers.forEach((container, index) => {
      ReactDOM.render(elements[index], container, callback);
    });
  }, [elements, containers, callback]);

  return htmlArray;
}

export default useRenderArrayToStrings;
