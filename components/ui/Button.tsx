import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-wider transition-all duration-300 rounded-sm group relative overflow-hidden";
  
  const variants = {
    primary: "bg-brand-green text-white hover:bg-white hover:text-brand-green shadow-[0_0_20px_rgba(0,166,76,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    outline: "border border-white/20 text-white hover:border-brand-orange hover:text-brand-orange bg-transparent hover:bg-brand-orange/10",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-8 py-3",
    lg: "text-base px-10 py-4 font-bold",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};