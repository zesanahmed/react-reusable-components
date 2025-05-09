import cn from "../../utils/cn";

const Button = ({ className, outline }) => {
  return (
    <button
      className={cn(
        "bg-red-600 px-3 py-2 rounded-md",
        {
          "border border-purple-500 bg-opacity-10": outline,
        },
        className
      )}
    >
      Button
    </button>
  );
};

export default Button;
