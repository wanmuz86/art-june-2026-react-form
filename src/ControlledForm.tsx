import React, { useState } from 'react';


const ControlledForm: React.FC = () => {
    // Data data is stored inside an object, FormInput interface
 const [formData, setFormData] = useState({ name: '', email: '' });


 // handleChange method
 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event = Input change Event
    // event.target = input
    // event.target.name.  (name, email), event.target.value ("Muzaffar", "wanwan@gmail.com")
   const { name, value } = event.target;
   
   // prevData refer to the previous stateData
// Get the prevData and use spread operator on an object to ovewrite
// [name] = either name or email
// [value] = 
   setFormData(prevData => ({ ...prevData, [name]: value }));

   // TODO : Use reference to get the scenario checkboxes
 };


 const handleSubmit = (event: React.SubmitEvent) => {
    // overrite the default Form behaviour and use SPA handler
   event.preventDefault();
   alert(`Name: ${formData.name}, Email: ${formData.email}`);
 };


 return (
    // for each of the input, set the value and onChange
   <form onSubmit={handleSubmit}>
     <label>
       Name:
       <input type="text" name="name" value={formData.name} onChange={handleChange} />
     </label>
     <label>
       Email:
       <input type="email" name="email" value={formData.email} onChange={handleChange} />
     </label>
     <button type="submit">Submit</button>
   </form>
 );
};


export default ControlledForm;
