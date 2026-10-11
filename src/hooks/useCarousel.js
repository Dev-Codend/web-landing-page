import { useEffect, useRef, useState } from 'react';

export default function useCarousel(count) {
  const [position, setPosition] = useState(1);
  const [animating, setAnimating] = useState(false);
  const busy = useRef(false);

  function move(direction) {
    if (busy.current || count < 2) return;
    busy.current = true;
    setAnimating(true);
    setPosition((current) => current + direction);
  }

  function finish() {
    if (!busy.current) return;
    setAnimating(false);
    setPosition((current) => current === 0 ? count : current === count + 1 ? 1 : current);
    busy.current = false;
  }

  useEffect(() => {
    if (!animating) return;
    const timer = window.setTimeout(finish, 350);
    return () => window.clearTimeout(timer);
  }, [animating, count]);

  return { position, animating, activeIndex: (position - 1 + count) % count, move, finish };
}
