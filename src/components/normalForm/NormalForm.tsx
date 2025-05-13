import { useForm } from "react-hook-form";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-purple-500 max-w-5xl mx-auto
        p-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              className="w-full"
              type="text"
              id="name"
              {...register("name")}
            />
          </div>
          <div>
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
          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              className="w-full"
              type="text"
              id="password"
              {...register("password")}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NormalForm;
