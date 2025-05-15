import Button from "../ui/Button";
import cn from "../../utils/cn";
import { useContext } from "react";
import { FormElementContext } from "./Form";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn("grid grid-cols-1 justify-items-center gap-4 my-5", {
        "grid-cols-2": double,
      })}
    >
      <div className="w-full col-start-1 md:col-start-2 flex justify-end">
        <Button className="w-full md:w-fit" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};
