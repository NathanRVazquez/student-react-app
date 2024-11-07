

export function StudentInfo(props) {
  // export function StudentInfo({lastName,firstName,id, major}) {
  // called destructuring
  return (
    <div>
      {/* <div>{lastName},{firstName}</div> */}
      <div>{props.lastName},{props.firstName}</div>
      <ul>
        <li>
          <strong>ID:</strong> {props.sId}
        </li>
        <li>
          <strong>School:</strong> {props.school}
        </li>
        <li>
          <strong>Major:</strong> {props.major}
        </li>
      </ul>
    </div>
  );
}


function ClassList() {
  return (
    <div>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
      {studentList.map((student) => (
        <StudentInfo {...student} key={student.sId} />
      ))}
    </div>
  );
}

