import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Input } from '../../components/input/Input';
const Contact = () => {
    const [formState, inputHandler] = useForm({
        name: {value: ''},
        email: {value: ''},
        description: {value: ''},
        address: {value: ''},
        number: {value: ''}
    });
    const submitHandler = (event:any) => { event.preventDefault();
        console.log(formState.inputs);
    }
  return (
     <form onSubmit={submitHandler}>
        <Input id="name" placeholder='Name' name='name'  type="text" label="Name"
          onInput={inputHandler} />
        <Input id="email" placeholder='Email' name='email' type="e-mail" label="E-mail"
        onInput={inputHandler} />
        <Input id="description" placeholder='Description' name='description' type='text' label="Description"
         onInput={inputHandler}  />
        <Input id="address" placeholder='Address' name='address' type="text" label="Address"
        onInput={inputHandler}  />
         <Input id="number" type="number" name='number' placeholder='Number' label="Number"
        onInput={inputHandler}  />
        <button type="submit"> SUBMIT</button>
     </form>
  );
}

export default Contact;