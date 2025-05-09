import cn from "../../utils/cn";

const Button = ({ className, variant }) => {
  const getVariantClass = (variant) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";
      default:
        return "btn-solid";
    }
  };
  return (
    <button className={cn(getVariantClass(variant), className)}>Button</button>
  );
};

export default Button;
