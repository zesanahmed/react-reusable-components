import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
import Container from "./components/ui/Container";
import { z } from "zod";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTest>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    <Container>
      <Form
        double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
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
          <Input
            type="email"
            label="Email"
            register={register("email")}
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
