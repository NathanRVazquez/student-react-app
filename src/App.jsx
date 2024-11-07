import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link} from 'react-router-dom'

import './App.css'
import {StudentInfo } from "./Studentinfo.jsx"

export function App() {
  // props are why components are reusable
  // state are meant to be changed
  // the purpose of states is that it is dynamic

  // const studentList = [
  //   {
  //     firstName: "Misty",
  //     lastName: "Knight",
  //     sId: "234",
  //     school: "Queens College",
  //     major: "Law",
  //   },
  //   {
  //     firstName: "Jessica",
  //     lastName: "Jones",
  //     sId: "434",
  //     school: "Brooklyn College",
  //     major: "CS",
  //   },
  //   {
  //     firstName: "Colleen",
  //     lastName: "Wing",
  //     sId: "233",
  //     school: "Queens College",
  //     major: "CS",
  //   },
  //   {
  //     firstName: "Dare",
  //     lastName: "Devil",
  //     sId: "876",
  //     school: "CCNY",
  //     major: "Law",
  //   },
  //   {
  //     firstName: "Luke",
  //     lastName: "Cage",
  //     sId: "323",
  //     school: "CCNY",
  //     major: "Math",
  //   },
  // ];

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      // const response = await fetch('https://json.link/oJbmHxLn8f.json');
      const response = await fetch(`${import.meta.env.BACKEND_URL}/students`);
      const data = await response.json();
      console.log(data);
      setStudents(data);
    };
    getStudents();
  }, []);

  return (
    <>

    <div>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
      {/*map should refence the new state */}
      {students.map((student) => (
        <Link to={`/student/${student.sId}`} key={student.sId}>
        <StudentInfo {...student} key={student.sId} />
        </Link> 
        // having a key will prevent the array from re rendering the entire array when new items are added
      ))}

{/*       
      <button 
      onClick={()=>{
        //we cannot mutate students directly
        //we do not mutate things directly
        //spread operator
        setStudents((oldStudentList)=>[
          ...oldStudentList,
          {
            firstName:'John',
            lastName:'doe',
            sId:'556',
            school:'NYU',
            major:'Computer Science'
          }
        ]);
      }}
      >Add a new student</button> */}
    
    {/* <button
    onClick={()=>{
      setStudents((oldStudentList)=>
        oldStudentList.slice(0,(oldStudentList.length)-1))
    }}
    >Remove last student</button> */}
    <button
        onClick={async () => {
          // use setter function when you want to use the previous state
          await fetch(`${import.meta.env.BACKEND_URL}/students`, {
            body: JSON.stringify({
              sId: '12345466756w',
              firstName: 'AJ',
              lastName: 'JA',
              major: 'Philosophy',
              school: 'Lehman',
            }),
            headers: {
              'content-type': 'application/json',
            },
            method: 'POST',
          });
        }}
      >
        Add a new student
      </button>

      <Link to={`/student/add-student`}>
        <button>
          Add a new student page
        </button>
      </Link>
    </div>

    </>

    

  )
}

// export default App
