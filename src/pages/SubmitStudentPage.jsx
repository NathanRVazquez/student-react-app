import { useState } from 'react';
export const SubmitStudentPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');
  const [school, setSchool] = useState('');

  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data


  const handleChange= async (e)=>{
    e.preventDefault();
    // what is prevent default doing 
  };

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
      <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
      <input type="text" placeholder="Major" onChange={(e)=>setMajor(e.target.value)}/>
      <input type="text" placeholder="School" onChange={(e)=>setSchool(e.target.value)}/>
      
      <button type="button" onClick={async () => {
        console.log("lastName: ",lastName);
        console.log(major);
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/students`, {
          body: JSON.stringify({
            sId: `${Math.random()}`,
            firstName: firstName,
            lastName: lastName,
            major: major,
            school: school,
          }),
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
        });
      }}>Submit</button>
    </form>
  );
};