import { createContext } from "react";
import cn from "../../utils/cn";
import { TForm } from "../../types";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "border-2 border-purple-500 rounded-lg max-w-lg mx-auto p-4",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
