import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

export function StudentDetailPage() {
const {sId} = useParams(); 
const [student, setStudent] = useState(null);

useEffect(() => {
    const getStudentData = async () => {
      // const response = await fetch('https://json.link/oJbmHxLn8f.json');
    const response = await fetch(`import.meta.env.BACKEND_URL/students/${sId}`);
      const data = await response.json();
      console.log(data);
      setStudent(data);
    };
    getStudentData();
  }, [sId]);

//   return <div>{student:<h1>{student.sId}</h1> ? '...Loading';}</div>
  return <div>{student ? <h1>{student.sId}</h1> : 'Loading...'}</div>;
//   return <div>{character ? <img src={character.image} /> : 'Loading...'}</div>;


}