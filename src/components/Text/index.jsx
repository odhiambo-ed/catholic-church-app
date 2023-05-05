import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-[64px]",
  h2: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h3: "font-bold md:text-3xl sm:text-[28px] text-[32px]",
  h4: "text-2xl md:text-[22px] sm:text-xl",
  h5: "font-normal text-lg",
  h6: "text-base",
  body1: "text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
