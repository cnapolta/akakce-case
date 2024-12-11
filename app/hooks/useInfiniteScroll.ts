import { useCallback, useEffect, useRef, useState } from "react";

interface UseInfiniteScrollOptions {
  threshold?: number;
  enabled?: boolean;
}

export function useInfiniteScroll(
  onLoadMore: () => Promise<void>,
  options: UseInfiniteScrollOptions = {}
) {
  const { threshold = 100, enabled = true } = options;
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && enabled && !loading) {
        setLoading(true);
        try {
          await onLoadMore();
        } finally {
          setLoading(false);
        }
      }
    },
    [onLoadMore, enabled, loading]
  );

  useEffect(() => {
    if (!enabled) return;

    const options = {
      root: null,
      rootMargin: `0px 0px ${threshold}px 0px`,
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver(handleObserver, options);

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver, threshold, enabled]);

  return { targetRef, loading };
}
