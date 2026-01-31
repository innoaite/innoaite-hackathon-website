import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', // 'primary' or 'ghost'
  href, 
  className = '', 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:brightness-110 hover:-translate-y-0.5 shadow-[0_10px_40px_rgba(79,70,229,0.4)]",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  // Combine base class with variant and custom classes
  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  // If href is provided, render an anchor <a>, otherwise a <button>
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;