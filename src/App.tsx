import { FieldValues, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit } from "./components/ReusableForm";
import Container from "./components/ui/Container";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
