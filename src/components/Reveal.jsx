import { useEffect, useRef, useState } from 'react';

// Fades its children up the first time they scroll into view.
// Content is visible by default; only elements that start below the fold
// are briefly hidden, so nothing is ever stuck invisible.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen

    setPending(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPending(false);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${pending ? 'is-pending' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
