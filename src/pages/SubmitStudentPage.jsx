// import { useState } from 'react';
// import {useForm} from 'react-hook-form';


// export const SubmitStudentPage = () => {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();


// const onSubmit =async(data)=>
//    await fetch(`${import.meta.env.VITE_BACKEND_URL}/students`, {
//   body: JSON.stringify({
//     sId: `${Math.random()}`,
//     firstName: data.firstName,
//     lastName: data.lastName,
//     major: data.major,
//     school: data.school,
//     grade: data.grade,
//   }),
//   headers: {
//     'content-type': 'application/json',
//   },
//   method: 'POST',
// });
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [major, setMajor] = useState('');
//   const [school, setSchool] = useState('');
//   const [grade, setGrade]=useState('');
//   // 1. add onChange handlers to each input to update the state
//   // 2. add onSubmit handler to the form to submit the data


//   const handleChange= async (e)=>{
//     e.preventDefault();
//     // what is prevent default doing 
//   };

//   return (
//     <form>
//       <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
//       <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
//       <input type="text" placeholder="Major" onChange={(e)=>setMajor(e.target.value)}/>
//       <input type="text" placeholder="School" onChange={(e)=>setSchool(e.target.value)}/>
//       <div>
//       <input type="radio" placeholder='Grade' onChange={(e)=>setGrade(e.target.value)} />
//       <label for="FRESHMAN">FRESHMAN</label>
//       </div>

//       <div>
//       <input type="radio" placeholder='Grade' onChange={(e)=>setGrade(e.target.value)} />
//       <label for="SOPHMORE">SOPHMORE</label>
//       </div>
      
//       <div>
//       <input type="radio" placeholder='Grade' onChange={(e)=>setGrade(e.target.value)} />
//       <label for="JUNIOR">JUNIOR</label>
//       </div>

//       <div>
//       <input type="radio" placeholder='Grade' onChange={(e)=>setGrade(e.target.value)} />
//       <label for="SENIOR">SENIOR</label>
//       </div>
      
//       <button type="button" onClick={async () => {
//         console.log("lastName: ",lastName);
//         console.log(major);
//         await fetch(`${import.meta.env.VITE_BACKEND_URL}/students`, {
//           body: JSON.stringify({
//             sId: `${Math.random()}`,
//             firstName: firstName,
//             lastName: lastName,
//             major: major,
//             school: school,
//             grade: grade,
//           }),
//           headers: {
//             'content-type': 'application/json',
//           },
//           method: 'POST',
//         });
//       }}>Submit</button>
//     </form>
//   );
// };

// --------------------------------------------------------



import { useForm } from 'react-hook-form';

export const SubmitStudentPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await fetch(`${import.meta.env.VITE_API_URL}/students`, {
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        major: data.major,
        school: data.school,
      }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });
  };

  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" {...register('firstName')} />
      <input type="text" placeholder="Last Name" {...register('lastName')} />
      <input type="text" placeholder="Major" {...register('major')} />
      <input type="text" placeholder="School" {...register('school')} />
      <button type="submit">Submit</button>
    </form>
  );
};