import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type Tref = HTMLButtonElement;
type TVariant = "solid" | "outline" | "ghost";
type TButton = {
  variant?: TVariant;
};
type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButton;

const Button = forwardRef<Tref, TButtonProps>(
  ({ className, variant = "solid", ...rest }, ref) => {
    const getVariantClass = (variant: TVariant) => {
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
      <button
        {...rest}
        ref={ref}
        className={cn(getVariantClass(variant), className)}
      >
        Button
      </button>
    );
  }
);

export default Button;
