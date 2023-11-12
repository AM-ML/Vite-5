import React, { useState } from 'react'
import { FormComponent } from '../Components.jsx'

export const System = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
  }

  return (
    <FormComponent setV2={setEmail} m2="Email" setV1={setName} m1="Name" title="Controlled Inputs" t2="email" func={handleSubmit} />
  )
}


// t1 v1 m1 setV1
// t2 v2 m2 setV2
// title