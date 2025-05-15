import { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from "./Form";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn("grid grid-cols-1 justify-items-center gap-4", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
