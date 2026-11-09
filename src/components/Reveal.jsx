import { useEffect, useRef } from 'react';

// Reveals a section once it scrolls into view. Falls back to visible when the
// browser has no IntersectionObserver or the reader prefers reduced motion.
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -70px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
