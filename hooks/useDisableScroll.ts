import { useCallback, useEffect, useMemo } from 'react';

let locks: string[] = [];

export const useDisableScroll = (
  shouldDisableScroll: boolean,
  lockName?: string
) => {
  const name = useMemo(() => lockName || 'default', [lockName]);

  const disableScroll = useCallback(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);
  const enableScroll = useCallback(() => {
    document.documentElement.style.overflow = '';
  }, []);

  useEffect(() => {
    if (
      shouldDisableScroll === true ||
      (shouldDisableScroll === undefined && !locks.includes(name))
    ) {
      locks.push(name);
      disableScroll();
    }

    return () => {
      locks = locks.filter(n => n !== name);

      if (locks.length === 0) {
        enableScroll();
      }
    };
  }, [disableScroll, enableScroll, name, shouldDisableScroll]);
};

export default useDisableScroll;
