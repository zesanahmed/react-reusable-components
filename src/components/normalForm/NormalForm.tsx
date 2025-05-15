import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "./Validation";
import InputField from "./InputField";

const NormalForm = () => {
  const methods = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  console.log(watch("name"));

  const double = true;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "border-2 border-purple-500 rounded-lg max-w-lg mx-auto p-4",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        <div
          className={cn("grid grid-cols-1 justify-items-center gap-4", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block">
              Something
            </label>
            <InputField />
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input className="" type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              className="w-full"
              type="text"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              className="w-full"
              type="password"
              id="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
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
      </form>
    </FormProvider>
  );
};

export default NormalForm;
