import React, { useRef } from 'react';


// with uncontrolledForm we only get the value by the reference, eg in the case , when button pressed
/// using useRef

// there is no way for us to get the state as and when user is typing
const UncontrolledForm: React.FC = () => {
  // useRef to get the DOM reference of the form
 const nameRef = useRef<HTMLInputElement>(null);
 const emailRef = useRef<HTMLInputElement>(null);


 const handleSubmit = (event: React.SubmitEvent) => {
  // overrite the default Form behaviour and use SPA handler
   event.preventDefault();

   const name = nameRef.current?.value;
   const email = emailRef.current?.value;
   
   alert(`Name: ${name}, Email: ${email}`);
 };


 return (
   <form onSubmit={handleSubmit}>
     <label>
       Name:
       {/* link the input to the ref */}
       <input type="text" ref={nameRef} />
     </label>
     <label>
       Email:
          {/* link the input to the ref */}
       <input type="email" ref={emailRef} />
     </label>
     <button type="submit">Submit</button>
   </form>
 );
};


export default UncontrolledForm;