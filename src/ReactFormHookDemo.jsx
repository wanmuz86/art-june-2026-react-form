import React from 'react';
import { useForm } from 'react-hook-form';

export default function ReactFormHookDemo() {
    // register - linking it to the state, each of the input needs to be registered
    // handleSubmit - A hook that accept a callback function that will be invoked upon form submission
    // watch - listen , as user is typing you want to intercept and do something
    // Example can see here - https://react-hook-form.com/docs/useform/watch
    // example use case - narrow down the state, Sel
    // formState: {errors}.  - store the errors state when validation failed
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // onSubmit function will be called when the form is submitted
  const onSubmit = data =>  {
    alert(`Form submitted and the data is : ${data.name}, ${data.email} ....`)
    console.log(JSON.stringify(data));
  }

  // errors
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* When we register the form, we define the validation rules as well, eg: required */}
      <select {...register("title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <input type="text" placeholder="Name" {...register("name", {required: true})} />
       {
        errors.name && <p>Please ensure that the name is there</p>
      }
          {/* When we register the form, we define the validation rules as well, eg: required and email pattern regex */}
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      {
        errors.email && <p>Please ensure that email is in the right format</p>
      }
      
      <input type="number" placeholder="Phone number" {...register("phonenumber", {required: true})} />
       {
        errors.phonenumber && <p>Please ensure that the Phone Number is there</p>
      }

<div>
<label>Male</label>
</div>

      <input {...register("gender", { required: true })} type="radio" value="male" />
      <div>
      <label>Female</label>
      <input {...register("gender", { required: true })} type="radio" value="female" />
      </div>
        <div>
      <label>Prefer not to state</label>
      <input {...register("gender", { required: true })} type="radio" value="prefernottostate" />
</div>
<label>IT</label>
      <input {...register("department", { required: true })} type="radio" value="IT" />
      <label>Sales</label>
      <input {...register("department", { required: true })} type="radio" value="Sales" />
      <input {...register("department", { required: true })} type="radio" value="Marketing" />
      <input {...register("department", { required: true })} type="radio" value="Admin" />
      <input {...register("department", { required: true })} type="radio" value="Operation" />
      <input {...register("department", { required: true })} type="radio" value="Others" />

      <input type="submit" />
    </form>
  );
}
