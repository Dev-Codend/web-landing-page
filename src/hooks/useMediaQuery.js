import { useCallback, useMemo, useSyncExternalStore } from 'react';

export default function useMediaQuery(query) {
  const media = useMemo(() => window.matchMedia(query), [query]);
  const subscribe = useCallback((notify) => {
    media.addEventListener('change', notify);
    return () => media.removeEventListener('change', notify);
  }, [media]);
  return useSyncExternalStore(subscribe, () => media.matches);
}
