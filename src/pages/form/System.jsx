import React, { useState } from 'react'
import { FormComponent } from '../Components.jsx'
import { data } from "../People/data.js";


export const System = () => {
  const [name, setName] = useState('');
  const [delName, setDelName] = useState('');
  const func  = (e) => {
    e.preventDefault();
    let found = false;    
    try {
      let result = data.find(user => user.name.toLowerCase() == name.toLowerCase());

      if(result != undefined)
        throw new Error("User Already Exists")
      
      else 
        data[data.length] = {"id": data.length + 1, "name": name};
    } catch(e) {
      alert("User Already Exists");
      found = true;
    }
     
    if(!found){
        alert(`User: ${name} added successfully`);
        console.log(data);
    }
  }

  const func2 = (e) => {
    e.preventDefault();
    let found = true;
    try {
      let result = data.find(user => user.name.toLowerCase() === delName.toLowerCase());
  
      if (result === undefined) {
        throw new Error("User not found");
      }
  
      let index = data.indexOf(result);
      data.splice(index, 1);
    } catch (e) {
      alert(`Could Not Remove User: ${e.message}`);
      found = false;
      return;
    } 
    if(found){
        alert(`User: ${delName} removed successfully`);
        console.log(data);
    }
  };
   
  return (
    <>
      <FormComponent title = "Add User" m1 = "Name" t1="text" setV1={setName} func = {func}  sub="Add" />
      <FormComponent title = "Remove User" m1 = "Name" t1="text" setV1={setDelName} func = {func2}  sub="Remove" />
    </>
  )
}