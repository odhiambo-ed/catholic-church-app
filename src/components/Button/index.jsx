import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder12: "rounded-[12px]",
  icbCircleBorder24: "rounded-[24px]",
};
const variants = {
  FillOrange100: "bg-orange_100 text-gray_900_01",
  FillOrange200: "bg-orange_200",
  Outline: "bg-gray_900 text-orange_100",
  Outline_1: "bg-orange_100",
  Outline_2: "bg-orange_200",
  icbFillOrange100: "bg-orange_100",
};
const sizes = { sm: "p-[18px]", md: "p-[22px] sm:px-5", smIcn: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder12", "icbCircleBorder24"]),
  variant: PropTypes.oneOf([
    "FillOrange100",
    "FillOrange200",
    "Outline",
    "Outline_1",
    "Outline_2",
    "icbFillOrange100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
