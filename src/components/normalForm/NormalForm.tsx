import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("border-2 border-purple-500 max-w-lg mx-auto m-2 p-4", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn("grid grid-cols-1 justify-items-center gap-4", {
            "grid-cols-2": double,
            "grid-cols-1": !double,
          })}
        >
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input className="" type="text" id="name" {...register("name")} />
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              className="w-full"
              type="text"
              id="name"
              {...register("email")}
            />
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
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="password" className="block">
              Select
            </label>
            <select className="rounded-md" {...register("select")}>
              <option>one</option>
              <option>two</option>
              <option>three</option>
              <option>four</option>
            </select>
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="password" className="block">
              Blog
            </label>
            <textarea className="appearance-none rounded-md"></textarea>
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="password" className="block">
              Blog
            </label>
            <input
              className="w-4 h-4 border-2 checked:bg-purple-500"
              type="checkbox"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NormalForm;
