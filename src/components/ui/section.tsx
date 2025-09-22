import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ children, className = '', centered = true }: SectionHeaderProps) {
  const centerClasses = centered ? 'text-center' : '';
  return (
    <div className={`mb-12 ${centerClasses} ${className}`}>
      {children}
    </div>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionTitle({ children, className = '', as: Component = 'h2' }: SectionTitleProps) {
  const baseClasses = 'font-bold text-gray-900 mb-4';
  const sizeClasses = Component === 'h1' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl';
  
  return (
    <Component className={`${baseClasses} ${sizeClasses} ${className}`}>
      {children}
    </Component>
  );
}

interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionSubtitle({ children, className = '' }: SectionSubtitleProps) {
  return (
    <p className={`text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto ${className}`}>
      {children}
    </p>
  );
}