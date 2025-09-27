import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center font-light
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    group overflow-hidden
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl', // Increased size for more emphasis
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
      text-white shadow-lg
      hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-800
      hover:shadow-2xl hover:shadow-purple-500/25
      focus:ring-indigo-500
      before:absolute before:inset-0 before:rounded-xl 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:translate-x-[-100%] before:transition-transform before:duration-700
      hover:before:translate-x-[100%]
      after:absolute after:inset-0 after:rounded-xl
      after:bg-gradient-to-r after:from-indigo-400/50 after:to-purple-400/50
      after:blur-lg after:opacity-0 after:transition-opacity after:duration-300
      hover:after:opacity-100 after:-z-10
    `,
    secondary: `
      bg-gradient-to-r from-neutral-100 to-neutral-200 
      text-neutral-900 border border-neutral-300
      hover:from-neutral-200 hover:to-neutral-300
      hover:shadow-lg hover:shadow-neutral-500/20
      focus:ring-neutral-500
    `,
    outline: `
      border-2 border-indigo-600 text-indigo-600 bg-transparent
      hover:bg-indigo-600 hover:text-white hover:border-indigo-600
      hover:shadow-lg hover:shadow-indigo-500/25
      focus:ring-indigo-500
      before:absolute before:inset-0 before:rounded-xl
      before:bg-indigo-600 before:scale-x-0 before:transition-transform 
      before:duration-300 before:origin-left before:-z-10
      hover:before:scale-x-100
    `,
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export { Button };