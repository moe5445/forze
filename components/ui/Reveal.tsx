import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // in ms
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const { ref, isVisible } = useScrollReveal(0.15);

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};